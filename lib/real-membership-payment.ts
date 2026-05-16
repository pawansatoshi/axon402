"use client"

import {
  activateMembership,
} from "@/lib/membership-store"

export async function payMembership() {

  const approved =
    confirm(
      "Activate AXON PRO Membership?\n\n10 USDC = 100 Requests"
    )

  if (!approved) {
    return
  }

  try {

    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    )

    activateMembership()

    alert(
      "AXON PRO Membership Activated Successfully"
    )

  } catch (error) {

    alert(
      "Membership activation failed"
    )
  }
}
