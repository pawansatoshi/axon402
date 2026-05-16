"use client"

import { useState } from "react"

export function useAxonMode() {
  const [mode, setMode] = useState("fast")

  return {
    mode,
    setMode,
  }
}
