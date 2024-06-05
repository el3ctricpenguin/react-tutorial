import { useState } from "react";

export default function CatDonation() {
    const [isConnected, setIsConnected] = useState(false);
    return (
        <>
            <h2>Donation for cat</h2>
            {isConnected ? undefined : <button>Connect Wallet</button>}
            <p>Your wallet address: </p>
            <p>ETH Balance: </p>
        </>
    );
}
