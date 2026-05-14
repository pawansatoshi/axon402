"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from "react"

import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  User
} from "firebase/auth"

import { auth } from "@/lib/firebase"

interface AuthContextType{
  user:User|null

  loading:boolean

  login:()=>Promise<void>

  logout:()=>Promise<void>
}

const AuthContext=
createContext<AuthContextType|null>(null)

export function AuthProvider({
  children
}:{
  children:ReactNode
}){

  const [user,setUser]=
  useState<User|null>(null)

  const [loading,setLoading]=
  useState(true)

  useEffect(()=>{

    const unsubscribe=
    onAuthStateChanged(auth,(user)=>{

      setUser(user)

      setLoading(false)

    })

    return ()=>unsubscribe()

  },[])

  async function login(){

    const provider=
    new GoogleAuthProvider()

    await signInWithPopup(
      auth,
      provider
    )
  }

  async function logout(){

    await signOut(auth)

  }

  return(
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){

  const context=
  useContext(AuthContext)

  if(!context){

    throw new Error(
      "useAuth must be used within AuthProvider"
    )
  }

  return context
}
