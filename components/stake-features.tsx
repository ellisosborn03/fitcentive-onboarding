"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

type FeatureItemProps = {
  title: string
  description: string
}

function FeatureItem({ title, description }: FeatureItemProps) {
  return (
    <div className="mb-6 last:mb-0">
      <h3 className="text-white text-[20px] leading-[28px] font-semibold tracking-tight text-left mb-1">{title}</h3>
      <p className="text-white/90 text-[15px] leading-[22px] text-left">{description}</p>
    </div>
  )
}

export default function StakeFeatures() {
  return (
    <section
      aria-label="Stake, Improve, Earn features"
      className="relative w-full min-h-[720px] bg-gradient-to-b from-black via-[#0D0D0D] to-[#1A1A1A] overflow-hidden flex flex-col items-center justify-between py-8 px-5"
    >
      {/* Logo at the top */}
      <div className="mt-8 mb-12">
        <div className="relative w-24 h-24 rounded-full overflow-hidden bg-black flex items-center justify-center border border-[#333333]">
          <Image
            src="/images/fc-logo.png"
            alt="Fitcentive Logo"
            width={64}
            height={64}
            priority
            className="object-contain"
          />
        </div>
      </div>

      {/* Feature list */}
      <div className="w-full max-w-md flex-grow px-4">
        <FeatureItem title="Stake" description="Put money on the line to commit to your goals." />
        <FeatureItem title="Improve" description="Track sleep, activity, and recovery in real time." />
        <FeatureItem
          title="Earn"
          description="Hit your goals and get rewarded or miss them and your stake goes to those who stayed accountable."
        />
      </div>

      {/* Bottom CTA */}
      <div className="w-full max-w-md px-4 mt-auto">
        <Button className="h-14 w-full rounded-[28px] bg-[#2A2A2A] text-white border border-[#2e2e2e] hover:bg-[#2A2A2A] hover:opacity-95 transition">
          Continue
        </Button>
      </div>
    </section>
  )
}
