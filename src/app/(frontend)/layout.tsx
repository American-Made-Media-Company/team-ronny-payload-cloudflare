import React from 'react'
import type { Metadata } from 'next'
import { Rokkitt } from 'next/font/google'

import Header from '@/components/layout/header'
import './globals.css'

const fontPrimary = Rokkitt({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-primary',
})

export const metadata: Metadata = {
  title: 'Team Ronny',
  description:
    'Congressman Ronny Jackson represents Texas’ 13th Congressional District (TX-13) in the United States House of Representatives which encompasses 38 counties and over 40,000 square miles in the Texas Panhandle and parts of North Texas. A former Navy Rear Admiral with 25 years of active-duty service to his country and a former Emergency Medicine Physician and Director of the White House Medical Unit, Congressman Jackson served as White House Physician for three U.S. Presidents. His last duty assignment was at the White House, where he served as Assistant to the President and as the appointed Chief Medical Advisor to President Donald J. Trump. Congressman Jackson currently serves on the House Armed Services Committee, House Agriculture Committee, House Foreign Affairs Committee, and the House Select Subcommittee on the Coronavirus Pandemic.',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className={`${fontPrimary.variable} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
