"use client"

import { useState }
from "react"

import {
  submitFeedback
} from "@/services/feedback/feedback-service"

import {
  createLedgerRecord,
  createNotification
} from "@/services/firebase/firestore-service"

export function FeedbackExecution(){

  const [feedback,setFeedback]=
  useState("")

  const [loading,setLoading]=
  useState(false)

  async function execute(){

    if(!feedback){

      alert(
        "Enter infrastructure feedback"
      )

      return
    }

    try{

      setLoading(true)

      const txHash=
      "0xAXON402FEEDBACK"

      await submitFeedback({
        feedback,
        amount:"1 USDC",
        network:"Arc Testnet",
        txHash
      })

      await createLedgerRecord({
        type:"Feedback Settlement",
        status:"Finalized",
        network:"Arc Testnet",
        latency:"91ms"
      })

      await createNotification({
        title:"Feedback submitted",
        description:
        "Infrastructure coordination receipt generated."
      })

      setFeedback("")

      alert(
        "Infrastructure feedback executed"
      )

    }catch(error){

      alert(
        "Feedback execution failed"
      )

    }finally{

      setLoading(false)

    }
  }

  return(

    <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">

      <div className="mb-8">

        <div className="text-sm uppercase tracking-[0.2em] text-cyan-300">
          Infrastructure Feedback Coordination
        </div>

        <div className="mt-3 text-4xl font-semibold tracking-tight">
          Execution-Linked Feedback System
        </div>

        <div className="mt-4 max-w-3xl leading-relaxed text-zinc-400">
          Submit infrastructure coordination feedback
          through deterministic settlement execution.
          Each submission generates operational ledger records
          and coordination attestations.
        </div>

      </div>

      <textarea
        value={feedback}
        onChange={(e)=>
          setFeedback(e.target.value)
        }
        placeholder="Submit infrastructure coordination feedback..."
        className="min-h-[140px] w-full rounded-3xl border border-white/10 bg-black/20 p-5 text-white outline-none"
      />

      <div className="mt-6 flex items-center justify-between">

        <div className="text-sm text-zinc-500">
          Coordination Fee: 1 USDC
        </div>

        <button
          onClick={execute}
          disabled={loading}
          className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-medium text-black transition hover:scale-[1.02] disabled:opacity-50"
        >

          {loading
            ? "Executing..."
            : "Execute Feedback Settlement"}

        </button>

      </div>

    </div>

  )
}
