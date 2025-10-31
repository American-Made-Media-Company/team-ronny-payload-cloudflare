import React from 'react'

import { Image } from '@/components/ui/image'
import FadeAnimation from '@/components/animations/fade-animation'

import './globals.css'

export default async function HomePage() {
  return (
    <div className="page">
      <div className="content h-full px-0 md:pr-6 grid grid-cols-1 md:grid-cols-2">
        <Image
          src="/jackson-and-trump.jpg"
          alt="Ronny Jackson and Donald Trump"
          className="block md:hidden w-full h-[600px]"
        />
        <div>
          <FadeAnimation
            as="h1"
            className="mt-12 py-4 border-y-14 border-red-secondary text-4xl md:text-6xl font-black uppercase text-center"
            delay={0.2}
          >
            Texas is worth defending
          </FadeAnimation>
          <FadeAnimation
            as="p"
            className="mt-4 px-3 md:px-0 md:pr-4 text-base md:text-xl leading-snug lg:leading-normal"
            delay={0.3}
          >
            Congressman Ronny Jackson represents Texas’ 13th Congressional District (TX-13) in the
            United States House of Representatives which encompasses 38 counties and over 40,000
            square miles in the Texas Panhandle and parts of North Texas. A former Navy Rear Admiral
            with 25 years of active-duty service to his country and a former Emergency Medicine
            Physician and Director of the White House Medical Unit, Congressman Jackson served as
            White House Physician for three U.S. Presidents. His last duty assignment was at the
            White House, where he served as Assistant to the President and as the appointed Chief
            Medical Advisor to President Donald J. Trump. Congressman Jackson currently serves on
            the House Armed Services Committee, House Agriculture Committee, House Foreign Affairs
            Committee, and the House Select Subcommittee on the Coronavirus Pandemic.
          </FadeAnimation>
        </div>
        <Image
          src="/jackson-and-trump.jpg"
          alt="Ronny Jackson and Donald Trump"
          className="hidden md:block w-full h-[600px]"
        />
      </div>
    </div>
  )
}
