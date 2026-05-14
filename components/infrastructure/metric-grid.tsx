const metrics = [
  {
    label: "Execution Throughput",
    value: "1,284",
  },
  {
    label: "Settlement Volume",
    value: "42,800 USDC",
  },
  {
    label: "Latency",
    value: "84ms",
  },
  {
    label: "Infrastructure Health",
    value: "99.98%",
  },
]

export function MetricGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
        >
          <div className="text-sm text-zinc-400">
            {metric.label}
          </div>

          <div className="mt-3 text-3xl font-semibold text-white">
            {metric.value}
          </div>
        </div>
      ))}
    </div>
  )
}
