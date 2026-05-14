"use client"

export function NetworkTopology() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/5 to-transparent p-8">

      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/2 top-12 h-32 w-px bg-cyan-400" />
        <div className="absolute left-1/3 top-40 h-px w-1/3 bg-cyan-400" />
      </div>

      <div className="relative z-10">

        <div className="mb-8">
          <div className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Coordination Topology
          </div>

          <div className="mt-3 text-3xl font-semibold">
            Autonomous Infrastructure Mesh
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-cyan-500/10 bg-black/20 p-5">
            <div className="text-sm text-zinc-500">
              Settlement Layer
            </div>

            <div className="mt-2 text-xl font-medium">
              Arc Network
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-500/10 bg-black/20 p-5">
            <div className="text-sm text-zinc-500">
              Identity Layer
            </div>

            <div className="mt-2 text-xl font-medium">
              Turnkey Orchestration
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-500/10 bg-black/20 p-5">
            <div className="text-sm text-zinc-500">
              Coordination Layer
            </div>

            <div className="mt-2 text-xl font-medium">
              AXON402 Runtime
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
