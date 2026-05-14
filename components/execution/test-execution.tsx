"use client"

import { createLedgerEntry } from "@/services/ledger/ledger-service"

export function TestExecution() {
  async function execute() {
    await createLedgerEntry({
      type: "Settlement Execution",
      status: "confirmed",
      txHash:
        "0x" + Math.random().toString(16).slice(2),
    })

    alert("Infrastructure execution recorded")
  }

  return (
    <button
      onClick={execute}
      className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-sm text-cyan-300 transition hover:bg-cyan-500/20"
    >
      Execute Test Settlement
    </button>
  )
}
