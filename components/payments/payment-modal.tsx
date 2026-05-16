"use client"

import { useState } from "react"

export default function PaymentModal() {

  const [open, setOpen] = useState(false)

  function handlePay() {
    alert("wallet payment popup phase initialized")
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full py-4 rounded-2xl bg-emerald-500 font-bold"
      >
        Pay USDC
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">

          <div className="bg-[#071028] border border-cyan-900/40 rounded-3xl p-6 w-full max-w-md">

            <div className="flex items-center justify-between mb-5">
              <h2 className="text-3xl font-black text-white">
                Send USDC
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="text-white text-2xl"
              >
                ×
              </button>
            </div>

            <input
              value="0xb467F683764593316fAEbB0709127E90791Fe47I"
              readOnly
              className="w-full p-4 rounded-xl bg-black mb-4"
            />

            <input
              value="1"
              readOnly
              className="w-full p-4 rounded-xl bg-black mb-4"
            />

            <button
              onClick={handlePay}
              className="w-full py-4 rounded-2xl bg-purple-600 font-bold"
            >
              continue payment
            </button>

            <button
              onClick={() => setOpen(false)}
              className="w-full mt-4 py-3 rounded-2xl bg-zinc-800"
            >
              close
            </button>

          </div>
        </div>
      )}
    </>
  )
}
