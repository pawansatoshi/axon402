"use client"

const metrics = [
  {
    label: "Settlement Finality",
    value: "1.2s"
  },
  {
    label: "Execution Reliability",
    value: "99.98%"
  },
  {
    label: "Active Coordinators",
    value: "128"
  },
  {
    label: "Policy Integrity",
    value: "Verified"
  }
]

export function OperationalPulse() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-5"
        >

          <div className="text-sm text-zinc-500">
            {metric.label}
          </div>

          <div className="mt-4 text-3xl font-semibold tracking-tight">
            {metric.value}
          </div>

        </div>
      ))}

    </div>
  )
}
