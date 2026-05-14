"use client"

import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export function AppShell({ children }: Props) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-6">
        {children}
      </div>
    </div>
  )
}
