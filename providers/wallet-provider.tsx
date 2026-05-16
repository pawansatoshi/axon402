"use client"

import "@rainbow-me/rainbowkit/styles.css"

import {
  RainbowKitProvider,
  getDefaultConfig,
} from "@rainbow-me/rainbowkit"

import {
  WagmiProvider,
} from "wagmi"

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"

const arcTestnet = {
  id: 5042002,
  name: "Arc Testnet",
  network: "arc-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "ARC",
    symbol: "ARC",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.arc.network"],
    },
    public: {
      http: ["https://rpc.testnet.arc.network"],
    },
  },
}

const config = getDefaultConfig({
  appName: "AXON402",
  projectId: "axon402",
  chains: [arcTestnet],
})

const queryClient = new QueryClient()

export default function WalletProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
