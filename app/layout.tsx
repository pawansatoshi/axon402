import "./globals.css"

import { AuthProvider } from "@/providers/auth-provider"
import { WalletProvider } from "@/providers/wallet-provider"

export const metadata = {
  title: "AXON402",
  description: "AI Operational Workspace",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>

        <AuthProvider>

          <WalletProvider>

            {children}

          </WalletProvider>

        </AuthProvider>

      </body>
    </html>
  )
}
