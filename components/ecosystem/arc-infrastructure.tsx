"use client"

export function ArcInfrastructure() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">

      <div className="mb-8">

        <div className="text-sm uppercase tracking-[0.2em] text-cyan-300">
          Arc Network Infrastructure
        </div>

        <div className="mt-3 text-4xl font-semibold tracking-tight">
          Deterministic USDC-Native Settlement
        </div>

        <div className="mt-4 max-w-3xl leading-relaxed text-zinc-400">
          AXON402 coordinates programmable execution infrastructure
          on Arc using deterministic settlement architecture,
          stablecoin-native execution,
          and low-latency coordination systems.
        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-3xl border border-white/5 bg-black/20 p-6">

          <div className="text-sm text-zinc-500">
            Settlement Layer
          </div>

          <div className="mt-3 text-2xl font-semibold">
            Native USDC Gas
          </div>

          <div className="mt-4 text-sm leading-relaxed text-zinc-400">
            Stablecoin-native execution coordination
            without volatile gas abstraction.
          </div>

        </div>

        <div className="rounded-3xl border border-white/5 bg-black/20 p-6">

          <div className="text-sm text-zinc-500">
            Coordination
          </div>

          <div className="mt-3 text-2xl font-semibold">
            Deterministic Finality
          </div>

          <div className="mt-4 text-sm leading-relaxed text-zinc-400">
            Infrastructure-grade execution reliability
            for autonomous coordination systems.
          </div>

        </div>

        <div className="rounded-3xl border border-white/5 bg-black/20 p-6">

          <div className="text-sm text-zinc-500">
            Infrastructure
          </div>

          <div className="mt-3 text-2xl font-semibold">
            Realtime Execution
          </div>

          <div className="mt-4 text-sm leading-relaxed text-zinc-400">
            Low-latency orchestration architecture
            optimized for programmable execution flows.
          </div>

        </div>

      </div>

    </div>
  )
}
