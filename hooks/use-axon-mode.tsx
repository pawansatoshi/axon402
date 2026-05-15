"use client"

import { createContext, useContext, useState } from "react"

const AxonModeContext = createContext<any>(null)

export function AxonModeProvider({ children }: any) {

  const [mode, setMode] = useState("Solve Maths")

  return (
    <AxonModeContext.Provider
      value={{
        mode,
        setMode
      }}
    >
      {children}
    </AxonModeContext.Provider>
  )

}

export function useAxonMode() {
  return useContext(AxonModeContext)
}
