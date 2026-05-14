export interface LedgerEntry {
  id: string
  txHash: string
  wallet: string
  network: string
  timestamp: number
  amount: string
  status: "pending" | "confirmed" | "failed"
  latency?: number
  orchestrationId?: string
}
