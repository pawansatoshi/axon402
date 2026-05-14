import {
  getDefaultConfig
} from "@rainbow-me/rainbowkit"

import { arcTestnet }
from "./arc-config"

export const config=
getDefaultConfig({

  appName:"AXON402",

  projectId:
  "axon402-walletconnect",

  chains:[
    arcTestnet
  ],

  ssr:true
})
