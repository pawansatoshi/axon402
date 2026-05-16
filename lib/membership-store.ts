"use client"

type MembershipState = {
  active: boolean
  credits: number
  success: number
  failed: number
}

const STORAGE_KEY = "axon402-membership"

export function getMembership(): MembershipState {
  if (typeof window === "undefined") {
    return {
      active: false,
      credits: 0,
      success: 0,
      failed: 0,
    }
  }

  const raw = localStorage.getItem(STORAGE_KEY)

  if (!raw) {
    return {
      active: false,
      credits: 0,
      success: 0,
      failed: 0,
    }
  }

  return JSON.parse(raw)
}

export function saveMembership(data: MembershipState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function activateMembership() {
  saveMembership({
    active: true,
    credits: 100,
    success: 0,
    failed: 0,
  })
}

export function deductCredit() {
  const data = getMembership()

  if (data.credits <= 0) {
    data.active = false
    saveMembership(data)
    return false
  }

  data.credits -= 1
  data.success += 1

  if (data.credits <= 0) {
    data.active = false
  }

  saveMembership(data)
  return true
}

export function failRequest() {
  const data = getMembership()
  data.failed += 1
  saveMembership(data)
}
