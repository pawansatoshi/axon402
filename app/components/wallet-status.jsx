"use client"

import { useEffect, useState } from "react"

import { useAccount } from "wagmi"

import ConnectWallet from "./connect-wallet"

export default function WalletStatus() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const { address, isConnected } = useAccount()

  if (!mounted) {
    return null
  }

  return (
    <div className="mt-10 rounded-3xl border border-cyan-500/20 bg-black/40 p-6">
      <h2 className="text-2xl font-bold text-cyan-400">
        Wallet Infrastructure
      </h2>

      <div className="mt-6 space-y-3 text-zinc-300">
        <p>
          Status:
          <span className="ml-2 text-white">
            {isConnected ? "Connected" : "Disconnected"}
          </span>
        </p>

        <p>
          Address:
          <span className="ml-2 text-white break-all">
            {address || "No wallet connected"}
          </span>
        </p>
      </div>

      <ConnectWallet />
    </div>
  )
}
