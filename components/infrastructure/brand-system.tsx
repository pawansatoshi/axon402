"use client"

export function BrandSystem(){

  return(

    <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-500/5 to-transparent p-8">

      <div className="mb-8 flex items-center gap-5">

        <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-500/20 bg-cyan-500/10 text-3xl font-semibold text-cyan-300">
          AX
        </div>

        <div>

          <div className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Infrastructure Identity
          </div>

          <div className="mt-2 text-5xl font-semibold tracking-tight">
            AXON402
          </div>

          <div className="mt-3 text-zinc-400">
            Deterministic infrastructure for autonomous coordination.
          </div>

        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-3xl border border-white/5 bg-black/20 p-6">

          <div className="text-sm text-zinc-500">
            Coordination
          </div>

          <div className="mt-3 text-2xl font-semibold">
            Deterministic
          </div>

        </div>

        <div className="rounded-3xl border border-white/5 bg-black/20 p-6">

          <div className="text-sm text-zinc-500">
            Infrastructure
          </div>

          <div className="mt-3 text-2xl font-semibold">
            Observability
          </div>

        </div>

        <div className="rounded-3xl border border-white/5 bg-black/20 p-6">

          <div className="text-sm text-zinc-500">
            Settlement
          </div>

          <div className="mt-3 text-2xl font-semibold">
            Arc Native
          </div>

        </div>

      </div>

    </div>

  )
}
