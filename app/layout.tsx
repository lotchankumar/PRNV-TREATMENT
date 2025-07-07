import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PRNV TREATMENT',
  description: 'Panja Roga Nivarana Vaithiyam',
  
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
