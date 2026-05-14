"use client"

import { DashboardShell } from "@/components/layout/dashboard-shell"
import { MetricCard } from "@/components/cards/metric-card"
import { ObservabilityPanel } from "@/components/dashboard/observability-panel"

export default function HomePage(){

  return(

    <DashboardShell>

      <div className="space-y-8">

        <div>

          <div className="text-5xl font-semibold tracking-tight">
            Autonomous Coordination Infrastructure
          </div>

          <div className="mt-4 max-w-3xl text-lg text-zinc-500">
            Deterministic execution systems built for Arc-native settlement coordination and embedded infrastructure orchestration.
          </div>

        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <MetricCard
            label="Execution Throughput"
            value="1,284"
            meta="Realtime coordination events"
          />

          <MetricCard
            label="Settlement Volume"
            value="42,800"
            meta="Native USDC coordination"
          />

          <MetricCard
            label="Latency"
            value="84ms"
            meta="Infrastructure synchronization"
          />

          <MetricCard
            label="Infrastructure Health"
            value="99.98%"
            meta="Operational coordination layer"
          />

        </div>

        <ObservabilityPanel />

        <div className="grid gap-6 xl:grid-cols-2">

          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">

            <div className="text-2xl font-semibold">
              Embedded Wallet Infrastructure
            </div>

            <div className="mt-3 text-zinc-500">
              Recovery-aware infrastructure coordination with delegated execution controls.
            </div>

            <div className="mt-8 space-y-4">

              {[
                "Turnkey coordination runtime active",
                "Embedded wallet synchronization verified",
                "Infrastructure identity linked",
                "Recovery layer operational"
              ].map((item)=>(

                <div
                  key={item}
                  className="rounded-2xl border border-white/5 bg-black/20 p-4 text-sm text-zinc-300"
                >
                  {item}
                </div>

              ))}

            </div>

          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">

            <div className="text-2xl font-semibold">
              Settlement Coordination
            </div>

            <div className="mt-3 text-zinc-500">
              Infrastructure-grade coordination policies with deterministic execution finality.
            </div>

            <div className="mt-8 grid gap-4">

              {[
                "Execution policies synchronized",
                "Arc-native settlement active",
                "Observability telemetry operational",
                "Coordination integrity verified"
              ].map((item)=>(

                <div
                  key={item}
                  className="rounded-2xl border border-white/5 bg-black/20 p-4 text-sm text-zinc-300"
                >
                  {item}
                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </DashboardShell>

  )
}
