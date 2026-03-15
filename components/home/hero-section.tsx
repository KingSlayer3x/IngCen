'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAppStore } from '@/store/app-store'
import { translations } from '@/lib/translations'

export function HeroSection() {
  const { language } = useAppStore()
  const t = translations[language]
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight

  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-pattern" />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />

      {/* Animated Accent Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute end-1/4 top-1/4 h-96 w-96 bg-primary/20 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 3, delay: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-1/4 start-1/4 h-72 w-72 bg-primary/15 blur-3xl"
      />

      {/* Content */}
      <div className="container relative mx-auto flex min-h-[calc(100vh-4rem)] items-center px-4">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 border border-primary/30 bg-primary/10 px-4 py-1.5">
              <span className="h-2 w-2 animate-pulse bg-primary" />
              <span className="text-sm font-medium text-primary">
                {language === 'ar' ? 'التسجيل مفتوح للدورات الجديدة' : 'Enrollment open for new courses'}
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-balance text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            {t.hero.title}{' '}
            <span className="relative inline-block text-primary">
              {t.hero.highlight}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-2 start-0 h-1 w-full origin-start bg-primary"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href="/courses">
              <Button size="lg" className="group h-12 gap-2 bg-primary px-8 text-primary-foreground hover:bg-primary/90">
                {t.hero.browseCourses}
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1 rtl:group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="lg" variant="outline" className="h-12 px-8 border-primary/50 hover:bg-primary/10">
                {t.hero.signUp}
              </Button>
            </Link>
          </motion.div>

          {/* Tech Stack Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-50"
          >
            {['Revit', 'ETABS', 'AutoCAD', '3ds Max', 'React', 'Next.js'].map((tech) => (
              <span key={tech} className="font-mono text-sm tracking-wider text-muted-foreground">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-8 w-5 border-2 border-muted-foreground/30"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mx-auto mt-1 h-2 w-1 bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
