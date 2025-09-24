import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Muhammad Rama Refiando - Project Team Leader & Technical Support",
  description:
    "Portofolio of Muhammad Rama Refiando - Project Team Leader at PLN Icon Plus, Informatics student at Telkom University",
  generator: "v0.app",
  keywords: [
    "Muhammad Rama Refiando",
    "Project Team Leader",
    "Technical Support",
    "PLN Icon Plus",
    "Telkom University",
    "FTTH",
    "Telecommunications",
  ],
  authors: [{ name: "Muhammad Rama Refiando" }],
  openGraph: {
    title: "Muhammad Rama Refiando - Project Team Leader & Technical Support",
    description: "Portofolio of Muhammad Rama Refiando - Project Team Leader at PLN Icon Plus",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
