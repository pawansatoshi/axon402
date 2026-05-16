"use client"

import { useState } from "react"
import {
  membershipActive,
  getCredits,
  useCredit,
} from "@/lib/membership-store"

export default function AxonAI() {
  const [question, setQuestion] = useState("")
  const [response, setResponse] = useState("")

  async function askAI() {

    if (!membershipActive()) {
      alert("Recharge membership first")
      return
    }

    if (getCredits() <= 0) {
      alert("No credits left")
      return
    }

    useCredit()

    setResponse("AXON AI response generated")
  }

  return (
    <div className="bg-[#071028] rounded-3xl p-6 mt-8">

      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-5xl font-black text-white">
            AXON AI
          </h2>

          <p className="text-zinc-400 mt-2">
            Multi-Model Intelligence Engine
          </p>
        </div>

        <div className="bg-green-900/40 text-green-400 px-4 py-2 rounded-xl">
          • Online
        </div>
      </div>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask anything..."
        className="w-full h-40 rounded-2xl bg-black p-4 mb-6"
      />

      <button
        onClick={askAI}
        className="px-6 py-3 rounded-2xl bg-purple-600 font-bold"
      >
        Ask AXON
      </button>

      <div className="mt-6 text-zinc-300">
        {response}
      </div>
    </div>
  )
}
