import { payUSDC } from "./real-payments"

export async function activateMembership(address) {
  return await payUSDC(address, 10)
}
