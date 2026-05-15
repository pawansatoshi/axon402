"use client"

export default function AIMetrics() {

  return (

    <div className="
      rounded-[32px]
      border border-white/10
      bg-white/[0.03]
      p-6
      mt-6
    ">

      <div className="text-2xl font-bold">
        AI Metrics
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">

        <div className="rounded-2xl bg-black/30 p-4">
          <div className="text-zinc-500 text-sm">
            Latency
          </div>

          <div className="text-3xl font-bold mt-2">
            2.1s
          </div>
        </div>

        <div className="rounded-2xl bg-black/30 p-4">
          <div className="text-zinc-500 text-sm">
            AI Requests
          </div>

          <div className="text-3xl font-bold mt-2">
            124
          </div>
        </div>

      </div>

    </div>

  )

}
