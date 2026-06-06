import { createPublicClient, http } from "viem"

const client = createPublicClient({
  transport: http("https://rpc.testnet.arc.network")
})

async function main() {
  const result = await client.readContract({
    address: "0x3600000000000000000000000000000000000000",

    abi: [
      {
        name: "balanceOf",
        type: "function",
        stateMutability: "view",
        inputs: [
          {
            name: "account",
            type: "address"
          }
        ],
        outputs: [
          {
            type: "uint256"
          }
        ]
      }
    ],

    functionName: "balanceOf",

    args: [
      "0xb467F683764593316fAEbB0709127E90791Fe47F"
    ]
  })

  console.log("RAW BALANCE =", result.toString())
  console.log("FORMATTED =", Number(result) / 1_000_000)
}

main()
