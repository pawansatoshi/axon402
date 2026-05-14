interface MetricCardProps{
  label:string
  value:string
}

export function MetricCard({
  label,
  value
}:MetricCardProps){
  return(
    <div className="infrastructure-panel p-6">
      <div className="text-sm text-zinc-500">
        {label}
      </div>

      <div className="mt-3 text-3xl font-semibold">
        {value}
      </div>
    </div>
  )
}
