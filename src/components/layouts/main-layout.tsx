'use client'

import { useEffect, useRef } from "react"
import ReactLenis, { LenisRef } from "lenis/react"
import { cancelFrame, frame } from "motion/react"

import Navbar from "@/components/partials/navbar"
import Footer from "@/components/partials/footer"
import Cursor from "@/components/cursor"
import useBreakpoint from "@/hooks/use-breakpoint"

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null)

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const timestamp = data.timestamp

      lenisRef?.current?.lenis?.raf(timestamp)
    }

    frame.update(update, true)

    return () => cancelFrame(update)
  }, [])

  const isMdUp = useBreakpoint(768)

  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      {isMdUp && <Cursor />}
      <main>
        <Navbar />
        <div className="bg-neutral-100">
          {children}
        </div>
        <Footer />
      </main>
    </>
  )
}
