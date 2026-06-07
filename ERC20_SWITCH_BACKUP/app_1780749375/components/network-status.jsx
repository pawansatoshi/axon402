"use client"

import { useChainId, useSwitchChain } from "wagmi"

const ARC_CHAIN_ID = 5042002

export default function NetworkStatus() {
  const chainId = useChainId()

  const { switchChain } = useSwitchChain()

  const isCorrect = chainId === ARC_CHAIN_ID

  return (
    <div className="mt-6 rounded-2xl border border-cyan-500/20 p-5">
      <h3 className="text-xl font-bold text-cyan-400">
        Arc Network
      </h3>

      <p className="mt-4 text-zinc-300">
        Current Chain:
        <span className="ml-2 text-white">
          {chainId || "Not Connected"}
        </span>
      </p>

      <p className="mt-2">
        {isCorrect ? (
          <span className="text-green-400">
            Connected to Arc Testnet
          </span>
        ) : (
          <span className="text-red-400">
            Wrong Network
          </span>
        )}
      </p>

      {!isCorrect && (
        <button
          onClick={() =>
            switchChain({
              chainId: ARC_CHAIN_ID,
            })
          }
          className="mt-5 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black"
        >
          Switch To Arc
        </button>
      )}
    </div>
  )
}
