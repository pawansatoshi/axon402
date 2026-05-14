"use client"

const systems = [
  {
    name: "Arc Settlement",
    status: "Operational",
    color: "bg-emerald-400"
  },
  {
    name: "Turnkey Coordination",
    status: "Healthy",
    color: "bg-cyan-400"
  },
  {
    name: "Realtime Observability",
    status: "Synchronized",
    color: "bg-violet-400"
  },
  {
    name: "Execution Engine",
    status: "Stable",
    color: "bg-amber-400"
  }
]

export function SystemHealth() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

      <div className="mb-6">
        <div className="text-sm uppercase tracking-[0.2em] text-cyan-300">
          Infrastructure Health
        </div>

        <div className="mt-2 text-2xl font-semibold">
          Operational Systems
        </div>
      </div>

      <div className="space-y-4">

        {systems.map((system) => (
          <div
            key={system.name}
            className="flex items-center justify-between rounded-2xl border border-white/5 bg-black/20 px-4 py-4"
          >

            <div className="flex items-center gap-3">

              <div className={`h-2 w-2 rounded-full ${system.color}`} />

              <div>
                <div className="text-sm text-white">
                  {system.name}
                </div>

                <div className="mt-1 text-xs text-zinc-500">
                  Infrastructure operational
                </div>
              </div>

            </div>

            <div className="text-sm text-zinc-400">
              {system.status}
            </div>

          </div>
        ))}

      </div>

    </div>
  )
}
