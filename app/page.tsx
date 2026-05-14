"use client"

import { Sidebar } from "@/components/infrastructure/sidebar"
import { MetricGrid } from "@/components/infrastructure/metric-grid"
import { ActivityPanel } from "@/components/observability/activity-panel"
import { LiveLedger } from "@/components/ledger/live-ledger"
import { TestExecution } from "@/components/execution/test-execution"

export default function HomePage() {
  return (
    <main className="flex min-h-screen bg-[#06070A] text-white">
      <Sidebar />

      <div className="flex-1">
        <header className="border-b border-white/10 bg-white/[0.02] backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">
                Infrastructure Overview
              </h1>

              <p className="mt-1 text-sm text-zinc-400">
                Deterministic infrastructure for autonomous coordination.
              </p>
            </div>

            <div className="flex flex-col items-end gap-3">
              <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                ARC TESTNET ACTIVE
              </div>

              <TestExecution />
            </div>
          </div>
        </header>

        <section className="mx-auto max-w-7xl px-6 py-8">
          <MetricGrid />

          <div className="mt-8 grid gap-8 xl:grid-cols-[1.5fr_0.9fr]">
            <div className="space-y-8">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-zinc-400">
                      Coordination Layer
                    </div>

                    <h2 className="mt-2 text-3xl font-semibold">
                      Autonomous Infrastructure Execution
                    </h2>
                  </div>

                  <div className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                    Operational
                  </div>
                </div>

                <p className="mt-6 max-w-3xl text-zinc-400">
                  AXON402 provides programmable execution infrastructure,
                  deterministic settlement coordination, observability systems,
                  and institutional-grade orchestration architecture built on Arc.
                </p>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 p-5">
                    <div className="text-sm text-zinc-400">
                      Settlement
                    </div>

                    <div className="mt-2 text-lg font-medium">
                      Arc-native execution
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 p-5">
                    <div className="text-sm text-zinc-400">
                      Security
                    </div>

                    <div className="mt-2 text-lg font-medium">
                      Policy-controlled infrastructure
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 p-5">
                    <div className="text-sm text-zinc-400">
                      Identity
                    </div>

                    <div className="mt-2 text-lg font-medium">
                      Unified coordination profiles
                    </div>
                  </div>
                </div>
              </div>

              <LiveLedger />
            </div>

            <ActivityPanel />
          </div>
        </section>
      </div>
    </main>
  )
}
