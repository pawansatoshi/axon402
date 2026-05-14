"use client"

import {
  createLedgerRecord,
  createNotification
} from "@/services/firebase/firestore-service"

export function ExecutionAction(){

  async function execute(){

    await createLedgerRecord({
      type:"Settlement Execution",
      status:"Finalized",
      network:"Arc Testnet",
      latency:"84ms"
    })

    await createNotification({
      title:"Settlement finalized",
      description:"Infrastructure coordination complete."
    })

    alert(
      "Infrastructure execution completed"
    )
  }

  return(
    <button
      onClick={execute}
      className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
    >
      Execute Infrastructure Action
    </button>
  )
}
