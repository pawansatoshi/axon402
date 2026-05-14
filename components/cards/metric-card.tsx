"use client"

export function MetricCard({
  label,
  value,
  meta
}:{
  label:string
  value:string
  meta:string
}){

  return(

    <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">

      <div className="text-sm text-zinc-500">
        {label}
      </div>

      <div className="mt-4 text-4xl font-semibold tracking-tight">
        {value}
      </div>

      <div className="mt-3 text-sm text-cyan-400">
        {meta}
      </div>

    </div>

  )
}
