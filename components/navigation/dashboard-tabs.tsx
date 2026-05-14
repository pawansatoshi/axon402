"use client"

interface DashboardTabsProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const tabs = [
  "overview",
  "observability",
  "ledger",
  "wallets",
  "security",
  "notifications",
  "settings"
]

export function DashboardTabs({
  activeTab,
  setActiveTab
}: DashboardTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`rounded-lg border px-4 py-2 text-sm transition-all ${
            activeTab === tab
              ? "border-cyan-400 bg-cyan-500/20 text-cyan-300"
              : "border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:text-white"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
