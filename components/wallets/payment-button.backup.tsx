"use client"

import { useAccount, useWriteContract } from "wagmi"
import { erc20Abi } from "viem"
import { ARC_USDC, MEMBERSHIP_PRICE, ARC_RECEIVER } from "@/lib/arc-payment"

export default function PaymentButton() {

  const { address, isConnected } = useAccount()

  const { writeContractAsync, isPending } = useWriteContract()

  async function payNow() {

    if (!isConnected) {
      alert("Connect wallet first")
      return
    }

    try {

      const hash = await writeContractAsync({
        address: ARC_USDC,
        abi: erc20Abi,
        functionName: "transfer",
        args: [ARC_RECEIVER, MEMBERSHIP_PRICE],
      })

      window.open(
        `https://explorer.testnet.arc.network/tx/${hash}`,
        "_blank"
      )

    } catch (err: any) {

      alert(err?.shortMessage || "Payment failed")

    }

  }

  return (
    <div className="flex flex-wrap gap-3 mt-4">

      <button
        onClick={payNow}
        disabled={isPending}
        className="
          px-5 py-3 rounded-2xl
          bg-emerald-600 hover:bg-emerald-500
          transition font-semibold
        "
      >
        {isPending ? "Processing..." : "Pay USDC"}

<input id="customAmount" placeholder="Amount" className="ml-3 bg-black\/40 px-3 py-2 rounded-xl text-sm" />

      </button>

      <a
        href="https://faucet.circle.com"
        target="_blank"
        className="
          px-5 py-3 rounded-2xl
          bg-blue-600 hover:bg-blue-500
          transition font-semibold
        "
      >
        Claim Faucet
      </a>

    </div>
  )

}
