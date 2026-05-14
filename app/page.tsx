"use client"

import { useState } from "react"
import { DashboardTabs } from "@/components/navigation/dashboard-tabs"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-7xl px-4 py-6">

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight">
              AXON402
            </h1>

            <p className="mt-3 text-zinc-400">
              Deterministic infrastructure for autonomous coordination
            </p>
          </div>

          <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
            Arc Testnet Operational
          </div>
        </div>

        <DashboardTabs
          active={activeTab}
          setActive={setActiveTab}
        />

        {activeTab === "overview" && (
          <section className="mt-10 space-y-6">

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h2 className="text-4xl font-semibold">
                Infrastructure Overview
              </h2>

              <p className="mt-4 max-w-3xl text-zinc-400">
                AXON402 provides programmable coordination infrastructure,
                deterministic settlement orchestration,
                realtime observability systems,
                and institutional-grade execution architecture built on Arc.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-4">

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <div className="text-sm text-zinc-500">
                    Execution Throughput
                  </div>

                  <div className="mt-3 text-3xl font-semibold">
                    1,284
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <div className="text-sm text-zinc-500">
                    Settlement Volume
                  </div>

                  <div className="mt-3 text-3xl font-semibold">
                    42,800 USDC
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <div className="text-sm text-zinc-500">
                    Latency
                  </div>

                  <div className="mt-3 text-3xl font-semibold">
                    84ms
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <div className="text-sm text-zinc-500">
                    Infrastructure Health
                  </div>

                  <div className="mt-3 text-3xl font-semibold text-emerald-400">
                    99.98%
                  </div>
                </div>

              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold">
                    Autonomous Infrastructure Execution
                  </h3>

                  <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
                    Operational
                  </div>
                </div>

                <p className="mt-5 text-zinc-400">
                  Infrastructure-grade coordination systems for
                  deterministic execution, wallet orchestration,
                  policy-controlled settlement, and realtime observability.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">

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
                      Policy orchestration
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

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                <h3 className="text-2xl font-semibold">
                  Infrastructure Activity
                </h3>

                <div className="mt-6 space-y-4">

                  <div className="flex items-center justify-between rounded-2xl border border-white/10 p-4">
                    <div>
                      <div className="text-sm text-zinc-500">
                        Settlement finalized
                      </div>

                      <div className="mt-1 text-sm">
                        Execution verified
                      </div>
                    </div>

                    <div className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>

                  <div className="flex items-center justify-between rounded-2xl border border-white/10 p-4">
                    <div>
                      <div className="text-sm text-zinc-500">
                        Wallet synchronization
                      </div>

                      <div className="mt-1 text-sm">
                        Coordination profile active
                      </div>
                    </div>

                    <div className="h-3 w-3 rounded-full bg-cyan-400" />
                  </div>

                  <div className="flex items-center justify-between rounded-2xl border border-white/10 p-4">
                    <div>
                      <div className="text-sm text-zinc-500">
                        Observability
                      </div>

                      <div className="mt-1 text-sm">
                        Latency monitoring active
                      </div>
                    </div>

                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  </div>

                </div>
              </div>

            </div>

          </section>
        )}

      </div>
    </main>
  )
}
