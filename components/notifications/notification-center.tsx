"use client"

const notifications = [
  {
    title: "Settlement finalized",
    description: "Arc-native execution confirmed.",
    time: "2s ago",
    type: "success"
  },
  {
    title: "Wallet synchronization complete",
    description: "Embedded coordination layer updated.",
    time: "12s ago",
    type: "info"
  },
  {
    title: "Execution attestation verified",
    description: "Infrastructure integrity maintained.",
    time: "34s ago",
    type: "verified"
  },
  {
    title: "Realtime observability synchronized",
    description: "Operational monitoring stream active.",
    time: "1m ago",
    type: "live"
  }
]

export function NotificationCenter() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <div className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Notification Center
          </div>

          <div className="mt-2 text-3xl font-semibold">
            Infrastructure Event Stream
          </div>

        </div>

        <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 text-xs text-cyan-300">
          Live Infrastructure Signals
        </div>

      </div>

      <div className="space-y-4">

        {notifications.map((notification) => (

          <div
            key={notification.title}
            className="rounded-3xl border border-white/5 bg-black/20 p-5"
          >

            <div className="flex items-start justify-between gap-4">

              <div>

                <div className="text-lg font-medium">
                  {notification.title}
                </div>

                <div className="mt-2 leading-relaxed text-zinc-400">
                  {notification.description}
                </div>

              </div>

              <div className="text-xs text-zinc-500">
                {notification.time}
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}
