import { payUSDC } from "./real-payments"

export async function unlockAIRequest(address) {
  return await payUSDC(address, 1)
}
