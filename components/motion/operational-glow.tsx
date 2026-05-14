"use client"

export function OperationalGlow(){

  return(

    <div className="pointer-events-none fixed inset-0 overflow-hidden">

      <div className="absolute left-[10%] top-[10%] h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute right-[10%] top-[30%] h-[260px] w-[260px] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="absolute bottom-[10%] left-[40%] h-[240px] w-[240px] rounded-full bg-indigo-500/10 blur-[120px]" />

    </div>

  )
}
