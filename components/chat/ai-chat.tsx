"use client"

import { useState } from "react"

export default function AIChat() {

  const [message, setMessage] = useState("")
  const [reply, setReply] = useState("")
  const [loading, setLoading] = useState(false)
  const [mode, setMode] = useState("normal")
  const [usedModel, setUsedModel] = useState("")
  const [responseTime, setResponseTime] = useState("")
  const [payment, setPayment] = useState<any>(null)

  function speak(text: string) {

    const speech = new SpeechSynthesisUtterance(text)

    speech.rate = 1
    speech.pitch = 1
    speech.volume = 1

    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(speech)

  }

  async function sendMessage() {

    if (!message) return

    setLoading(true)
    setReply("")

    const start = Date.now()

    try {

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message,
          mode,
          wallet: "0x584Dc62B330606438a1799e9E08C80d8E805869E"
        })
      })

      const data = await res.json()

      const end = Date.now()

      setReply(data.reply)
      setUsedModel(data.model || "unknown")
      setPayment(data.payment || null)

      setResponseTime(
        ((end - start) / 1000).toFixed(1)
      )

      speak(data.reply)

    } catch {

      setReply("AI Error")

    }

    setLoading(false)

  }

  return (
    <div className="
      rounded-[32px]
      border border-white/10
      bg-white/5
      backdrop-blur-xl
      p-6
      mt-8
    ">

      <div className="flex items-center justify-between mb-6">

        <div>

          <div className="text-3xl font-black">
            AXON AI
          </div>

          <div className="text-zinc-500 text-sm mt-1">
            Multi-Model Intelligence Engine
          </div>

        </div>

        <div className="
          px-4
          py-2
          rounded-xl
          bg-green-500/10
          border border-green-500/20
          text-green-400
          text-sm
        ">
          ● Online
        </div>

      </div>

      <div className="flex gap-3 mb-5">

        <button
          onClick={() => setMode("normal")}
          className={`
            px-5 py-3 rounded-2xl transition
            ${mode === "normal"
              ? "bg-purple-600 shadow-[0_0_30px_rgba(168,85,247,0.5)]"
              : "bg-black/30 border border-white/10"}
          `}
        >
          Fast AI
        </button>

        <button
          onClick={() => setMode("reasoning")}
          className={`
            px-5 py-3 rounded-2xl transition
            ${mode === "reasoning"
              ? "bg-purple-600 shadow-[0_0_30px_rgba(168,85,247,0.5)]"
              : "bg-black/30 border border-white/10"}
          `}
        >
          Reasoning AI
        </button>

      </div>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask anything... maths, science, coding, projects..."
        className="
          w-full
          min-h-[160px]
          rounded-3xl
          bg-black/40
          border border-white/10
          p-6
          outline-none
          text-lg
        "
      />

      <div className="flex gap-4 mt-5">

        <button
          onClick={sendMessage}
          disabled={loading}
          className="
            px-8
            py-4
            rounded-2xl
            bg-purple-600
            hover:bg-purple-500
            transition
            font-semibold
            shadow-[0_0_40px_rgba(168,85,247,0.6)]
          "
        >
          {loading ? "Thinking..." : "Ask AXON"}
        </button>

        <button
          onClick={() => speak(reply)}
          className="
            px-6
            py-4
            rounded-2xl
            bg-blue-600
            hover:bg-blue-500
            transition
            font-semibold
          "
        >
          Speak
        </button>

      </div>

      {(reply || usedModel) && (

        <div className="
          mt-8
          rounded-3xl
          bg-black/30
          border border-white/10
          p-6
        ">

          <div className="flex flex-wrap gap-3 mb-5">

            <div className="
              px-3 py-2 rounded-xl
              bg-purple-500/10
              border border-purple-500/20
              text-xs
            ">
              MODEL: {usedModel}
            </div>

            <div className="
              px-3 py-2 rounded-xl
              bg-blue-500/10
              border border-blue-500/20
              text-xs
            ">
              RESPONSE: {responseTime}s
            </div>

            <div className="
              px-3 py-2 rounded-xl
              bg-green-500/10
              border border-green-500/20
              text-xs
            ">
              STATUS: ACTIVE
            </div>

          </div>

          <div className="
            whitespace-pre-wrap
            leading-8
            text-[17px]
          ">
            {reply}
          </div>

          {payment && (

            <div className="
              mt-6
              rounded-2xl
              border border-green-500/20
              bg-green-500/5
              p-4
            ">

              <div className="text-sm text-green-400 mb-2">
                ARC PAYMENT
              </div>

              <div className="text-xs break-all">
                TX: {payment.hash}
              </div>

              <div className="text-xs mt-2">
                Amount: {payment.amount} USDC
              </div>

              <div className="text-xs mt-2">
                Date: {payment.date}
              </div>

              <a
                href={payment.explorer}
                target="_blank"
                className="
                  inline-block
                  mt-3
                  text-blue-400
                  text-xs
                "
              >
                Open Explorer →
              </a>

            </div>

          )}

        </div>

      )}

    </div>
  )

}
