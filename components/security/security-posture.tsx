"use client"

const items = [
  "Delegated signing enabled",
  "Recovery methods configured",
  "Session integrity verified",
  "Execution policies synchronized"
]

export function SecurityPosture() {
  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/5 to-transparent p-6">

      <div className="mb-6">
        <div className="text-sm uppercase tracking-[0.2em] text-cyan-300">
          Security Posture
        </div>

        <div className="mt-2 text-2xl font-semibold">
          Infrastructure Security
        </div>
      </div>

      <div className="space-y-4">

        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-2xl border border-white/5 bg-black/20 px-4 py-4"
          >

            <div className="h-2 w-2 rounded-full bg-cyan-400" />

            <div className="text-zinc-300">
              {item}
            </div>

          </div>
        ))}

      </div>

    </div>
  )
}
