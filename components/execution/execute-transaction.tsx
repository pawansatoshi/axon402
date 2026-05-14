"use client"

import { useState }
from "react"

import {
  executeSettlement
} from "@/services/execution/arc-execution"

export function ExecuteTransaction(){

  const [loading,setLoading]=
  useState(false)

  const [hash,setHash]=
  useState("")

  async function execute(){

    try{

      setLoading(true)

      const txHash=
      await executeSettlement()

      setHash(txHash)

    }catch(error){

      alert(
        "Execution failed"
      )

    }finally{

      setLoading(false)

    }
  }

  return(

    <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-500/5 to-transparent p-6">

      <div className="mb-6">

        <div className="text-sm uppercase tracking-[0.2em] text-cyan-300">
          Arc Settlement Execution
        </div>

        <div className="mt-2 text-3xl font-semibold">
          Deterministic Transaction Coordination
        </div>

      </div>

      <button
        onClick={execute}
        disabled={loading}
        className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-medium text-black transition hover:scale-[1.02] disabled:opacity-50"
      >

        {loading
          ? "Executing..."
          : "Execute Arc Settlement"}

      </button>

      {hash && (

        <div className="mt-6 rounded-2xl border border-white/5 bg-black/20 p-4">

          <div className="text-sm text-zinc-500">
            Transaction Hash
          </div>

          <div className="mt-2 break-all font-mono text-sm text-cyan-300">
            {hash}
          </div>

        </div>

      )}

    </div>

  )
}
