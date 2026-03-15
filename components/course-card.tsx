'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, BarChart3, ShoppingCart, ArrowUpRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useAppStore } from '@/store/app-store'
import { useCartStore } from '@/store/cart-store'
import { translations } from '@/lib/translations'
import { levelLabels, categoryLabels } from '@/lib/data'
import type { Course, CourseLevel, CourseCategory } from '@/types'

interface CourseCardProps {
  course: Course
  index?: number
}

const levelColors: Record<CourseLevel, string> = {
  beginner: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  intermediate: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
  advanced: 'bg-rose-500/10 text-rose-500 border-rose-500/20'
}

const categoryColors: Record<CourseCategory, string> = {
  civil: 'bg-blue-500/10 text-blue-400',
  architecture: 'bg-purple-500/10 text-purple-400',
  webdev: 'bg-green-500/10 text-green-400'
}

export function CourseCard({ course, index = 0 }: CourseCardProps) {
  const { language } = useAppStore()
  const { addItem } = useCartStore()
  const t = translations[language]

  const IconComponent = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[course.icon] || Icons.BookOpen

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(language === 'ar' ? 'ar-SY' : 'en-US').format(price)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="group relative flex h-full flex-col overflow-hidden border-border/50 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 teal-glow-hover">
        {/* Category Badge */}
        <div className="absolute start-3 top-3 z-10">
          <Badge variant="secondary" className={categoryColors[course.category]}>
            {categoryLabels[course.category][language]}
          </Badge>
        </div>

        {/* Icon/Image Area */}
        <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-secondary to-muted">
          <div className="flex h-20 w-20 items-center justify-center bg-primary/10 text-primary">
            <IconComponent className="h-10 w-10" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
        </div>

        <CardContent className="flex flex-1 flex-col gap-3 p-4">
          {/* Software Tag */}
          <span className="w-fit font-mono text-xs text-primary">{course.software}</span>

          {/* Title */}
          <h3 className="line-clamp-2 text-lg font-semibold leading-tight">
            {course.name[language]}
          </h3>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BarChart3 className="h-4 w-4" />
              <Badge variant="outline" className={`text-xs ${levelColors[course.level]}`}>
                {levelLabels[course.level][language]}
              </Badge>
            </div>
          </div>

          {/* Price */}
          <div className="mt-auto pt-2">
            <span className="text-2xl font-bold text-primary">
              {formatPrice(course.price)}
            </span>
            <span className="ms-1 text-sm text-muted-foreground">{t.courses.currency}</span>
          </div>
        </CardContent>

        <CardFooter className="flex gap-2 border-t border-border/50 p-4">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 gap-2"
            onClick={() => addItem(course)}
          >
            <ShoppingCart className="h-4 w-4" />
            {t.courses.addToCart}
          </Button>
          <Link href={`/courses/${course.slug}`} className="flex-1">
            <Button size="sm" className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              {t.courses.viewDetails}
              <ArrowUpRight className="h-4 w-4 rtl-flip" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
