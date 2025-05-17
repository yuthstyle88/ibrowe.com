import './globals.css'
import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'iBrowe เบราว์เซอร์ที่ใส่ใจคุณที่สุด',
  description: 'The iBrowe browser is a fast, private and secure web browser for PC, Mac and mobile. Download now to enjoy a faster ad-free browsing experience that saves data and battery life by blocking tracking software',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
} 