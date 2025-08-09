"use client"

import type React from "react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react" // For the back arrow icon

type FeatureBoxProps = {
  number: number // Added for numbering
  title: string
  description: string
  icon?: React.ReactNode // Optional icon for each feature
}

function FeatureBox({ number, title, description, icon }: FeatureBoxProps) {
  return (
    <div className="bg-[#2A2A2A] rounded-xl p-5 mb-4 border border-[#333333] shadow-sm">
      <div className="flex items-center mb-2">
        {icon && <div className="mr-3 text-white">{icon}</div>}
        {/* Updated to include numbering */}
        <h3 className="text-white text-[18px] leading-[24px] font-semibold">{`${number}. ${title}`}</h3>
      </div>
      <p className="text-white/90 text-[14px] leading-[20px]">{description}</p>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section
      aria-label="How Fitcentive Works"
      className="relative w-full min-h-[720px] bg-gradient-to-b from-black via-[#0D0D0D] to-[#1A1A1A] overflow-hidden flex flex-col items-center py-8 px-5"
    >
      {/* Back button - top left */}
      <div className="absolute top-6 left-5 z-10">
        <Button variant="ghost" size="icon" className="text-white">
          <ArrowLeft className="h-6 w-6" />
        </Button>
      </div>

      {/* Main Title - moved to top-left, left-aligned */}
      <div className="absolute top-6 left-20 right-5 z-10">
        {" "}
        {/* Adjusted left to account for back button */}
        <h2 className="text-white text-[24px] leading-[32px] font-semibold tracking-tight text-left">
          How Fitcentive Works
        </h2>
      </div>

      {/* Central graphic/logo placeholder - adjusted position */}
      <div className="mt-28 mb-8">
        {" "}
        {/* Moved down to make space for the title */}
        <div className="relative w-28 h-28 rounded-full overflow-hidden bg-black flex items-center justify-center border border-[#333333]">
          <Image
            src="/images/fc-logo.png"
            alt="Fitcentive Logo"
            width={72}
            height={72}
            priority
            className="object-contain"
          />
        </div>
      </div>

      {/* Feature Boxes */}
      <div className="w-full max-w-md flex-grow px-4">
        <FeatureBox
          number={1} // Added number
          title="Stake"
          description="Put money on the line to commit to your goals."
        />
        <FeatureBox
          number={2} // Added number
          title="Improve"
          description="Track sleep, activity, and recovery in real time."
        />
        <FeatureBox
          number={3} // Added number
          title="Earn"
          description="Hit your goals and get rewarded or miss them and your stake goes to those who stayed accountable."
        />
      </div>

      {/* Bottom CTA */}
      <div className="w-full max-w-md px-4 mt-auto pt-8">
        <Button className="h-14 w-full rounded-[28px] bg-[#2A2A2A] text-white border border-[#2e2e2e] hover:bg-[#2A2A2A] hover:opacity-95 transition">
          Start my assessment
        </Button>
      </div>
    </section>
  )
}
