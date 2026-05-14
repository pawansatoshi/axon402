'use client'

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/lib/firebase'

export function useUser() {
  const [user, loading] = useAuthState(auth)

  return {
    user,
    loading,
    isLoggedIn: !!user
  }
}
