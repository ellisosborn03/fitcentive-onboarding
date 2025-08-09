"use client"

import { Button } from "@/components/ui/button"

type NotificationsHeroProps = {
  title?: string
  subtitle?: string
  ctaText?: string
}

export default function NotificationsHero({
  title = "Complete twice as many challenges with notifications",
  subtitle = "Notifications keep you accountable and on track.",
  ctaText = "Enable Notifications",
}: NotificationsHeroProps) {
  return (
    <section
      aria-label="Enable notifications"
      className="relative w-full min-h-[720px] bg-gradient-to-b from-black via-[#0D0D0D] to-[#1A1A1A] overflow-hidden"
    >
      {/* Top-left header block */}
      <div className="absolute top-2 left-5 right-5">
        <h2 className="text-white text-[24px] leading-[32px] font-semibold tracking-tight text-left">{title}</h2>
      </div>

      {/* Comparison bars container */}
      <div className="absolute top-32 left-5 right-5">
        <div className="bg-[#2A2A2A] rounded-3xl p-6 border border-[#333333]">
          <div className="flex items-end justify-center gap-8 mb-6">
            {/* Without notifications bar */}
            <div className="flex flex-col items-center">
              <div className="text-white text-sm font-medium mb-2 text-center">
                Without
                <br />
                Notifications
              </div>
              <div className="bg-[#404040] rounded-2xl px-6 py-4 h-16 flex items-center justify-center min-w-[80px]">
                <span className="text-white text-lg font-semibold">34%</span>
              </div>
            </div>

            {/* With notifications bar */}
            <div className="flex flex-col items-center">
              <div className="text-white text-sm font-medium mb-2 text-center">
                With
                <br />
                Notifications
              </div>
              <div className="bg-[#8EFFA3] rounded-2xl px-6 py-6 h-24 flex items-center justify-center min-w-[80px]">
                <span className="text-black text-xl font-bold">2X</span>
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-white/90 text-[15px] leading-[22px] text-center">{subtitle}</p>
        </div>
      </div>

      {/* Bottom overlay for consistency */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-black/60 to-black/95" />

      {/* Bottom CTA matches outlined dark pill style */}
      <div className="absolute inset-x-0 bottom-6 px-5">
        <Button className="h-14 w-full rounded-[28px] bg-[#2A2A2A] text-white border border-[#2e2e2e] hover:bg-[#2A2A2A] hover:opacity-95 transition">
          {ctaText}
        </Button>
      </div>
    </section>
  )
}
