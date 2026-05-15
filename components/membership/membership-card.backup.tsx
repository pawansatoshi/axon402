"use client"

export default function MembershipCard() {

  return (

    <div className="
      rounded-[32px]
      border border-white/10
      bg-white/[0.03]
      p-8
    ">

      <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">
        Membership
      </div>

      <div className="mt-4 text-5xl font-black">
        AXON PRO
      </div>

      <div className="mt-4 text-zinc-400">
        10 USDC = 100 Requests
      </div>

      <div className="mt-6 space-y-2 text-zinc-400">

        <div>
          Credits Left: 100 / 100
        </div>

        <div>
          Successful Requests: 0
        </div>

        <div>
          Failed Requests: 0
        </div>

      </div>

      <button
        onClick={() =>
          alert("Membership recharge flow coming next")
        }
        className="
          mt-8
          px-6
          py-4
          rounded-2xl
          bg-purple-600
        "
      >
        Recharge Membership
      </button>

    </div>

  )

}
