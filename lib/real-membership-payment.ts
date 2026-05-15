"use client"

import {
  writeContract
} from "@wagmi/core"

import {
  parseUnits
} from "viem"

const USDC =
"0x3600000000000000000000000000000000000000"

const RECEIVER =
"0xb467F683764593316fAEbB0709127E90791Fe47F"

export async function payMembership(
  config: any
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
      RECEIVER,
      parseUnits("10", 6)
    ]

  })

}
