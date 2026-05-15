"use client"

import { useEffect, useState } from "react"
import {
  onAuthStateChanged,
  signOut,
  User
} from "firebase/auth"

import { auth } from "@/lib/firebase/config"

export default function UserProfile() {

  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {

    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })

    return () => unsub()

  }, [])

  if (!user) return null

  return (
    <div className="glass rounded-3xl p-4 flex items-center gap-4">

      <img
        src={user.photoURL || ""}
        alt="profile"
        className="w-14 h-14 rounded-full border border-white/10"
      />

      <div className="flex-1">

        <div className="font-bold text-lg">
          {user.displayName}
        </div>

        <div className="text-zinc-400 text-sm">
          {user.email}
        </div>

      </div>

      <button
        onClick={() => signOut(auth)}
        className="
          bg-red-500/20
          border border-red-500/20
          px-4
          py-2
          rounded-xl
        "
      >
        Logout
      </button>

    </div>
  )
}
