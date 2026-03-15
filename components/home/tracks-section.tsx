'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Building2, Palette, Code2, ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeader } from '@/components/section-header'
import { useAppStore } from '@/store/app-store'
import { translations } from '@/lib/translations'

const tracks = [
  {
    key: 'civil',
    icon: Building2,
    gradient: 'from-blue-500/20 to-blue-600/5',
    iconColor: 'text-blue-400',
    borderColor: 'hover:border-blue-500/50',
    filter: 'civil',
  },
  {
    key: 'architecture',
    icon: Palette,
    gradient: 'from-purple-500/20 to-purple-600/5',
    iconColor: 'text-purple-400',
    borderColor: 'hover:border-purple-500/50',
    filter: 'architecture',
  },
  {
    key: 'webdev',
    icon: Code2,
    gradient: 'from-emerald-500/20 to-emerald-600/5',
    iconColor: 'text-emerald-400',
    borderColor: 'hover:border-emerald-500/50',
    filter: 'webdev',
  },
] as const

export function TracksSection() {
  const { language } = useAppStore()
  const t = translations[language]
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title={t.tracks.title} 
          subtitle={t.tracks.subtitle} 
        />

        <div className="grid gap-6 md:grid-cols-3">
          {tracks.map((track, index) => (
            <motion.div
              key={track.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`group relative overflow-hidden border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 ${track.borderColor} teal-glow-hover`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${track.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              
              <div className="relative">
                {/* Icon */}
                <div className={`mb-6 flex h-16 w-16 items-center justify-center bg-secondary/50 ${track.iconColor}`}>
                  <track.icon className="h-8 w-8" />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold">
                  {t.tracks[track.key].title}
                </h3>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {t.tracks[track.key].description}
                </p>

                {/* Link */}
                <Link href={`/courses?category=${track.filter}`}>
                  <Button 
                    variant="ghost" 
                    className="group/btn -ms-4 gap-2 text-primary hover:bg-primary/10 hover:text-primary"
                  >
                    {t.tracks.viewCourses}
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover/btn:-translate-x-1 rtl:group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
