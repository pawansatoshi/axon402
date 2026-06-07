"use client"

import { ConnectButton } from "@rainbow-me/rainbowkit"

export default function WalletConnect() {
  return (
    <div className="mb-6">
      <ConnectButton
        chainStatus="full"
        accountStatus="full"
        showBalance={false}
      />
    </div>
  )
}

      
if (typeof window !== "undefined" && window.ethereum) {
  await window.ethereum.request({

        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: "0x3600000000000000000000000000000000000000",
            symbol: "USDC",
            decimals: 6,
            image: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png"
          }
        }
      }).catch(() => {})
}

