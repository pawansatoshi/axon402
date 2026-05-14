'use client'

import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '@/lib/firebase'

export default function LoginButton() {

  const login = async () => {
    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
      alert('Login successful')
    } catch (err) {
      console.error(err)
      alert('Login failed')
    }
  }

  return (
    <button
      onClick={login}
      className="bg-white text-black px-5 py-3 rounded-2xl font-bold"
    >
      Continue with Google
    </button>
  )
}
