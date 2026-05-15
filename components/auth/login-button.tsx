"use client"

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "@/lib/firebase/config"

export default function LoginButton() {
  const login = async () => {
    const provider = new GoogleAuthProvider()

    try {
      await signInWithPopup(auth, provider)
      alert("Login successful")
    } catch (err) {
      console.error(err)
      alert("Login failed")
    }
  }

  return (
    <button
      onClick={login}
      className="purple-button px-6 py-4 rounded-2xl font-semibold"
    >
      Continue with Google
    </button>
  )
}
