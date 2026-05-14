const events=[
  "Execution verified",
  "Settlement completed",
  "Wallet synchronized",
  "Infrastructure latency stable",
  "Coordination layer active"
]

export function ActivityFeed(){
  return(
    <div className="infrastructure-panel p-6">
      <div className="text-xl font-semibold">
        Infrastructure Activity
      </div>

      <div className="mt-6 space-y-4">
        {events.map((event)=>(
          <div
            key={event}
            className="flex items-center gap-3"
          >
            <div className="h-2 w-2 rounded-full bg-cyan-400" />

            <div className="text-zinc-300">
              {event}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
