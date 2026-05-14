"use client"

const steps = [
  {
    title: "Connect Infrastructure Identity",
    description:
      "Initialize Google, embedded wallet, or external wallet coordination."
  },
  {
    title: "Switch to Arc Testnet",
    description:
      "Synchronize deterministic settlement infrastructure."
  },
  {
    title: "Initialize Embedded Wallet",
    description:
      "Provision Turnkey coordination architecture."
  },
  {
    title: "Configure Infrastructure PIN",
    description:
      "Secure orchestration and execution permissions."
  },
  {
    title: "Execute First Settlement",
    description:
      "Verify realtime infrastructure coordination."
  }
]

export function OnboardingFlow() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">

      <div className="mb-8">

        <div className="text-sm uppercase tracking-[0.2em] text-cyan-300">
          Guided Infrastructure Initialization
        </div>

        <div className="mt-3 text-4xl font-semibold tracking-tight">
          Autonomous Coordination Onboarding
        </div>

        <div className="mt-4 max-w-2xl text-zinc-400">
          Initialize infrastructure identity,
          settlement coordination,
          embedded wallet orchestration,
          and observability systems.
        </div>

      </div>

      <div className="space-y-6">

        {steps.map((step,index) => (
          <div
            key={step.title}
            className="relative flex gap-5 rounded-3xl border border-white/5 bg-black/20 p-6"
          >

            <div className="flex flex-col items-center">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 text-sm font-medium text-cyan-300">
                {index + 1}
              </div>

              {index !== steps.length - 1 && (
                <div className="mt-3 h-16 w-px bg-white/10" />
              )}

            </div>

            <div>

              <div className="text-xl font-medium">
                {step.title}
              </div>

              <div className="mt-3 max-w-xl leading-relaxed text-zinc-400">
                {step.description}
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}
