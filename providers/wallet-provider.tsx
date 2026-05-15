"use client"

import "@rainbow-me/rainbowkit/styles.css"

import { ReactNode } from "react"

import {
  RainbowKitProvider,
  darkTheme,
  getDefaultConfig
} from "@rainbow-me/rainbowkit"

import {
  WagmiProvider,
  http
} from "wagmi"

import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query"

import { defineChain } from "viem"

const queryClient = new QueryClient()

const arcTestnet = defineChain({
  id: 5042002,

  name: "Arc Testnet",

  nativeCurrency: {
    name: "ARC",
    symbol: "ARC",
    decimals: 18
  },

  rpcUrls: {
    default: {
      http: [
        "https://rpc.testnet.arc.network"
      ]
    }
  },

  blockExplorers: {
    default: {
      name: "ArcScan",
      url: "https://testnet.arcscan.app"
    }
  }
})

export const config = getDefaultConfig({
  appName: "AXON402",

  projectId: "a0031066837361c93d02ae2f139acc98",

  chains: [arcTestnet],

  transports: {
    [arcTestnet.id]:
      http("https://rpc.testnet.arc.network")
  }
})

export function WalletProvider({
  children
}: {
  children: ReactNode
}) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={darkTheme()}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default WalletProvider
