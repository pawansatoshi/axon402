"use client"

import { ReactNode } from "react"
import { OperationalGlow } from "@/components/motion/operational-glow"

interface Props {
  children: ReactNode
}

export function AppShell({ children }: Props) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

      <OperationalGlow />

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-6 lg:px-8">

        {children}

      </div>

    </div>
  )
}
