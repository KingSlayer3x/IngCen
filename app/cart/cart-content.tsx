'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft, ArrowRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { useAppStore } from '@/store/app-store'
import { useCartStore } from '@/store/cart-store'
import { translations } from '@/lib/translations'

export function CartContent() {
  const { language } = useAppStore()
  const { items, removeItem, updateQuantity, getTotal, clearCart } = useCartStore()
  const t = translations[language]
  const [mounted, setMounted] = useState(false)
  
  const ArrowIcon = language === 'ar' ? ArrowRight : ArrowLeft

  useEffect(() => {
    setMounted(true)
  }, [])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(language === 'ar' ? 'ar-SY' : 'en-US').format(price)
  }

  if (!mounted) {
    return (
      <div className="container mx-auto px-4 py-24">
        <div className="flex h-64 items-center justify-center">
          <div className="h-8 w-8 animate-spin border-4 border-primary border-t-transparent" />
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-md text-center"
        >
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center bg-muted text-muted-foreground">
            <ShoppingCart className="h-12 w-12" />
          </div>
          <h1 className="text-2xl font-bold">{t.cart.empty}</h1>
          <p className="mt-2 text-muted-foreground">{t.cart.emptyDescription}</p>
          <Link href="/courses" className="mt-6 inline-block">
            <Button className="gap-2 bg-primary text-primary-foreground">
              {t.cart.browseCourses}
              <ArrowIcon className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-8 text-3xl font-bold">{t.cart.title}</h1>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card className="border-border/50">
              <CardContent className="divide-y divide-border p-0">
                <AnimatePresence mode="popLayout">
                  {items.map((item) => {
                    const IconComponent = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[item.course.icon] || Icons.BookOpen
                    return (
                      <motion.div
                        key={item.course.id}
                        layout
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex gap-4 p-4"
                      >
                        {/* Course Icon */}
                        <div className="flex h-20 w-20 shrink-0 items-center justify-center bg-secondary text-primary">
                          <IconComponent className="h-10 w-10" />
                        </div>

                        {/* Course Info */}
                        <div className="flex flex-1 flex-col">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <Link 
                                href={`/courses/${item.course.slug}`}
                                className="font-semibold hover:text-primary"
                              >
                                {item.course.name[language]}
                              </Link>
                              <p className="text-sm text-muted-foreground">{item.course.software}</p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeItem(item.course.id)}
                              className="shrink-0 text-muted-foreground hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>

                          <div className="mt-auto flex items-center justify-between pt-2">
                            {/* Quantity */}
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.course.id, item.quantity - 1)}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center font-medium">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.course.id, item.quantity + 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>

                            {/* Price */}
                            <div className="text-end">
                              <span className="text-lg font-bold text-primary">
                                {formatPrice(item.course.price * item.quantity)}
                              </span>
                              <span className="ms-1 text-sm text-muted-foreground">{t.courses.currency}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </AnimatePresence>
              </CardContent>
            </Card>

            {/* Continue Shopping */}
            <div className="mt-4 flex items-center justify-between">
              <Link href="/courses">
                <Button variant="ghost" className="gap-2 text-muted-foreground">
                  <ArrowIcon className="h-4 w-4" />
                  {t.cart.continueShopping}
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                onClick={clearCart}
                className="text-muted-foreground hover:text-destructive"
              >
                {language === 'ar' ? 'مسح السلة' : 'Clear Cart'}
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-primary/20">
              <CardContent className="p-6">
                <h2 className="mb-4 text-lg font-semibold">
                  {language === 'ar' ? 'ملخص الطلب' : 'Order Summary'}
                </h2>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{t.cart.subtotal}</span>
                    <span>
                      {formatPrice(getTotal())} {t.courses.currency}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {language === 'ar' ? 'الضريبة' : 'Tax'}
                    </span>
                    <span className="text-muted-foreground">
                      {language === 'ar' ? 'غير مشمولة' : 'Not included'}
                    </span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">{t.cart.total}</span>
                  <span className="text-2xl font-bold text-primary">
                    {formatPrice(getTotal())} {t.courses.currency}
                  </span>
                </div>

                <Link href="/checkout" className="mt-6 block">
                  <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    {t.cart.checkout}
                  </Button>
                </Link>

                <p className="mt-4 text-center text-xs text-muted-foreground">
                  {language === 'ar' 
                    ? 'بالنقر على إتمام الشراء، أنت توافق على شروط الخدمة'
                    : 'By clicking checkout, you agree to our terms of service'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
