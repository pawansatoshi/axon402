"use client"

const links = [
  {
    label: "GitHub",
    value: "github.com/axon402"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/axon402"
  },
  {
    label: "X / Twitter",
    value: "x.com/axon402"
  },
  {
    label: "Infrastructure Site",
    value: "axon402.vercel.app"
  }
]

export function BuilderProfile() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">

      <div className="mb-8 flex items-center gap-5">

        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/10 text-2xl font-semibold text-cyan-300">
          AX
        </div>

        <div>

          <div className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Infrastructure Operator
          </div>

          <div className="mt-2 text-4xl font-semibold tracking-tight">
            AXON402 Builder Identity
          </div>

          <div className="mt-3 text-zinc-400">
            Autonomous coordination infrastructure architect.
          </div>

        </div>

      </div>

      <div className="grid gap-4 md:grid-cols-2">

        {links.map((link) => (

          <div
            key={link.label}
            className="rounded-3xl border border-white/5 bg-black/20 p-5"
          >

            <div className="text-sm text-zinc-500">
              {link.label}
            </div>

            <div className="mt-3 text-lg text-cyan-300">
              {link.value}
            </div>

          </div>

        ))}

      </div>

    </div>
  )
}
