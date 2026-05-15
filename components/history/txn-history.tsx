"use client"

export default function TxnHistory() {

  return (

    <div className="
      rounded-[32px]
      border border-white/10
      bg-white/[0.03]
      p-6
      mt-6
    ">

      <div className="text-2xl font-bold">
        Transaction History
      </div>

      <div className="mt-6 space-y-4">

        <div className="
          rounded-2xl
          bg-black/30
          p-4
        ">

          <div className="text-green-400">
            SUCCESS
          </div>

          <div className="text-sm mt-2">
            1 USDC
          </div>

          <div className="text-xs text-zinc-500 mt-2">
            Waiting for live transactions...
          </div>

        </div>

      </div>

    </div>

  )

}
