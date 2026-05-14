"use client"

import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export function GridLayout({ children }: Props) {
  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
      {children}
    </div>
  )
}
