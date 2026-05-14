"use client"

const methods = [
  {
    title: "Google Recovery",
    status: "Configured"
  },
  {
    title: "Embedded Wallet Backup",
    status: "Synchronized"
  },
  {
    title: "Recovery Authorization",
    status: "Verified"
  },
  {
    title: "Session Continuity",
    status: "Operational"
  }
]

export function RecoveryVault() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">

      <div className="mb-8">

        <div className="text-sm uppercase tracking-[0.2em] text-cyan-300">
          Recovery Vault
        </div>

        <div className="mt-3 text-4xl font-semibold tracking-tight">
          Infrastructure Recovery Systems
        </div>

        <div className="mt-4 max-w-3xl leading-relaxed text-zinc-400">
          Recovery-aware orchestration architecture
          for embedded wallet coordination,
          identity continuity,
          and secure infrastructure recovery flows.
        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {methods.map((method) => (

          <div
            key={method.title}
            className="rounded-3xl border border-white/5 bg-black/20 p-6"
          >

            <div className="flex items-center justify-between">

              <div>

                <div className="text-xl font-semibold">
                  {method.title}
                </div>

                <div className="mt-3 text-sm text-zinc-500">
                  Infrastructure recovery layer
                </div>

              </div>

              <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
                {method.status}
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}
