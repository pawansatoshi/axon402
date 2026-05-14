"use client"

import { ReactNode } from "react"

interface Props {
  children: ReactNode
  className?: string
}

export function GlassCard({
  children,
  className = ""
}: Props) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        shadow-2xl
        shadow-cyan-500/5
        ${className}
      `}
    >
      {children}
    </div>
  )
}
