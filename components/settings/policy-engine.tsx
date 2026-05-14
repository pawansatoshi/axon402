"use client"

const policies = [
  {
    title: "Settlement Threshold",
    value: "1,000 USDC"
  },
  {
    title: "Execution Approval",
    value: "Policy Verified"
  },
  {
    title: "Wallet Authorization",
    value: "Multi-layer Enabled"
  },
  {
    title: "Recovery Integrity",
    value: "Operational"
  }
]

export function PolicyEngine() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">

      <div className="mb-8">

        <div className="text-sm uppercase tracking-[0.2em] text-cyan-300">
          Policy Engine
        </div>

        <div className="mt-3 text-4xl font-semibold tracking-tight">
          Infrastructure Governance Controls
        </div>

        <div className="mt-4 max-w-3xl leading-relaxed text-zinc-400">
          Configure execution thresholds,
          orchestration permissions,
          delegated authorization flows,
          and infrastructure coordination policies.
        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {policies.map((policy) => (

          <div
            key={policy.title}
            className="rounded-3xl border border-white/5 bg-black/20 p-6"
          >

            <div className="text-sm text-zinc-500">
              {policy.title}
            </div>

            <div className="mt-4 text-2xl font-semibold">
              {policy.value}
            </div>

          </div>

        ))}

      </div>

    </div>
  )
}
