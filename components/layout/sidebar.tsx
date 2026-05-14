"use client"

const items = [
  "overview",
  "observability",
  "ledger",
  "wallets",
  "security",
  "notifications",
  "settings",
]

interface Props {
  active: string
  setActive: (value: string) => void
}

export function Sidebar({ active, setActive }: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-3">
      <div className="mb-4 px-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
        Infrastructure
      </div>

      <div className="space-y-2">
        {items.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`w-full rounded-2xl px-4 py-3 text-left text-sm transition ${
              active === item
                ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                : "border border-transparent text-zinc-400 hover:bg-white/[0.04] hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}
