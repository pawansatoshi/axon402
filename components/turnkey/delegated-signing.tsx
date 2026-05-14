"use client"

const policies = [
  "Execution authorization",
  "Recovery-aware coordination",
  "Embedded settlement signing",
  "Infrastructure policy validation"
]

export function DelegatedSigning(){

  return(

    <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">

      <div className="mb-8">

        <div className="text-sm uppercase tracking-[0.2em] text-cyan-300">
          Delegated Coordination
        </div>

        <div className="mt-3 text-4xl font-semibold tracking-tight">
          Signing Policy Architecture
        </div>

      </div>

      <div className="space-y-5">

        {policies.map((policy)=>(

          <div
            key={policy}
            className="flex items-center gap-4 rounded-3xl border border-white/5 bg-black/20 p-5"
          >

            <div className="h-2 w-2 rounded-full bg-cyan-400" />

            <div className="text-zinc-300">
              {policy}
            </div>

          </div>

        ))}

      </div>

    </div>

  )
}
