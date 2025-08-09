"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

type DoctorHeroProps = {
  title?: string
  subtitle?: string
  ctaText?: string
}

export default function DoctorHero({
  title = "Trusted by a world-class physician",
  subtitle = "Dr. Osborn is a pioneer in Longevity Medicine with decades of experience.",
  ctaText = "Create Fitcentive Account",
}: DoctorHeroProps) {
  return (
    <section
      aria-label="Physician endorsement"
      className="relative w-full min-h-[720px] bg-gradient-to-b from-black via-[#0D0D0D] to-[#1A1A1A] overflow-hidden"
    >
      {/* Doctor image smaller and positioned lower */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-20 bottom-20 w-[75%]">
        <Image
          src="/images/doctor.png"
          alt="Physician"
          fill
          priority
          sizes="(max-width: 640px) 75vw, 400px"
          className="object-contain object-top"
        />
      </div>

      {/* Top-left header block */}
      <div className="absolute top-2 left-5 right-5">
        <h2 className="text-white text-[24px] leading-[32px] font-semibold tracking-tight text-left">{title}</h2>
        <p className="mt-2 text-white/90 text-[15px] leading-[22px] text-left">{subtitle}</p>
      </div>

      {/* Bottom overlay for readability */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-black/60 to-black/95" />

      {/* Bottom CTA matches outlined dark pill in reference */}
      <div className="absolute inset-x-0 bottom-6 px-5">
        <Button className="h-14 w-full rounded-[28px] bg-[#2A2A2A] text-white border border-[#2e2e2e] hover:bg-[#2A2A2A] hover:opacity-95 transition">
          {ctaText}
        </Button>
      </div>
    </section>
  )
}
