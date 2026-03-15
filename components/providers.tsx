'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { useAppStore } from '@/store/app-store'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  const { theme, language } = useAppStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      const root = document.documentElement
      root.classList.remove('light', 'dark')
      root.classList.add(theme)
      root.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr')
      root.setAttribute('lang', language)
    }
  }, [theme, language, mounted])

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="dark" dir="rtl" lang="ar">
        {children}
      </div>
    )
  }

  return <>{children}</>
}
