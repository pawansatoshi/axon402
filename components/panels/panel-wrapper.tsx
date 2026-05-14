"use client"

import { ReactNode } from "react"

interface Props {
  title: string
  description: string
  children: ReactNode
}

export function PanelWrapper({
  title,
  description,
  children,
}: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">
          {title}
        </h2>

        <p className="mt-2 text-sm text-zinc-400">
          {description}
        </p>
      </div>

      {children}
    </div>
  )
}
