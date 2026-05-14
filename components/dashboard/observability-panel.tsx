"use client"

export function ObservabilityPanel(){

  return(

    <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">

      <div className="flex items-center justify-between">

        <div>

          <div className="text-xl font-semibold">
            Infrastructure Observability
          </div>

          <div className="mt-2 text-sm text-zinc-500">
            Realtime coordination telemetry and execution monitoring.
          </div>

        </div>

        <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
          Live Stream
        </div>

      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">

        {[
          "Settlement finalized",
          "Wallet synchronization active",
          "Execution latency stable",
          "Turnkey coordination verified"
        ].map((item)=>(

          <div
            key={item}
            className="rounded-2xl border border-white/5 bg-black/20 p-4 text-sm text-zinc-300"
          >
            {item}
          </div>

        ))}

      </div>

    </div>

  )
}
