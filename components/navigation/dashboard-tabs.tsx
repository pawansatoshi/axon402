"use client"

type Props = {
  active: string
  setActive: (value: string) => void
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

export function DashboardTabs({ active, setActive }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`rounded-xl border px-4 py-2 text-sm transition-all ${
            active === tab
              ? "border-cyan-400 bg-cyan-400/10 text-cyan-300"
              : "border-white/10 bg-white/5 text-zinc-400 hover:bg-white/10"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
