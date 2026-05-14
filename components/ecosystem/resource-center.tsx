"use client"

const resources = [
  {
    title: "Arc Documentation",
    description:
      "Deterministic settlement infrastructure resources."
  },
  {
    title: "Turnkey SDK",
    description:
      "Embedded wallet orchestration architecture."
  },
  {
    title: "Circle USDC Infrastructure",
    description:
      "Stablecoin-native execution coordination."
  },
  {
    title: "WalletConnect",
    description:
      "Realtime wallet coordination systems."
  }
]

export function ResourceCenter() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-500/5 to-transparent p-8">

      <div className="mb-8">

        <div className="text-sm uppercase tracking-[0.2em] text-cyan-300">
          Infrastructure Resources
        </div>

        <div className="mt-3 text-4xl font-semibold tracking-tight">
          Ecosystem Coordination Center
        </div>

        <div className="mt-4 max-w-3xl leading-relaxed text-zinc-400">
          Access ecosystem infrastructure resources,
          settlement coordination documentation,
          embedded wallet tooling,
          and execution architecture systems.
        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {resources.map((resource) => (

          <div
            key={resource.title}
            className="rounded-3xl border border-white/5 bg-black/20 p-6"
          >

            <div className="text-2xl font-semibold">
              {resource.title}
            </div>

            <div className="mt-4 leading-relaxed text-zinc-400">
              {resource.description}
            </div>

          </div>

        ))}

      </div>

    </div>
  )
}
