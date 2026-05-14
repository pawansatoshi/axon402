export interface InfrastructureUser {
  uid: string
  email?: string
  displayName?: string

  embeddedWallet?: string

  externalWallets?: string[]

  createdAt?: number

  infrastructureScore?: number
}

export interface LedgerRecord {
  id?: string

  type: string

  status: string

  network: string

  latency: string

  createdAt: number
}

export interface InfrastructureNotification {
  id?: string

  title: string

  description: string

  createdAt: number
}
