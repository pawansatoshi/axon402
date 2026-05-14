"use client"

import { useState } from "react"

const tabs = [
  "overview",
  "observability",
  "ledger",
  "wallets",
  "security",
  "notifications",
  "settings"
]

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">
          <h1 className="text-5xl font-semibold tracking-tight">
            AXON402
          </h1>

          <p className="mt-3 text-zinc-400 max-w-2xl">
            Deterministic infrastructure for autonomous coordination
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-lg border px-4 py-2 text-sm transition-all ${
                activeTab === tab
                  ? "border-cyan-400 bg-cyan-500/20 text-cyan-300"
                  : "border-white/10 bg-white/5 text-zinc-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <section className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-zinc-500">
                Infrastructure Status
              </div>

              <div className="mt-2 text-2xl font-semibold">
                Arc Testnet Operational
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-zinc-500 text-sm">
                    Execution Throughput
                  </div>
                  <div className="mt-1 text-xl">
                    1,284
                  </div>
                </div>

                <div>
                  <div className="text-zinc-500 text-sm">
                    Settlement Volume
                  </div>
                  <div className="mt-1 text-xl">
                    42,800 USDC
                  </div>
                </div>

                <div>
                  <div className="text-zinc-500 text-sm">
                    Latency
                  </div>
                  <div className="mt-1 text-xl">
                    84ms
                  </div>
                </div>

                <div>
                  <div className="text-zinc-500 text-sm">
                    Infrastructure Health
                  </div>
                  <div className="mt-1 text-xl">
                    99.98%
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === "ledger" && (
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-xl font-semibold">
              Infrastructure Ledger
            </div>

            <div className="mt-4 space-y-3">
              <div className="rounded-xl border border-white/10 p-4">
                <div className="text-sm text-zinc-500">
                  Settlement Finalized
                </div>

                <div className="mt-1 font-mono text-sm break-all">
                  0x32c59bb4c662519140040cd69ab2e4e2b055b48afa97bf...
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab !== "overview" &&
          activeTab !== "ledger" && (
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-xl font-semibold capitalize">
              {activeTab}
            </div>

            <div className="mt-4 text-zinc-400">
              Infrastructure module active.
            </div>
          </section>
        )}

      </div>
    </main>
  )
}
