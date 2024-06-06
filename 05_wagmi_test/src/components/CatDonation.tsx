import { useState } from "react";
import { useAccount, useBalance, useDisconnect, useEnsName, useSwitchChain } from "wagmi";
import { Connector, useConnect } from "wagmi";

function ShowENSAddress({ address }: { address: `0x${string}` | undefined }) {
    const { data, error, status } = useEnsName({ address });
    if (status == "pending") {
        return <>Loading ENS name...</>;
    } else if (status == "error") {
        return <>Error fetching ENS name: {error.message}</>;
    } else {
        return <>{data == null ? "no ENS registration found" : data}</>;
    }
}

function ChainSwitchButton() {
    const { chains, data, status, switchChain } = useSwitchChain();
    console.log("chains");
    console.log(chains[0].name, chains[0].id);
    console.log(chains[1].name, chains[1].id);
    console.log("data");
    console.log(data?.name, data?.id);
    console.log(data);
    console.log("status");
    console.log(status);
    return (
        <>
            {status == "pending" ? (
                <button>pending</button>
            ) : (
                chains.map((chain) =>
                    chain.id == data?.id ? null : (
                        <button key={chain.id} onClick={() => switchChain({ chainId: chain.id })}>
                            Switch to {chain.name}
                        </button>
                    )
                )
            )}
        </>
    );
}

export default function CatDonation() {
    const { isConnected, address } = useAccount();
    const { connectors, connect } = useConnect();
    const { disconnect } = useDisconnect();
    const { data, isError, isLoading } = useBalance({ address: address });
    if (isConnected) {
        return (
            <>
                <h2>Donation for cat</h2>
                <button onClick={() => disconnect()}>Disconnect</button>
                <ChainSwitchButton />
                <p>Your wallet address: {address}</p>
                Your ENS name: <ShowENSAddress address={address} />
                <p>ETH Balance: {isLoading ? "Loading" : `${Number(data?.value) / 10 ** 18} ${data?.symbol}`}</p>
            </>
        );
    } else {
        return (
            <>
                <h2>Donation for cat</h2>
                <button onClick={() => connect({ connector: connectors[1] })}>Connect Wallet</button>
                <p>Your wallet address: -</p>
                <p>ETH Balance: -</p>
            </>
        );
    }
}
