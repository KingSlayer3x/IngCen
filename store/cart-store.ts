'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Course, CartItem } from '@/types'

interface CartState {
  items: CartItem[]
  addItem: (course: Course) => void
  removeItem: (courseId: string) => void
  updateQuantity: (courseId: string, quantity: number) => void
  clearCart: () => void
  getTotal: () => number
  getItemCount: () => number
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (course: Course) => {
        set((state) => {
          const existingItem = state.items.find(item => item.course.id === course.id)
          if (existingItem) {
            return {
              items: state.items.map(item =>
                item.course.id === course.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              )
            }
          }
          return { items: [...state.items, { course, quantity: 1 }] }
        })
      },
      
      removeItem: (courseId: string) => {
        set((state) => ({
          items: state.items.filter(item => item.course.id !== courseId)
        }))
      },
      
      updateQuantity: (courseId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(courseId)
          return
        }
        set((state) => ({
          items: state.items.map(item =>
            item.course.id === courseId
              ? { ...item, quantity }
              : item
          )
        }))
      },
      
      clearCart: () => set({ items: [] }),
      
      getTotal: () => {
        return get().items.reduce((total, item) => total + item.course.price * item.quantity, 0)
      },
      
      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0)
      }
    }),
    {
      name: 'ingenium-cart'
    }
  )
)
