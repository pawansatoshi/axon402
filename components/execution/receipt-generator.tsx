"use client"

import {
  generateExecutionReceipt
} from "@/services/receipts/receipt-generator"

export function ReceiptGenerator(){

  async function generate(){

    await generateExecutionReceipt()
  }

  return(

    <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">

      <div className="mb-8">

        <div className="text-sm uppercase tracking-[0.2em] text-cyan-300">
          Execution Attestations
        </div>

        <div className="mt-3 text-4xl font-semibold tracking-tight">
          Infrastructure Receipt Generation
        </div>

        <div className="mt-4 max-w-3xl leading-relaxed text-zinc-400">
          Generate downloadable coordination receipts
          for deterministic execution,
          infrastructure verification,
          and settlement attestation systems.
        </div>

      </div>

      <button
        onClick={generate}
        className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
      >
        Generate Infrastructure Receipt
      </button>

    </div>

  )
}
