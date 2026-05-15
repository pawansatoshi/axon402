"use client"

import {
  parseUnits
} from "viem"

import {
  writeContract
} from "@wagmi/core"

const USDC =
"0x3600000000000000000000000000000000000000"

export async function sendUSDC(
  config: any,
  to: string,
  amount: string
) {

  return await writeContract(config, {

    address: USDC,

    abi: [
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

    functionName: "transfer",

    args: [
      to,
      parseUnits(amount, 6)
    ]

  })

}
