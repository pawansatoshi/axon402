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
            <h1 className="text-3xl font-semibold tracking-tight">
              AXON402
            </h1>

            <p className="mt-2 text-sm text-zinc-400">
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

              <p className="mt-4 text-zinc-400">
                Programmable coordination infrastructure for autonomous execution systems.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-4">

                <div className="rounded-2xl border border-white/10 p-5">
                  <div className="text-sm text-zinc-500">
                    Execution Throughput
                  </div>

                  <div className="mt-3 text-3xl font-semibold">
                    1,284
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 p-5">
                  <div className="text-sm text-zinc-500">
                    Settlement Volume
                  </div>

                  <div className="mt-3 text-3xl font-semibold">
                    42,800 USDC
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 p-5">
                  <div className="text-sm text-zinc-500">
                    Latency
                  </div>

                  <div className="mt-3 text-3xl font-semibold">
                    84ms
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 p-5">
                  <div className="text-sm text-zinc-500">
                    Infrastructure Health
                  </div>

                  <div className="mt-3 text-3xl font-semibold text-emerald-400">
                    99.98%
                  </div>
                </div>

              </div>
            </div>

          </section>
        )}

        {activeTab === "observability" && (
          <section className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-3xl font-semibold">
              Observability Layer
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-3">

              <div className="rounded-2xl border border-white/10 p-5">
                <div className="text-sm text-zinc-500">
                  RPC Status
                </div>

                <div className="mt-2 text-lg text-emerald-400">
                  Operational
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 p-5">
                <div className="text-sm text-zinc-500">
                  Coordination Latency
                </div>

                <div className="mt-2 text-lg">
                  84ms
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 p-5">
                <div className="text-sm text-zinc-500">
                  Settlement Integrity
                </div>

                <div className="mt-2 text-lg">
                  Verified
                </div>
              </div>

            </div>
          </section>
        )}

        {activeTab === "ledger" && (
          <section className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-3xl font-semibold">
              Infrastructure Ledger
            </h2>

            <div className="mt-6 space-y-4">

              <div className="rounded-2xl border border-white/10 p-5">
                <div className="text-sm text-zinc-500">
                  Latest Settlement
                </div>

                <div className="mt-2 font-mono text-sm text-cyan-300">
                  0x32c59bb4c662519140040cd69ab2e4e2b055b48afa97bf...
                </div>
              </div>

            </div>
          </section>
        )}

        {activeTab === "wallets" && (
          <section className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-3xl font-semibold">
              Wallet Infrastructure
            </h2>

            <div className="mt-6 text-zinc-400">
              Unified wallet coordination layer operational.
            </div>
          </section>
        )}

        {activeTab === "security" && (
          <section className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-3xl font-semibold">
              Security Layer
            </h2>

            <div className="mt-6 text-zinc-400">
              Policy-controlled infrastructure security active.
            </div>
          </section>
        )}

        {activeTab === "notifications" && (
          <section className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-3xl font-semibold">
              Infrastructure Notifications
            </h2>

            <div className="mt-6 space-y-4">

              <div className="rounded-2xl border border-white/10 p-4">
                Settlement finalized
              </div>

              <div className="rounded-2xl border border-white/10 p-4">
                Wallet synchronization complete
              </div>

            </div>
          </section>
        )}

        {activeTab === "settings" && (
          <section className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-3xl font-semibold">
              Infrastructure Settings
            </h2>

            <div className="mt-6 text-zinc-400">
              Execution policy and coordination controls.
            </div>
          </section>
        )}

      </div>
    </main>
  )
}
