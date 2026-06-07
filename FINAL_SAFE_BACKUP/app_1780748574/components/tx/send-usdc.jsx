"use client"

import { useState } from "react"
import { parseUnits } from "viem"
import {
  useAccount,
  useWriteContract,
  useWaitForTransactionReceipt,
  useBalance,
} from "wagmi"

const USDC_ADDRESS = "0x3600000000000000000000000000000000000000"

const USDC_ABI = [
  {
    name: "transfer",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      { name: "to", type: "address" },
      { name: "value", type: "uint256" },
    ],
    outputs: [{ name: "", type: "bool" }],
  },
]

export default function SendUSDC() {
  const { address } = useAccount()

  const [to, setTo] = useState("")
  const [amount, setAmount] = useState("")

  const { data: balance } = useBalance({
    address,
  })

  const {
    data: hash,
    writeContract,
    isPending,
    error,
  } = useWriteContract()

  const { isSuccess } = useWaitForTransactionReceipt({
    hash,
  })

  async function sendUSDC() {
    if (!address) {
      alert("Connect wallet first")
      return
    }

    if (!to || !amount) {
      alert("Fill all fields")
      return
    }

    writeContract({
      address: USDC_ADDRESS,
      abi: USDC_ABI,
      functionName: "transfer",
      args: [
        to,
        parseUnits(amount, 6)
      ],
    })
  }

  return (
    <section className="mt-10 rounded-3xl border border-cyan-500/20 bg-black/40 p-6">
      <h2 className="text-cyan-400 text-2xl font-bold mb-2">
        Real Arc USDC Transfer
      </h2>

      <p className="text-gray-400 text-sm mb-6">
        Arc uses native USDC gas with ERC20 compatibility
      </p>

      <input
        value={to}
        onChange={(e) => setTo(e.target.value)}
        placeholder="Receiver Address"
        className="w-full mb-4 rounded-xl bg-black border border-cyan-500/20 p-4 text-white"
      />

      <div className="text-cyan-400 mb-4">
        Live Balance:{" "}
        {balance
          ? Number(balance.formatted).toFixed(6)
          : "0"}{" "}
        USDC
      </div>

      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        type="number"
        step="0.000001"
        className="w-full mb-4 rounded-xl bg-black border border-cyan-500/20 p-4 text-white"
      />

      <div className="text-yellow-400 text-sm mb-4">
        Wallet popup may display 0.0000 because Arc uses native USDC settlement.
      </div>

      <button
        onClick={sendUSDC}
        disabled={isPending}
        className="w-full rounded-xl bg-cyan-500 text-black font-bold p-4"
      >
        {isPending ? "Sending..." : `Send ${amount || "0"} USDC`}
      </button>

      {hash && (
        <div className="mt-6">
          <div className="text-cyan-400 font-bold">
            TX Hash:
          </div>

          <div className="text-cyan-300 break-all text-sm">
            {hash}
          </div>
        </div>
      )}

      {isSuccess && (
        <div className="mt-4 text-green-400 font-bold">
          Transaction Confirmed
        </div>
      )}

      {error && (
        <div className="mt-4 text-red-400 break-words text-sm">
          {error.message}
        </div>
      )}
    </section>
  )
}
