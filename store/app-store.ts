'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Language, Theme, User } from '@/types'

interface AppState {
  language: Language
  theme: Theme
  user: User | null
  isAuthenticated: boolean
  setLanguage: (language: Language) => void
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  setUser: (user: User | null) => void
  login: (user: User) => void
  logout: () => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      language: 'ar',
      theme: 'dark',
      user: null,
      isAuthenticated: false,
      
      setLanguage: (language: Language) => set({ language }),
      
      setTheme: (theme: Theme) => set({ theme }),
      
      toggleTheme: () => set((state) => ({ 
        theme: state.theme === 'dark' ? 'light' : 'dark' 
      })),
      
      setUser: (user: User | null) => set({ user, isAuthenticated: !!user }),
      
      login: (user: User) => set({ user, isAuthenticated: true }),
      
      logout: () => set({ user: null, isAuthenticated: false })
    }),
    {
      name: 'ingenium-app'
    }
  )
)
