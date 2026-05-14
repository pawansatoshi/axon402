'use client'

import { useAccount, useBalance, useChainId } from 'wagmi'

export default function WalletCard() {
  const { address, isConnected } = useAccount()
  const chainId = useChainId()

  const { data } = useBalance({
    address,
  })

  if (!isConnected) {
    return (
      <div className="border border-zinc-800 rounded-2xl p-6">
        Wallet not connected
      </div>
    )
  }

  return (
    <div className="border border-cyan-500/30 rounded-2xl p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">
        Connected Wallet
      </h2>

      <div className="space-y-3 text-sm">
        <div>
          <span className="text-zinc-500">Address:</span>
          <p className="break-all text-white">
            {address}
          </p>
        </div>

        <div>
          <span className="text-zinc-500">Chain ID:</span>
          <p>{chainId}</p>
        </div>

        <div>
          <span className="text-zinc-500">Balance:</span>
          <p>
            {data?.formatted} {String(data?.symbol || "")}
          </p>
        </div>
      </div>
    </div>
  )
}
