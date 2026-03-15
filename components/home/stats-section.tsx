'use client'

import { motion } from 'framer-motion'
import { Users, BookOpen, GraduationCap, Calendar } from 'lucide-react'
import { useAppStore } from '@/store/app-store'
import { translations } from '@/lib/translations'
import { stats } from '@/lib/data'

const statIcons = {
  students: Users,
  courses: BookOpen,
  instructors: GraduationCap,
  years: Calendar,
}

export function StatsSection() {
  const { language } = useAppStore()
  const t = translations[language]

  const statItems = [
    { key: 'students', value: stats.students, label: t.stats.students },
    { key: 'courses', value: stats.courses, label: t.stats.courses },
    { key: 'instructors', value: stats.instructors, label: t.stats.instructors },
    { key: 'years', value: stats.years, label: t.stats.years },
  ] as const

  return (
    <section className="border-y border-border bg-card/50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {statItems.map((stat, index) => {
            const Icon = statIcons[stat.key]
            return (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center bg-primary/10 text-primary">
                  <Icon className="h-7 w-7" />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="text-4xl font-bold text-foreground"
                >
                  {stat.value.toLocaleString(language === 'ar' ? 'ar-SY' : 'en-US')}
                  {stat.key === 'years' && '+'}
                </motion.div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
