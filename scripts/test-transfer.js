import { createPublicClient, http } from "viem"

const client = createPublicClient({
  transport: http("https://rpc.testnet.arc.network")
})

async function main() {
  const code = await client.getBytecode({
    address: "0x3600000000000000000000000000000000000000"
  })

  console.log(code)
}

main()
