"use client"

import { motion }
from "framer-motion"

export function Topbar(){

  return(

    <motion.div

      initial={{
        opacity:0,
        y:-20
      }}

      animate={{
        opacity:1,
        y:0
      }}

      transition={{
        duration:0.5
      }}

      className="mb-8 flex items-center justify-between border-b border-white/10 pb-4"
    >

      <div>

        <h1 className="text-3xl font-semibold tracking-tight">
          AXON402
        </h1>

        <p className="mt-2 text-sm text-zinc-400">
          Deterministic infrastructure for autonomous coordination
        </p>

      </div>

      <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">

        <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

        Arc Testnet Operational

      </div>

    </motion.div>

  )
}
