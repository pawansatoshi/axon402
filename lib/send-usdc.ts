"use client"

import {
  writeContract
} from "@wagmi/core"

import {
  parseUnits
} from "viem"

import {
  wagmiConfig
} from "./wagmi-config"

const USDC =
"0x3600000000000000000000000000000000000000"

export async function sendUSDC(
  to: string,
  amount: string
) {

  const hash =
    await writeContract(
      wagmiConfig,
      {

        address: USDC,

        abi: [
          {
            type: "function",

            name: "transfer",

            stateMutability:
              "nonpayable",

            inputs: [
              {
                name: "to",
                type: "address"
              },
              {
                name: "amount",
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
        ],

        functionName:
          "transfer",

        args: [
          to as `0x${string}`,
          parseUnits(amount, 6)
        ]

      }
    )

  return hash

}
