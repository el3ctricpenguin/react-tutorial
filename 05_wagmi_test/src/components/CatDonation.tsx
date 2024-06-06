import { useState } from "react";
import { useAccount, useEnsName } from "wagmi";

function ShowENSAddress({ address }: { address: `0x${string}` | undefined }) {
    const { data, error, status } = useEnsName({ address });
    if (status == "pending") {
        return <>Loading ENS name...</>;
    } else if (status == "error") {
        return <>Error fetching ENS name: {error.message}</>;
    } else {
        return <>{data}</>;
    }
}

export default function CatDonation() {
    const [isConnected, setIsConnected] = useState(false);
    if (isConnected) {
        const { address } = useAccount();
        return (
            <>
                <h2>Donation for cat</h2>
                <p>Your wallet address: {address}</p>
                <p>
                    Your ENS name: <ShowENSAddress address={address} />
                </p>
                <p>ETH Balance: </p>
            </>
        );
    } else {
        return (
            <>
                <h2>Donation for cat</h2>
                <button>Connect Wallet</button>
                <p>Your wallet address: -</p>
                <p>ETH Balance: -</p>
            </>
        );
    }
}
