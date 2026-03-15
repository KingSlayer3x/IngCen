'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAppStore } from '@/store/app-store'
import { translations } from '@/lib/translations'

export function CTASection() {
  const { language } = useAppStore()
  const t = translations[language]
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Gradient Accents */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-balance text-3xl font-bold md:text-4xl">
            {language === 'ar' 
              ? 'هل أنت مستعد لبدء رحلتك المهنية؟'
              : 'Ready to Start Your Professional Journey?'}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {language === 'ar'
              ? 'انضم إلى آلاف الطلاب الذين بنوا مستقبلهم مع Ingenium'
              : 'Join thousands of students who built their future with Ingenium'}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/courses">
              <Button size="lg" className="group h-12 gap-2 bg-primary px-8 text-primary-foreground hover:bg-primary/90">
                {t.hero.browseCourses}
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1 rtl:group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="h-12 px-8 border-primary/50 hover:bg-primary/10">
                {t.nav.contact}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
