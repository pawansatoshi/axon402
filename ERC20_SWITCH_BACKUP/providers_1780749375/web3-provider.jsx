"use client"

import "@rainbow-me/rainbowkit/styles.css"

import {
  RainbowKitProvider,
  darkTheme,
  getDefaultConfig,
} from "@rainbow-me/rainbowkit"

import {
  metaMaskWallet,
  trustWallet,
  coinbaseWallet,
  walletConnectWallet,
  okxWallet,
  bitgetWallet,
  injectedWallet,
} from "@rainbow-me/rainbowkit/wallets"

import {
  WagmiProvider,
  http,
} from "wagmi"

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"

import { defineChain } from "viem"

const arcTestnet = defineChain({
  id: 5042002,

  name: "Arc Testnet",

  nativeCurrency: {
    name: "USDC",
    symbol: "USDC",
    decimals: 18,
  },

  rpcUrls: {
    default: {
      http: [
        "https://rpc.testnet.arc.network"
      ],
    },
  },

  blockExplorers: {
    default: {
      name: "ArcScan",
      url: "https://testnet.arcscan.app",
    },
  },

  testnet: true,
})

const config = getDefaultConfig({
  appName: "AXON402",

  projectId:
    "a0031066837361c93d02ae2f139acc98",

  chains: [arcTestnet],

  wallets: [
    {
      groupName: "Recommended",

      wallets: [
        injectedWallet,
        metaMaskWallet,
        trustWallet,
        okxWallet,
        bitgetWallet,
        walletConnectWallet,
        coinbaseWallet,
      ],
    },
  ],

  transports: {
    [arcTestnet.id]: http(
      "https://rpc.testnet.arc.network"
    ),
  },

  ssr: false,
})

const queryClient = new QueryClient()

export default function Web3Provider({
  children,
}) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider
        client={queryClient}
      >
        <RainbowKitProvider
          theme={darkTheme()}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
