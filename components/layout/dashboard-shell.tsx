"use client"

import { ReactNode } from "react"

export function DashboardShell({
  children
}:{
  children:ReactNode
}){

  return(

    <div className="min-h-screen bg-[#050816] text-white">

      <div className="flex">

        <aside className="hidden lg:flex lg:w-[260px] lg:flex-col border-r border-white/10 bg-black/20">

          <div className="p-6">

            <div className="text-3xl font-semibold tracking-tight">
              AXON402
            </div>

            <div className="mt-3 text-sm text-zinc-500">
              Deterministic infrastructure for autonomous coordination.
            </div>

          </div>

          <div className="space-y-2 px-4">

            {[
              "Overview",
              "Observability",
              "Ledger",
              "Wallets",
              "Security",
              "Notifications",
              "Policies"
            ].map((item)=>(

              <button
                key={item}
                className="w-full rounded-2xl border border-transparent px-4 py-3 text-left text-sm text-zinc-400 transition hover:border-cyan-500/20 hover:bg-cyan-500/10 hover:text-white"
              >
                {item}
              </button>

            ))}

          </div>

        </aside>

        <main className="flex-1">

          <div className="border-b border-white/10 bg-black/20">

            <div className="flex items-center justify-between px-6 py-5">

              <div>

                <div className="text-xl font-semibold">
                  Infrastructure Control Plane
                </div>

                <div className="mt-1 text-sm text-zinc-500">
                  Arc-native coordination runtime operational
                </div>

              </div>

              <div className="flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">

                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

                Operational

              </div>

            </div>

          </div>

          <div className="p-6">
            {children}
          </div>

        </main>

      </div>

    </div>

  )
}
