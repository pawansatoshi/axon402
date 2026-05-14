"use client"

const scores = [
  {
    label: "Identity Integrity",
    value: "98%"
  },
  {
    label: "Recovery Readiness",
    value: "96%"
  },
  {
    label: "Execution Security",
    value: "99%"
  },
  {
    label: "Session Protection",
    value: "97%"
  }
]

export function SecurityScore() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-500/5 to-transparent p-8">

      <div className="mb-8">

        <div className="text-sm uppercase tracking-[0.2em] text-cyan-300">
          Security Operations
        </div>

        <div className="mt-3 text-4xl font-semibold tracking-tight">
          Infrastructure Security Posture
        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {scores.map((score) => (

          <div
            key={score.label}
            className="rounded-3xl border border-white/5 bg-black/20 p-6"
          >

            <div className="text-sm text-zinc-500">
              {score.label}
            </div>

            <div className="mt-4 text-4xl font-semibold text-cyan-300">
              {score.value}
            </div>

          </div>

        ))}

      </div>

    </div>
  )
}
