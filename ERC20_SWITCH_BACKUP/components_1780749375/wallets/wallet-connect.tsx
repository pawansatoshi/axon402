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
