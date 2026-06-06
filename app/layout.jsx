import "./globals.css"
import Web3Provider from "../providers/web3-provider"

export const metadata = {
  title: "AXON402",
  description: "AXON402 Infrastructure",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Web3Provider>
          {children}
        </Web3Provider>
      </body>
    </html>
  )
}
