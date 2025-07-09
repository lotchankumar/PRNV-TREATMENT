import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PRNV TREATMENT',
  description: 'Panja Roga Nivarana Vaithiyam',
  icons: {
    icon: "/logo.jpeg", // 👈 This is how you add favicon in App Router
  },
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
