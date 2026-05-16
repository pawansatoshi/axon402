"use client"

import { useEffect, useState } from "react"

import { payMembership } from "@/lib/real-membership-payment"

import {
  getMembership,
} from "@/lib/membership-store"

export default function MembershipCard() {

  const [active, setActive] = useState(false)

  const [credits, setCredits] = useState(0)

  const [success, setSuccess] = useState(0)

  const [failed, setFailed] = useState(0)

  function syncMembership() {

    const data = getMembership()

    setActive(data.active)

    setCredits(data.credits)

    setSuccess(data.success)

    setFailed(data.failed)
  }

  useEffect(() => {

    syncMembership()

    const interval =
      setInterval(syncMembership, 1000)

    return () =>
      clearInterval(interval)

  }, [])

  return (

    <div className="bg-[#071028] rounded-[32px] p-6 border border-white/10">

      <div className="text-zinc-500 tracking-[0.3em] text-sm mb-4">
        MEMBERSHIP
      </div>

      <h2 className="text-5xl font-black text-white mb-3">
        AXON PRO
      </h2>

      <p className="text-zinc-400 mb-6">
        10 USDC = 100 Requests
      </p>

      <div className="space-y-4 mb-8">

        <div className="flex items-center justify-between">

          <span className="text-zinc-400">
            Status
          </span>

          <div
            className={`
            px-4 py-2 rounded-2xl text-sm font-black
            ${
              active
                ? "bg-green-500/20 text-green-400"
                : "bg-red-500/20 text-red-400"
            }
          `}
          >
            {active
              ? "ACTIVE"
              : "DEACTIVE"}
          </div>

        </div>

        <div className="flex items-center justify-between">

          <span className="text-zinc-400">
            Credits Left
          </span>

          <span className="text-white font-black">
            {credits}
          </span>

        </div>

        <div className="flex items-center justify-between">

          <span className="text-zinc-400">
            Successful Requests
          </span>

          <span className="text-green-400 font-black">
            {success}
          </span>

        </div>

        <div className="flex items-center justify-between">

          <span className="text-zinc-400">
            Failed Requests
          </span>

          <span className="text-red-400 font-black">
            {failed}
          </span>

        </div>

      </div>

      <button
        onClick={payMembership}
        className="
        w-full
        py-4
        rounded-[24px]
        bg-purple-600
        font-black
      "
      >
        Recharge Membership
      </button>

    </div>
  )
}
