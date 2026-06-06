import { createPublicClient, http } from "viem"

const client = createPublicClient({
  transport: http("https://rpc.testnet.arc.network")
})

async function main() {
  const result = await client.readContract({
    address: "0x3600000000000000000000000000000000000000",
    abi: [
      {
        name: "decimals",
        type: "function",
        stateMutability: "view",
        inputs: [],
        outputs: [
          {
            type: "uint8"
          }
        ]
      }
    ],
    functionName: "decimals"
  })

  console.log("DECIMALS =", result)
}

main()
