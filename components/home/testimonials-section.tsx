'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { SectionHeader } from '@/components/section-header'
import { useAppStore } from '@/store/app-store'
import { translations } from '@/lib/translations'
import { testimonials } from '@/lib/data'

export function TestimonialsSection() {
  const { language } = useAppStore()
  const t = translations[language]

  return (
    <section className="bg-secondary/30 py-24">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title={t.testimonials.title} 
          subtitle={t.testimonials.subtitle} 
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full border-border/50 bg-card transition-all duration-300 hover:border-primary/50">
                <CardContent className="relative flex h-full flex-col p-6">
                  {/* Quote Icon */}
                  <Quote className="absolute end-4 top-4 h-8 w-8 text-primary/20" />

                  {/* Stars */}
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                    "{testimonial.content[language]}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 border-t border-border pt-4">
                    <Avatar className="h-10 w-10 border-2 border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {testimonial.name[language].charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-semibold">{testimonial.name[language]}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role[language]}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
