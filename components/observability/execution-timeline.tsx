"use client"

const events = [
  {
    title: "Settlement finalized",
    time: "2s ago"
  },
  {
    title: "Wallet synchronized",
    time: "14s ago"
  },
  {
    title: "Execution verified",
    time: "29s ago"
  },
  {
    title: "Infrastructure attested",
    time: "1m ago"
  }
]

export function ExecutionTimeline() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

      <div className="mb-6">
        <div className="text-sm uppercase tracking-[0.2em] text-cyan-300">
          Execution Timeline
        </div>

        <div className="mt-2 text-2xl font-semibold">
          Coordination Events
        </div>
      </div>

      <div className="space-y-6">

        {events.map((event,index) => (
          <div
            key={event.title}
            className="relative flex gap-4"
          >

            <div className="relative flex flex-col items-center">

              <div className="h-3 w-3 rounded-full bg-cyan-400" />

              {index !== events.length - 1 && (
                <div className="mt-1 h-12 w-px bg-white/10" />
              )}

            </div>

            <div className="pb-6">

              <div className="text-white">
                {event.title}
              </div>

              <div className="mt-1 text-sm text-zinc-500">
                {event.time}
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}
