"use client"

import {
  parseUnits
} from "viem"

import {
  writeContract
} from "@wagmi/core"

import { config } from "@/providers/wallet-provider"

export const USDC_CONTRACT =
  "0x3600000000000000000000000000000000000000"

export const ARC_EXPLORER =
  "https://testnet.arcscan.app/tx/"

const ERC20_ABI = [
  {
    type: "function",

    name: "transfer",

    stateMutability: "nonpayable",

    inputs: [
      {
        name: "to",
        type: "address"
      },

      {
        name: "value",
        type: "uint256"
      }
    ],

    outputs: [
      {
        name: "",
        type: "bool"
      }
    ]
  }
]

export async function sendUSDC({
  to,
  amount
}: {
  to: `0x${string}`
  amount: string
}) {
  try {

    const hash = await writeContract(
      config,
      {
        address:
          USDC_CONTRACT,

        abi: ERC20_ABI,

        functionName:
          "transfer",

        args: [
          to,
          parseUnits(
            amount,
            6
          )
        ]
      }
    )

    return {
      success: true,
      hash,
      explorer:
        `${ARC_EXPLORER}${hash}`
    }

  } catch (error) {

    console.error(error)

    return {
      success: false
    }
  }
}
