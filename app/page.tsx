"use client"

import { useState } from "react"

import { MetricCard } from "@/components/dashboard/metric-card"
import { StatusBanner } from "@/components/infrastructure/status-banner"
import { LedgerEntry } from "@/components/ledger/ledger-entry"
import { WalletPanel } from "@/components/wallets/wallet-panel"
import { ActivityFeed } from "@/components/observability/activity-feed"

const tabs=[
  "overview",
  "ledger",
  "wallets",
  "observability",
  "security",
  "notifications",
  "settings"
]

export default function HomePage(){

  const [activeTab,setActiveTab]=
  useState("overview")

  return(
    <main className="min-h-screen p-6">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10">
          <div className="text-5xl font-semibold tracking-tight">
            AXON402
          </div>

          <div className="mt-4 max-w-2xl text-zinc-400">
            Deterministic infrastructure
            for autonomous coordination.
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {tabs.map((tab)=>(
            <button
              key={tab}
              onClick={()=>
              setActiveTab(tab)}
              className={`rounded-xl border px-4 py-2 text-sm transition-all ${
                activeTab===tab
                ? "border-cyan-400 bg-cyan-500/20 text-cyan-300"
                : "border-white/10 bg-white/5 text-zinc-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab==="overview" && (
          <div className="space-y-8">

            <StatusBanner />

            <div className="infrastructure-grid">
              <MetricCard
                label="Execution Throughput"
                value="1,284"
              />

              <MetricCard
                label="Settlement Volume"
                value="42,800 USDC"
              />

              <MetricCard
                label="Latency"
                value="84ms"
              />

              <MetricCard
                label="Infrastructure Health"
                value="99.98%"
              />
            </div>

            <ActivityFeed />

          </div>
        )}

        {activeTab==="ledger" && (
          <div className="space-y-4">
            <LedgerEntry
              hash="0x32c59bb4c662519140040cd69ab2e4e2b055b48afa97bf..."
              status="Finalized"
            />

            <LedgerEntry
              hash="0x8fca14aa55bc821dca4400baaf991cc772..."
              status="Confirmed"
            />
          </div>
        )}

        {activeTab==="wallets" && (
          <WalletPanel />
        )}

        {activeTab==="observability" && (
          <ActivityFeed />
        )}

        {activeTab!=="overview" &&
         activeTab!=="ledger" &&
         activeTab!=="wallets" &&
         activeTab!=="observability" && (
          <div className="infrastructure-panel p-6">
            <div className="text-2xl font-semibold capitalize">
              {activeTab}
            </div>

            <div className="mt-3 text-zinc-400">
              Infrastructure coordination module active.
            </div>
          </div>
        )}

      </div>
    </main>
  )
}
