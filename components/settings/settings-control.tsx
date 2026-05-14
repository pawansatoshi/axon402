"use client"

const controls = [
  "Enable delegated execution",
  "Require infrastructure PIN",
  "Synchronize embedded wallets",
  "Enable realtime notifications",
  "Allow coordination recovery"
]

export function SettingsControl() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-500/5 to-transparent p-8">

      <div className="mb-8">

        <div className="text-sm uppercase tracking-[0.2em] text-cyan-300">
          Coordination Controls
        </div>

        <div className="mt-3 text-4xl font-semibold tracking-tight">
          Infrastructure Configuration
        </div>

      </div>

      <div className="space-y-5">

        {controls.map((control) => (

          <div
            key={control}
            className="flex items-center justify-between rounded-3xl border border-white/5 bg-black/20 px-5 py-5"
          >

            <div className="text-zinc-300">
              {control}
            </div>

            <div className="h-6 w-11 rounded-full bg-cyan-500/20 p-1">

              <div className="h-4 w-4 rounded-full bg-cyan-300" />

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}
