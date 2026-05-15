import "./globals.css"

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
      <body>{children}</body>
    </html>
  )
}
