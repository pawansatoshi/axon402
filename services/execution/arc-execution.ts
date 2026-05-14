import {
  parseEther
} from "viem"

import {
  writeContract
} from "@wagmi/core"

import { config }
from "@/lib/wallet/wagmi-config"

export async function executeSettlement(){

  try{

    const hash=
    await writeContract(
      config,
      {
        abi:[
          {
            type:"function",
            name:"transfer",
            stateMutability:"nonpayable",
            inputs:[
              {
                name:"to",
                type:"address"
              },
              {
                name:"amount",
                type:"uint256"
              }
            ],
            outputs:[
              {
                name:"",
                type:"bool"
              }
            ]
          }
        ],

        address:
        "0x3600000000000000000000000000000000000000",

        functionName:
        "transfer",

        args:[
          "0x000000000000000000000000000000000000dead",
          parseEther("1")
        ]
      }
    )

    return hash

  }catch(error){

    console.error(error)

    throw error
  }
}
