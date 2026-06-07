"use client"

import WalletConnect from "@/components/wallets/wallet-connect"
import SendUSDC from "@/components/tx/send-usdc.jsx"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">

        <div className="mb-6 inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-400 text-sm">
          AXON402 Infrastructure
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-8">
          Learn. Build. Analyze.
          <br />
          Execute.
        </h1>

        <p className="text-zinc-400 text-xl leading-relaxed max-w-3xl mb-12">
          Universal operational intelligence powered by stable blockchain infrastructure.
        </p>

        <WalletConnect />

        <div className="rounded-3xl border border-cyan-500/10 bg-black/40 backdrop-blur-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            Arc Network
          </h2>

          <div className="space-y-4 text-lg">
            <div>
              Current Chain: 5042002
            </div>

            <div className="text-green-400">
              Connected to Arc Testnet
            </div>
          </div>
        </div>

        <SendUSDC />

      </div>
    </main>
  )
}
