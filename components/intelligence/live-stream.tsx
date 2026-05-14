"use client"

import {
  useInfrastructureStream
} from "@/hooks/realtime/use-infrastructure-stream"

export function LiveInfrastructureStream(){

  const events=
  useInfrastructureStream()

  return(

    <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-500/5 to-transparent p-8">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <div className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Live Infrastructure Stream
          </div>

          <div className="mt-3 text-4xl font-semibold tracking-tight">
            Realtime Coordination Telemetry
          </div>

        </div>

        <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-300">

          <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

          Live

        </div>

      </div>

      <div className="space-y-4">

        {events.length===0 && (

          <div className="rounded-3xl border border-white/5 bg-black/20 p-5 text-zinc-500">
            Initializing infrastructure telemetry...
          </div>

        )}

        {events.map((event,index)=>(

          <div
            key={index}
            className="flex items-center gap-4 rounded-3xl border border-white/5 bg-black/20 p-5"
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
