"use client"

import { useEffect, useState } from "react"

import {
  getMembership,
} from "@/lib/membership-store"

export function useMembershipSync() {

  const [membership, setMembership] =
    useState(getMembership())

  useEffect(() => {

    const sync = () => {
      setMembership(getMembership())
    }

    sync()

    const interval =
      setInterval(sync, 1000)

    return () =>
      clearInterval(interval)

  }, [])

  return membership
}
