// src/app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'Weather App',
  description: 'Get the weather forecast for your area',
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