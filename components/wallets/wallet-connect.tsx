"use client"

import {
  ConnectButton
} from "@rainbow-me/rainbowkit"

export function WalletConnectPanel(){

  return(

    <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6">

      <div className="mb-6">

        <div className="text-sm uppercase tracking-[0.2em] text-cyan-300">
          Wallet Coordination
        </div>

        <div className="mt-2 text-3xl font-semibold">
          Arc Infrastructure Wallets
        </div>

      </div>

      <ConnectButton />

    </div>

  )
}
