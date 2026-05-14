"use client"

import { useAuth }
from "@/providers/auth-provider"

export function IdentityPanel(){

  const {
    user,
    login,
    logout
  } = useAuth()

  return(

    <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6">

      <div className="mb-6">

        <div className="text-sm uppercase tracking-[0.2em] text-cyan-300">
          Infrastructure Identity
        </div>

        <div className="mt-2 text-3xl font-semibold">
          Unified Coordination Profile
        </div>

      </div>

      {!user && (

        <button
          onClick={login}
          className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
        >
          Connect Google Identity
        </button>

      )}

      {user && (

        <div className="space-y-4">

          <div className="rounded-3xl border border-white/5 bg-black/20 p-5">

            <div className="text-sm text-zinc-500">
              Connected Identity
            </div>

            <div className="mt-2 text-xl font-medium">
              {user.displayName}
            </div>

            <div className="mt-2 text-zinc-400">
              {user.email}
            </div>

          </div>

          <button
            onClick={logout}
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm transition hover:bg-white/[0.06]"
          >
            Disconnect Identity
          </button>

        </div>

      )}

    </div>

  )
}
