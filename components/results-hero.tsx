"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

type ResultsHeroProps = {
  title?: string
  description?: string
  ctaText?: string
}

export default function ResultsHero({
  title = "Fitcentive delivers results",
  description = "A study of 77,000 people showed a 44% increase in health metrics with our challenge format.", // Changed here
  ctaText = "Continue",
}: ResultsHeroProps) {
  return (
    <section
      aria-label="Fitcentive Results"
      className="relative w-full min-h-[720px] bg-gradient-to-b from-black via-[#0D0D0D] to-[#1A1A1A] overflow-hidden flex flex-col items-center py-8 px-5"
    >
      {/* Back button - top left */}
      <div className="absolute top-6 left-5 z-10">
        <Button variant="ghost" size="icon" className="text-white">
          <ArrowLeft className="h-6 w-6" />
        </Button>
      </div>

      {/* Main Title - top-left, left-aligned */}
      <div className="absolute top-6 left-20 right-5 z-10">
        <h2 className="text-white text-[24px] leading-[32px] font-semibold tracking-tight text-left">{title}</h2>
      </div>

      {/* Graph Card */}
      <div className="mt-28 w-full max-w-md bg-[#2A2A2A] rounded-3xl p-6 border border-[#333333] shadow-sm">
        <h3 className="text-white text-lg font-semibold mb-4">Health Metrics</h3> {/* Changed here */}
        <div className="relative h-40 w-full">
          {/* Grid lines - simplified to match reference */}
          <div className="absolute inset-0 grid grid-rows-2 opacity-20">
            <div className="border-b border-gray-600" />
            <div className="border-b border-gray-600" />
          </div>

          {/* Simulated lines/areas - adjusted to match reference image */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Line 1: Without Fitcentive (dark gray, slightly increasing) */}
            <line x1="0" y1="70" x2="100" y2="50" stroke="#404040" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            {/* Line 2: With Fitcentive (neon green, more steeply increasing) */}
            <line x1="0" y1="50" x2="100" y2="20" stroke="#8EFFA3" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          </svg>

          {/* Labels for lines - positioned to match reference */}
          <div className="absolute top-2 right-0 text-white text-xs font-medium">Without Fitcentive</div>
          <div className="absolute bottom-2 right-0 text-[#8EFFA3] text-xs font-medium">With Fitcentive</div>

          {/* X-axis labels */}
          <div className="absolute bottom-0 left-0 text-white text-xs font-medium">Start</div>
          <div className="absolute bottom-0 right-0 text-white text-xs font-medium">End</div>
        </div>
        {/* Description below graph */}
        <p className="mt-6 text-white/90 text-[15px] leading-[22px] text-center">{description}</p>
      </div>

      {/* Bottom CTA */}
      <div className="w-full max-w-md px-4 mt-auto pt-8">
        <Button className="h-14 w-full rounded-[28px] bg-[#2A2A2A] text-white border border-[#2e2e2e] hover:bg-[#2A2A2A] hover:opacity-95 transition">
          {ctaText}
        </Button>
      </div>
    </section>
  )
}
