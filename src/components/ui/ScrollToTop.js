"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // disable browser auto restore scroll
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }

    // selalu balik ke atas saat pindah halaman / reload
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}