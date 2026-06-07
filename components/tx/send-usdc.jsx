"use client"

import { useState } from "react"
import {
  useAccount,
  useBalance,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi"

import { parseUnits } from "viem"

const USDC_ADDRESS =
  "0x3600000000000000000000000000000000000000"

const ERC20_ABI = [
  {
    type: "function",
    name: "transfer",
    stateMutability: "nonpayable",
    inputs: [
      { name: "to", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    outputs: [
      { name: "", type: "bool" },
    ],
  },
]

export default function SendUSDC() {
  const { address } = useAccount()

  const [receiver, setReceiver] = useState("")
  const [amount, setAmount] = useState("")

  const { data: balance } = useBalance({
    address,
    token: USDC_ADDRESS,
  })

  const {
    data: hash,
    writeContractAsync,
    isPending,
  } = useWriteContract()

  const { isSuccess } =
    useWaitForTransactionReceipt({
      hash,
    })

  async function handleSend() {
    if (!receiver || !amount) return

    await writeContractAsync({
      chainId: 5042002,

      address: USDC_ADDRESS,

      abi: ERC20_ABI,

      functionName: "transfer",

      args: [
        receiver,
        parseUnits(amount, 6),
      ],
    })
  }

  return (
    <div className="border border-cyan-900 rounded-3xl p-6 mt-8">
      <h2 className="text-cyan-400 text-2xl font-bold mb-2">
        Arc USDC Transfer
      </h2>

      <p className="text-zinc-400 mb-6">
        ERC20 compatibility transfer
      </p>

      <input
        className="w-full bg-black border border-cyan-950 rounded-xl p-4 mb-4"
        placeholder="Receiver Address"
        value={receiver}
        onChange={(e) =>
          setReceiver(e.target.value)
        }
      />

      <div className="text-cyan-400 mb-4">
        Live Balance:{" "}
        {balance
          ? Number(balance.formatted).toFixed(6)
          : "0"}{" "}
        USDC
      </div>

      <input
        className="w-full bg-black border border-cyan-950 rounded-xl p-4 mb-4"
        placeholder="Amount"
        value={amount}
        onChange={(e) =>
          setAmount(e.target.value)
        }
      />

      <button
        onClick={handleSend}
        disabled={isPending}
        className="w-full bg-cyan-500 text-black font-bold py-4 rounded-2xl"
      >
        {isPending
          ? "Sending..."
          : `Send ${amount || 0} USDC`}
      </button>

      {hash && (
        <div className="mt-6">
          <p className="text-cyan-400">
            TX Hash:
          </p>

          <p className="break-all text-sm text-zinc-400">
            {hash}
          </p>
        </div>
      )}

      {isSuccess && (
        <p className="text-green-500 mt-4 font-bold">
          Transaction Confirmed
        </p>
      )}
    </div>
  )
}
