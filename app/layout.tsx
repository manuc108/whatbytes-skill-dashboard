import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "WhatBytes - Skill Test Dashboard",
  description: "Skill test analysis and results dashboard",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background min-h-screen">{children}</body>
    </html>
  )
}

