"use client"

import { useAxonMode } from "@/hooks/use-axon-mode"

export default function AxonTabs() {
  const axon = useAxonMode()

  if (!axon) return null

  const { mode, setMode } = axon

  return (
    <div className="flex gap-3 mb-4">
      <button
        onClick={() => setMode("fast")}
        className={`px-4 py-2 rounded-xl font-bold ${
          mode === "fast"
            ? "bg-purple-600 text-white"
            : "bg-black text-zinc-400"
        }`}
      >
        Fast AI
      </button>

      <button
        onClick={() => setMode("reasoning")}
        className={`px-4 py-2 rounded-xl font-bold ${
          mode === "reasoning"
            ? "bg-blue-600 text-white"
            : "bg-black text-zinc-400"
        }`}
      >
        Reasoning AI
      </button>
    </div>
  )
}
