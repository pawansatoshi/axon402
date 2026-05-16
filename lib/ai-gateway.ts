"use client"

import {
  getMembership,
  deductCredit,
  failRequest,
} from "@/lib/membership-store"

export async function runAxonRequest(prompt: string) {
  const membership = getMembership()

  if (!membership.active) {
    return {
      success: false,
      error: "Membership inactive. Recharge required.",
    }
  }

  if (membership.credits <= 0) {
    return {
      success: false,
      error: "No credits remaining.",
    }
  }

  try {
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const success = deductCredit()

    if (!success) {
      return {
        success: false,
        error: "Credit deduction failed.",
      }
    }

    return {
      success: true,
      response: `AXON402 processed: ${prompt}`,
    }
  } catch (error) {
    failRequest()

    return {
      success: false,
      error: "AI request failed.",
    }
  }
}
