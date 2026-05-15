"use client"

import { useEffect, useState } from "react"

export function useMembership() {

  const [credits, setCredits] = useState(100)

  const [membership, setMembership] =
    useState(true)

  const [loading, setLoading] =
    useState(false)

  function deductCredit() {

    setCredits((prev) => {

      if (prev <= 0) return 0

      return prev - 1

    })

  }

  function rechargeMembership() {

    setCredits(100)

    setMembership(true)

  }

  return {
    credits,
    membership,
    loading,
    deductCredit,
    rechargeMembership
  }

}
