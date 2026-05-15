interface Props {
  title: string
  value: string
  status?: string
}

export function MetricCard({
  title,
  value,
  status
}: Props) {
  return (
    <div className="
      glass
      rounded-3xl
      p-5
    ">
      <p className="text-sm text-zinc-500 mb-3">
        {title}
      </p>

      <h3 className="text-3xl font-bold mb-2">
        {value}
      </h3>

      {status && (
        <p className="text-emerald-400 text-sm">
          {status}
        </p>
      )}
    </div>
  )
}
