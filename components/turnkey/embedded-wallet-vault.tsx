"use client"

import { useState }
from "react"

import {
  initializeEmbeddedWallet
} from "@/services/turnkey/turnkey-service"

export function EmbeddedWalletVault(){

  const [loading,setLoading]=
  useState(false)

  const [wallet,setWallet]=
  useState<any>(null)

  async function initialize(){

    try{

      setLoading(true)

      const response=
      await initializeEmbeddedWallet()

      setWallet(response)

    }finally{

      setLoading(false)

    }
  }

  return(

    <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-500/5 to-transparent p-8">

      <div className="mb-8">

        <div className="text-sm uppercase tracking-[0.2em] text-cyan-300">
          Embedded Wallet Infrastructure
        </div>

        <div className="mt-3 text-4xl font-semibold tracking-tight">
          Turnkey Coordination Vault
        </div>

        <div className="mt-4 max-w-3xl leading-relaxed text-zinc-400">
          Initialize embedded wallet orchestration,
          delegated execution architecture,
          and recovery-aware infrastructure coordination.
        </div>

      </div>

      {!wallet && (

        <button
          onClick={initialize}
          disabled={loading}
          className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-medium text-black transition hover:scale-[1.02] disabled:opacity-50"
        >

          {loading
            ? "Initializing..."
            : "Initialize Embedded Wallet"}

        </button>

      )}

      {wallet && (

        <div className="space-y-4">

          <div className="rounded-3xl border border-white/5 bg-black/20 p-5">

            <div className="text-sm text-zinc-500">
              Wallet ID
            </div>

            <div className="mt-2 font-mono text-cyan-300">
              {wallet.walletId}
            </div>

          </div>

          <div className="rounded-3xl border border-white/5 bg-black/20 p-5">

            <div className="text-sm text-zinc-500">
              Organization
            </div>

            <div className="mt-2 text-zinc-300">
              {wallet.organizationId}
            </div>

          </div>

          <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300 inline-flex">
            Embedded Coordination Operational
          </div>

        </div>

      )}

    </div>

  )
}
