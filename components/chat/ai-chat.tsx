"use client"

import { useEffect, useRef, useState } from "react"

import { runAxonRequest } from "@/lib/ai-gateway"
import { getMembership } from "@/lib/membership-store"

type Message = {
  role: "user" | "assistant"
  content: string
  time: string
}

export default function AIChat() {

  const [prompt, setPrompt] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)

  const [credits, setCredits] = useState(0)
  const [status, setStatus] = useState("DEACTIVE")

  const bottomRef = useRef<HTMLDivElement>(null)

  function syncMembership() {

    const data = getMembership()

    setCredits(data.credits)

    setStatus(
      data.active
        ? "ACTIVE"
        : "DEACTIVE"
    )
  }

  useEffect(() => {
    syncMembership()
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth"
    })
  }, [messages])

  async function handleAsk() {

    if (!prompt.trim()) return

    const userMessage: Message = {
      role: "user",
      content: prompt,
      time: new Date().toLocaleTimeString(),
    }

    setMessages((prev) => [
      ...prev,
      userMessage
    ])

    const currentPrompt = prompt

    setPrompt("")
    setLoading(true)

    const result =
      await runAxonRequest(currentPrompt)

    if (result.success) {

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            result.response ||
            "No response generated.",
          time:
            new Date().toLocaleTimeString(),
        },
      ])

    } else {

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            result.error ||
            "Request failed.",
          time:
            new Date().toLocaleTimeString(),
        },
      ])
    }

    syncMembership()

    setLoading(false)
  }

  return (

    <div className="bg-[#071028] rounded-[32px] p-6 mt-8 border border-white/10">

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-5xl font-black text-white">
            AXON AI
          </h2>

          <p className="text-zinc-400 mt-2">
            Multi-Agent Intelligence Workspace
          </p>

        </div>

        <div className="flex items-center gap-3">

          <div
            className={`
            px-4 py-2 rounded-2xl text-sm font-black
            ${
              status === "ACTIVE"
                ? "bg-green-500/20 text-green-400"
                : "bg-red-500/20 text-red-400"
            }
          `}
          >
            {status}
          </div>

          <div className="px-4 py-2 rounded-2xl bg-black text-zinc-300 text-sm font-bold">
            Credits: {credits}
          </div>

        </div>

      </div>

      <div className="flex flex-wrap gap-3 mb-6">

        <button className="px-5 py-3 rounded-2xl bg-purple-600 font-bold">
          Fast AI
        </button>

        <button className="px-5 py-3 rounded-2xl bg-black border border-white/10">
          Reasoning AI
        </button>

        <button className="px-5 py-3 rounded-2xl bg-black border border-white/10">
          Voice
        </button>

        <button className="px-5 py-3 rounded-2xl bg-black border border-white/10">
          Agents
        </button>

      </div>

      <div
        className="
        h-[500px]
        overflow-y-auto
        rounded-[28px]
        bg-black/40
        border border-white/5
        p-5
        space-y-5
      "
      >

        {messages.length === 0 && (

          <div className="text-zinc-500 text-center pt-24">
            AXON402 Intelligence System Ready
          </div>

        )}

        {messages.map((msg, index) => (

          <div
            key={index}
            className={`
            flex
            ${
              msg.role === "user"
                ? "justify-end"
                : "justify-start"
            }
          `}
          >

            <div
              className={`
              max-w-[85%]
              rounded-[28px]
              px-5
              py-4
              ${
                msg.role === "user"
                  ? "bg-purple-600 text-white"
                  : "bg-[#111827] text-zinc-200 border border-white/10"
              }
            `}
            >

              <div className="whitespace-pre-wrap break-words">
                {msg.content}
              </div>

              <div className="text-[10px] opacity-60 mt-3">
                {msg.time}
              </div>

            </div>

          </div>

        ))}

        {loading && (

          <div className="flex justify-start">

            <div className="bg-[#111827] border border-white/10 rounded-[28px] px-5 py-4 text-zinc-400">
              AXON is thinking...
            </div>

          </div>

        )}

        <div ref={bottomRef} />

      </div>

      <div className="mt-6 flex gap-4">

        <textarea
          value={prompt}

          onChange={(e) =>
            setPrompt(e.target.value)
          }

          placeholder="Ask AXON anything..."

          className="
          flex-1
          h-24
          rounded-[28px]
          bg-black
          border border-white/10
          p-5
          resize-none
        "
        />

        <button
          onClick={handleAsk}

          disabled={loading}

          className="
          px-8
          rounded-[28px]
          bg-purple-600
          font-black
          min-w-[140px]
        "
        >
          {loading
            ? "Thinking..."
            : "Ask AXON"}
        </button>

      </div>

    </div>
  )
}
