'use client'

import { useUser } from '@/hooks/useUser'

export default function UserCard() {

  const { user, loading } = useUser()

  if (loading) {
    return (
      <div className="bg-zinc-900 p-6 rounded-3xl border border-white/10">
        Loading...
      </div>
    )
  }

  if (!user) {
    return (
      <div className="bg-zinc-900 p-6 rounded-3xl border border-white/10">
        Not logged in
      </div>
    )
  }

  return (
    <div className="bg-zinc-900 p-6 rounded-3xl border border-cyan-500/20">

      <img
        src={user.photoURL || ''}
        className="w-16 h-16 rounded-full mb-4"
      />

      <p className="text-zinc-400 text-sm">
        Logged In User
      </p>

      <h3 className="text-2xl font-bold mt-1">
        {user.displayName}
      </h3>

      <p className="text-zinc-500 mt-2 break-all">
        {user.email}
      </p>

    </div>
  )
}
