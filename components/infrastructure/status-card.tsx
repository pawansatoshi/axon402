interface Props {
  title: string
  value: string
  status?: string
}

export function StatusCard({ title, value, status }: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <div className="text-xs text-zinc-400">{title}</div>

      <div className="mt-2 text-2xl font-semibold text-white">
        {value}
      </div>

      {status && (
        <div className="mt-3 text-xs text-cyan-400">
          {status}
        </div>
      )}
    </div>
  )
}
