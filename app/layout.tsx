import { AxonModeProvider } from "@/hooks/use-axon-mode"
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

            <AxonModeProvider>{children}</AxonModeProvider>

          </WalletProvider>

        </AuthProvider>

      </body>
    </html>
  )
}
