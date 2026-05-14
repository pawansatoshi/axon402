import "./globals.css"

import { metadata }
from "@/lib/seo/metadata"

import { AuthProvider }
from "@/providers/auth-provider"

import { WalletProvider }
from "@/providers/wallet-provider"

import { ErrorBoundary }
from "@/components/system/error-boundary"

export {
  metadata
}

export default function RootLayout({
  children,
}:{
  children:React.ReactNode
}){

  return(

    <html lang="en">

      <body>

        <ErrorBoundary>

          <AuthProvider>

            <WalletProvider>

              {children}

            </WalletProvider>

          </AuthProvider>

        </ErrorBoundary>

      </body>

    </html>

  )
}
