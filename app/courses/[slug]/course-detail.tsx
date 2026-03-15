'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, BarChart3, Calendar, User, ShoppingCart, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { CourseCard } from '@/components/course-card'
import { SectionHeader } from '@/components/section-header'
import { useAppStore } from '@/store/app-store'
import { useCartStore } from '@/store/cart-store'
import { translations } from '@/lib/translations'
import { levelLabels, categoryLabels } from '@/lib/data'
import type { Course } from '@/types'

interface CourseDetailProps {
  course: Course
  relatedCourses: Course[]
}

const levelColors = {
  beginner: 'bg-emerald-500/10 text-emerald-500',
  intermediate: 'bg-amber-500/10 text-amber-500',
  advanced: 'bg-rose-500/10 text-rose-500',
}

export function CourseDetail({ course, relatedCourses }: CourseDetailProps) {
  const { language } = useAppStore()
  const { addItem } = useCartStore()
  const t = translations[language]

  const IconComponent = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[course.icon] || Icons.BookOpen
  const BackIcon = language === 'ar' ? ChevronRight : ChevronLeft

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(language === 'ar' ? 'ar-SY' : 'en-US').format(price)
  }

  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        {/* Back Link */}
        <Link href="/courses" className="mb-8 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
          <BackIcon className="h-4 w-4" />
          {t.common.back}
        </Link>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <div className="mb-8">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {categoryLabels[course.category][language]}
                  </Badge>
                  <Badge variant="outline" className={levelColors[course.level]}>
                    {levelLabels[course.level][language]}
                  </Badge>
                </div>

                <h1 className="text-balance text-3xl font-bold md:text-4xl">
                  {course.name[language]}
                </h1>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>{course.schedule}</span>
                  </div>
                </div>
              </div>

              {/* Course Image/Icon */}
              <div className="relative mb-8 flex h-64 items-center justify-center bg-gradient-to-br from-secondary to-muted">
                <div className="flex h-32 w-32 items-center justify-center bg-primary/10 text-primary">
                  <IconComponent className="h-16 w-16" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                <span className="absolute bottom-4 start-4 font-mono text-lg text-primary">
                  {course.software}
                </span>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="mb-4 text-xl font-semibold">
                  {language === 'ar' ? 'عن الدورة' : 'About the Course'}
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  {course.description[language]}
                </p>
              </div>

              {/* Syllabus */}
              <div className="mb-8">
                <h2 className="mb-4 text-xl font-semibold">{t.courses.syllabus}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {course.syllabus.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-start hover:text-primary">
                        <span className="flex items-center gap-3">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-primary/10 text-sm font-bold text-primary">
                            {index + 1}
                          </span>
                          {item.title[language]}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="ps-11 text-muted-foreground">
                        {item.description[language]}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Instructor */}
              <div className="mb-8">
                <h2 className="mb-4 text-xl font-semibold">{t.courses.instructor}</h2>
                <Card className="border-border/50">
                  <CardContent className="flex items-start gap-4 p-6">
                    <Avatar className="h-16 w-16 border-2 border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-lg text-primary">
                        {course.instructor.name[language].charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">{course.instructor.name[language]}</h3>
                      <p className="text-sm text-primary">{course.instructor.title[language]}</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {course.instructor.bio[language]}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="sticky top-24"
            >
              <Card className="border-primary/20 bg-card">
                <CardContent className="p-6">
                  {/* Price */}
                  <div className="mb-6 text-center">
                    <span className="text-4xl font-bold text-primary">
                      {formatPrice(course.price)}
                    </span>
                    <span className="ms-2 text-lg text-muted-foreground">{t.courses.currency}</span>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3">
                    <Button 
                      size="lg" 
                      className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                      onClick={() => addItem(course)}
                    >
                      <ShoppingCart className="h-5 w-5" />
                      {t.courses.addToCart}
                    </Button>
                    <Link href="/cart" className="block">
                      <Button size="lg" variant="outline" className="w-full border-primary/50 hover:bg-primary/10">
                        {t.courses.enroll}
                      </Button>
                    </Link>
                  </div>

                  {/* Course Info */}
                  <div className="mt-6 space-y-4 border-t border-border pt-6">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {t.courses.duration}
                      </span>
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <BarChart3 className="h-4 w-4" />
                        {t.courses.level}
                      </span>
                      <Badge variant="outline" className={levelColors[course.level]}>
                        {levelLabels[course.level][language]}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {t.courses.schedule}
                      </span>
                      <span className="text-sm font-medium">{course.schedule}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Related Courses */}
        {relatedCourses.length > 0 && (
          <div className="mt-16">
            <SectionHeader title={t.courses.relatedCourses} centered={false} />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedCourses.map((course, index) => (
                <CourseCard key={course.id} course={course} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
