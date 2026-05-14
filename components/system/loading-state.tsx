"use client"

export function LoadingState(){

  return(

    <div className="space-y-5">

      <div className="h-40 animate-pulse rounded-[32px] bg-white/[0.04]" />

      <div className="grid gap-5 md:grid-cols-2">

        <div className="h-52 animate-pulse rounded-[32px] bg-white/[0.04]" />

        <div className="h-52 animate-pulse rounded-[32px] bg-white/[0.04]" />

      </div>

      <div className="h-64 animate-pulse rounded-[32px] bg-white/[0.04]" />

    </div>

  )
}
