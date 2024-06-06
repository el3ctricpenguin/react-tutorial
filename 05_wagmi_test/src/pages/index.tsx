import CatDonation from "@/components/CatDonation";
import Head from "next/head";

export default function CatPage() {
    return (
        <>
            <Head>
                <title>🐈‍⬛ Next Test</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>🐈‍⬛ real cat page on Next 🐈‍⬛</h1>
                <CatDonation />
            </main>
        </>
    );
}
