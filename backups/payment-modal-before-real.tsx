"use client"

import { sendUSDC } from "@/lib/send-usdc"

import { useState } from "react"

export default function PaymentModal() {

  const [open, setOpen] = useState(false)

  return (

    <>

      <button
        onClick={() => setOpen(true)}
        className="
          px-6
          py-4
          rounded-2xl
          bg-emerald-500
        "
      >
        Pay USDC
      </button>

      {open && (

        <div className="
          fixed inset-0 z-50
          bg-black/70
          flex items-center justify-center
          p-6
        ">

          <div className="
            w-full max-w-md
            rounded-[32px]
            bg-[#0b1020]
            border border-white/10
            p-8
          ">

            <div className="text-4xl font-black">
              Send USDC
            </div>

            <div className="mt-6">

              <div className="text-sm text-zinc-400 mb-2">
                Recipient Wallet
              </div>

              <input
                defaultValue="0xb467F683764593316fAEbB0709127E90791Fe47F"
                className="
                  w-full
                  p-4
                  rounded-2xl
                  bg-black/40
                  border border-white/10
                "
              />

            </div>

            <div className="mt-6">

              <div className="text-sm text-zinc-400 mb-2">
                Amount USDC
              </div>

              <input
                defaultValue="1"
                className="
                  w-full
                  p-4
                  rounded-2xl
                  bg-black/40
                  border border-white/10
                "
              />

            </div>

            <div className="mt-8 flex gap-4">

              <button
                onClick={() => {

                  alert(
                    "Wallet payment integration phase next"
                  )

                }}
                className="
                  flex-1
                  py-4
                  rounded-2xl
                  bg-purple-600
                "
              >
                Continue Payment
              </button>

              <button
                onClick={() => setOpen(false)}
                className="
                  flex-1
                  py-4
                  rounded-2xl
                  bg-zinc-800
                "
              >
                Cancel
              </button>

            </div>

          </div>

        </div>

      )}

    </>

  )

}
