"use client"

import { StatusCard } from "@/components/infrastructure/status-card"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#06070A] text-white">
      <div className="border-b border-white/10 bg-white/[0.02] backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              AXON402
            </h1>

            <p className="text-sm text-zinc-400">
              Deterministic infrastructure for autonomous coordination.
            </p>
          </div>

          <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
            ARC TESTNET ACTIVE
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <StatusCard
            title="Infrastructure Status"
            value="Operational"
            status="Execution systems online"
          />

          <StatusCard
            title="Settlement Layer"
            value="Arc"
            status="USDC-native execution"
          />

          <StatusCard
            title="Wallet Orchestration"
            value="Connected"
            status="Session verified"
          />

          <StatusCard
            title="Observability"
            value="Realtime"
            status="Latency monitoring active"
          />
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <h2 className="text-2xl font-semibold">
            Infrastructure Coordination Layer
          </h2>

          <p className="mt-4 max-w-3xl text-zinc-400">
            AXON402 provides programmable execution infrastructure for
            autonomous coordination, settlement orchestration, and
            infrastructure-grade observability on Arc Network.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 p-5">
              <div className="text-sm text-zinc-400">
                Settlement
              </div>

              <div className="mt-2 text-lg font-medium">
                Deterministic execution
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 p-5">
              <div className="text-sm text-zinc-400">
                Security
              </div>

              <div className="mt-2 text-lg font-medium">
                Policy-controlled orchestration
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 p-5">
              <div className="text-sm text-zinc-400">
                Identity
              </div>

              <div className="mt-2 text-lg font-medium">
                Unified infrastructure profiles
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
