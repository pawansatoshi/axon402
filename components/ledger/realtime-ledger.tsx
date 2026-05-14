"use client"

import { useLedger } from "@/hooks/use-ledger"

export function RealtimeLedger() {

  const entries=useLedger()

  return (
    <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <div className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Infrastructure Ledger
          </div>

          <div className="mt-2 text-3xl font-semibold">
            Realtime Coordination History
          </div>

        </div>

        <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-300">

          <div className="h-2 w-2 rounded-full bg-emerald-400" />

          Live

        </div>

      </div>

      <div className="space-y-4">

        {entries.length===0 && (

          <div className="rounded-3xl border border-white/5 bg-black/20 p-6 text-zinc-500">
            No infrastructure records available.
          </div>

        )}

        {entries.map((entry)=>(

          <div
            key={entry.id}
            className="rounded-3xl border border-white/5 bg-black/20 p-5"
          >

            <div className="flex items-center justify-between">

              <div>

                <div className="text-lg font-medium">
                  {entry.type}
                </div>

                <div className="mt-2 text-sm text-zinc-500">
                  {entry.network}
                </div>

              </div>

              <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
                {entry.status}
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}
