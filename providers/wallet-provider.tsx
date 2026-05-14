"use client"

import "@rainbow-me/rainbowkit/styles.css"

import {
  RainbowKitProvider,
  darkTheme
} from "@rainbow-me/rainbowkit"

import {
  WagmiProvider
} from "wagmi"

import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query"

import { config }
from "@/lib/wallet/wagmi-config"

const queryClient=
new QueryClient()

export function WalletProvider({
  children
}:{
  children:React.ReactNode
}){

  return(

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
