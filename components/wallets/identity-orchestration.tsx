"use client"

const layers = [
  {
    title: "Google Identity",
    status: "Linked"
  },
  {
    title: "Embedded Wallet",
    status: "Operational"
  },
  {
    title: "External Wallet",
    status: "Connected"
  },
  {
    title: "Recovery Layer",
    status: "Configured"
  }
]

export function IdentityOrchestration() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

      <div className="mb-6">
        <div className="text-sm uppercase tracking-[0.2em] text-cyan-300">
          Unified Identity
        </div>

        <div className="mt-2 text-2xl font-semibold">
          Turnkey Coordination Layer
        </div>

        <div className="mt-3 max-w-2xl text-zinc-400">
          Embedded wallet orchestration with unified infrastructure identity,
          delegated execution controls,
          and recovery-aware coordination architecture.
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">

        {layers.map((layer) => (
          <div
            key={layer.title}
            className="rounded-2xl border border-white/5 bg-black/20 p-5"
          >

            <div className="flex items-center justify-between">

              <div>

                <div className="text-white">
                  {layer.title}
                </div>

                <div className="mt-2 text-sm text-zinc-500">
                  Infrastructure identity layer
                </div>

              </div>

              <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
                {layer.status}
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}
