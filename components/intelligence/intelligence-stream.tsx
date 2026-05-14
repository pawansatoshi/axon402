"use client"

const signals = [
  "Infrastructure synchronization complete",
  "Settlement engine operating within threshold",
  "Turnkey coordination policies verified",
  "Realtime observability stream connected",
  "Execution attestation finalized"
]

export function IntelligenceStream() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

      <div className="mb-6 flex items-center justify-between">

        <div>
          <div className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Infrastructure Intelligence
          </div>

          <div className="mt-2 text-2xl font-semibold">
            Operational Signal Stream
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-300">

          <div className="h-2 w-2 rounded-full bg-emerald-400" />

          Live

        </div>

      </div>

      <div className="space-y-4">

        {signals.map((signal) => (
          <div
            key={signal}
            className="flex items-center gap-4 rounded-2xl border border-white/5 bg-black/20 px-4 py-4"
          >

            <div className="h-2 w-2 rounded-full bg-cyan-400" />

            <div className="text-zinc-300">
              {signal}
            </div>

          </div>
        ))}

      </div>

    </div>
  )
}
