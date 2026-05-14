"use client"

import { useEffect, useState } from "react"
import { subscribeToLedger } from "@/services/ledger/ledger-service"

export function LiveLedger() {
  const [entries, setEntries] = useState<any[]>([])

  useEffect(() => {
    return subscribeToLedger(setEntries)
  }, [])

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">
          Infrastructure Ledger
        </h3>

        <div className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
          Realtime
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {entries.length === 0 && (
          <div className="rounded-2xl border border-dashed border-white/10 p-6 text-sm text-zinc-500">
            No execution records available.
          </div>
        )}

        {entries.map((entry) => (
          <div
            key={entry.id}
            className="rounded-2xl border border-white/5 bg-black/20 p-4"
          >
            <div className="flex items-center justify-between">
              <div className="text-sm text-white">
                {entry.type || "Execution"}
              </div>

              <div className="text-xs text-cyan-300">
                {entry.status || "confirmed"}
              </div>
            </div>

            <div className="mt-3 break-all font-mono text-xs text-zinc-500">
              {entry.txHash}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
