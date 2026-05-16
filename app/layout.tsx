"use client"

import "./globals.css"

import { WagmiProvider, createConfig, http } from "wagmi"
import { mainnet } from "wagmi/chains"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import {
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit"

import "@rainbow-me/rainbowkit/styles.css"

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
})

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>

        <WagmiProvider config={config}>

          <QueryClientProvider client={queryClient}>

            <RainbowKitProvider>

              {children}

            </RainbowKitProvider>

          </QueryClientProvider>

        </WagmiProvider>

      </body>
    </html>
  )
}
