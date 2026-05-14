"use client"

import {
  LayoutDashboard,
  Activity,
  Shield,
  Wallet,
  Bell,
  Settings,
  Database,
} from "lucide-react"

const items = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Observability", icon: Activity },
  { label: "Ledger", icon: Database },
  { label: "Wallets", icon: Wallet },
  { label: "Security", icon: Shield },
  { label: "Notifications", icon: Bell },
  { label: "Settings", icon: Settings },
]

export function Sidebar() {
  return (
    <aside className="hidden w-72 border-r border-white/10 bg-white/[0.02] xl:flex xl:flex-col">
      <div className="border-b border-white/10 p-6">
        <div className="text-2xl font-semibold tracking-tight text-white">
          AXON402
        </div>

        <div className="mt-2 text-sm text-zinc-400">
          Autonomous coordination infrastructure
        </div>
      </div>

      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {items.map((item) => {
            const Icon = item.icon

            return (
              <button
                key={item.label}
                className="flex w-full items-center gap-3 rounded-2xl border border-transparent px-4 py-3 text-left text-zinc-300 transition hover:border-cyan-500/20 hover:bg-cyan-500/5 hover:text-white"
              >
                <Icon size={18} />

                <span className="text-sm">
                  {item.label}
                </span>
              </button>
            )
          })}
        </div>
      </nav>

      <div className="border-t border-white/10 p-4">
        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4">
          <div className="text-xs uppercase tracking-wide text-cyan-300">
            Network
          </div>

          <div className="mt-2 text-sm text-white">
            Arc Testnet Operational
          </div>
        </div>
      </div>
    </aside>
  )
}
