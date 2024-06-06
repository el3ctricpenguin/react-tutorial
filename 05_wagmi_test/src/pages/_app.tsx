import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { WagmiProvider } from "wagmi";
import { config } from "../config";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />{" "}
            </QueryClientProvider>
        </WagmiProvider>
    );
}
