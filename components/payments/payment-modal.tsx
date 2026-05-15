"use client"

import { useState } from "react"

import {
  sendUSDC
} from "@/lib/real-payments"

export default function PaymentModal() {

  const [open, setOpen] =
    useState(false)

  const [wallet, setWallet] =
    useState("")

  const [amount, setAmount] =
    useState("1")

  const [loading, setLoading] =
    useState(false)

  const [tx, setTx] =
    useState("")

  async function handlePay() {

    try {

      setLoading(true)

      const result =
        await sendUSDC({
          to:
            wallet as `0x${string}`,

          amount
        })

      if (
        result.success
      ) {

        setTx(
          result.explorer
        )

      } else {

        alert(
          "payment failed"
        )
      }

    } catch {

      alert(
        "transaction rejected"
      )

    } finally {

      setLoading(false)
    }
  }

  return (
    <>
      <button
        onClick={() =>
          setOpen(true)
        }

        className="
        w-full
        py-4
        rounded-2xl
        bg-emerald-500
        text-white
        font-bold
      "
      >
        Pay USDC
      </button>

      {open && (

        <div
          className="
          fixed
          inset-0
          bg-black/70
          flex
          items-center
          justify-center
          z-50
        "
        >

          <div
            className="
            w-[92%]
            max-w-md
            rounded-3xl
            bg-[#060b22]
            p-6
          "
          >

            <h2
              className="
              text-3xl
              font-bold
              mb-6
            "
            >
              Send USDC
            </h2>

            <input
              placeholder="wallet address"

              value={wallet}

              onChange={(e) =>
                setWallet(
                  e.target.value
                )
              }

              className="
              w-full
              p-4
              rounded-xl
              bg-black
              mb-4
            "
            />

            <input
              placeholder="amount"

              value={amount}

              onChange={(e) =>
                setAmount(
                  e.target.value
                )
              }

              className="
              w-full
              p-4
              rounded-xl
              bg-black
              mb-6
            "
            />

            <button
              onClick={handlePay}

              disabled={loading}

              className="
              w-full
              py-4
              rounded-2xl
              bg-purple-600
              font-bold
            "
            >
              {loading
                ? "processing..."
                : "continue payment"}
            </button>

            {tx && (

              <a
                href={tx}

                target="_blank"

                className="
                block
                mt-5
                text-green-400
                break-all
              "
              >
                view transaction
              </a>
            )}

          </div>
        </div>
      )}
    </>
  )
}
