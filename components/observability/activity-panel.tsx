export function ActivityPanel() {
  const events = [
    "Settlement finalized",
    "Wallet synchronization complete",
    "Execution verified",
    "Latency monitoring active",
  ]

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">
          Infrastructure Activity
        </h3>

        <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
          Live
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {events.map((event) => (
          <div
            key={event}
            className="flex items-center justify-between rounded-2xl border border-white/5 bg-black/20 px-4 py-3"
          >
            <div className="text-sm text-zinc-300">
              {event}
            </div>

            <div className="h-2 w-2 rounded-full bg-cyan-400" />
          </div>
        ))}
      </div>
    </div>
  )
}
