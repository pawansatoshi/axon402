"use client"

import { useAxonMode } from "@/hooks/use-axon-mode"

const tabs = [
  "Solve Maths",
  "Science Quiz",
  "Create Workflow",
  "Analyze Image"
]

export default function AxonTabs() {

  const {
    mode,
    setMode
  } = useAxonMode()

  return (

    <div className="flex flex-wrap gap-4 mb-6">

      {tabs.map((tab) => (

        <button
          key={tab}
          onClick={() => setMode(tab)}
          className={`
            px-6
            py-4
            rounded-2xl
            transition-all
            ${
              mode === tab
                ? "bg-purple-600"
                : "bg-zinc-900"
            }
          `}
        >
          {tab}
        </button>

      ))}

    </div>

  )

}
