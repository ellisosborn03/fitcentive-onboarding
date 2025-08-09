import type { ReactNode } from "react"

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-black via-[#0D0D0D] to-[#1A1A1A] text-white">
      <main className="mx-auto max-w-[520px] min-h-dvh flex flex-col items-stretch justify-start px-4 py-6">
        {children}
      </main>
    </div>
  )
}
