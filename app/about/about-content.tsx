'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Heart, MapPin, Users } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { SectionHeader } from '@/components/section-header'
import { useAppStore } from '@/store/app-store'
import { translations } from '@/lib/translations'
import { teamMembers, stats } from '@/lib/data'

export function AboutContent() {
  const { language } = useAppStore()
  const t = translations[language]

  const values = [
    {
      icon: Heart,
      title: t.about.story.title,
      content: t.about.story.content,
    },
    {
      icon: Target,
      title: t.about.mission.title,
      content: t.about.mission.content,
    },
    {
      icon: Eye,
      title: t.about.vision.title,
      content: t.about.vision.content,
    },
  ]

  return (
    <div className="py-24">
      {/* Hero */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-balance text-4xl font-bold md:text-5xl">
            {t.about.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.about.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Stats Banner */}
      <section className="mt-16 border-y border-border bg-card/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: stats.students, label: t.stats.students },
              { value: stats.courses, label: t.stats.courses },
              { value: stats.instructors, label: t.stats.instructors },
              { value: stats.years, label: t.stats.years, suffix: '+' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary">
                  {stat.value.toLocaleString(language === 'ar' ? 'ar-SY' : 'en-US')}
                  {stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story, Mission, Vision */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid gap-8 md:grid-cols-3">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="h-full border-border/50 transition-all hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center bg-primary/10 text-primary">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{item.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-secondary/30 py-24">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title={t.about.team.title} 
            subtitle={t.about.team.subtitle} 
          />

          <div className="grid gap-8 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="h-full border-border/50 text-center transition-all hover:border-primary/50">
                  <CardContent className="p-6">
                    <Avatar className="mx-auto mb-4 h-24 w-24 border-4 border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-2xl text-primary">
                        {member.name[language].charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-semibold">{member.name[language]}</h3>
                    <p className="text-sm text-primary">{member.role[language]}</p>
                    <p className="mt-3 text-sm text-muted-foreground">{member.bio[language]}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="container mx-auto px-4 py-24">
        <SectionHeader 
          title={t.about.location.title} 
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden border-border/50">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                {/* Map Placeholder */}
                <div className="relative flex h-64 items-center justify-center bg-secondary md:h-auto">
                  <div className="absolute inset-0 grid-pattern opacity-50" />
                  <div className="relative text-center">
                    <MapPin className="mx-auto h-16 w-16 text-primary" />
                    <p className="mt-4 text-lg font-semibold">{t.about.location.address}</p>
                  </div>
                </div>

                {/* Info */}
                <div className="p-8">
                  <h3 className="mb-4 text-xl font-bold">{t.about.location.address}</h3>
                  <p className="mb-6 text-muted-foreground">{t.about.location.addressDetail}</p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center bg-primary/10 text-primary">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <span className="text-muted-foreground">{t.about.location.addressDetail}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center bg-primary/10 text-primary">
                        <Users className="h-5 w-5" />
                      </div>
                      <span className="text-muted-foreground">
                        {language === 'ar' 
                          ? `خدمنا أكثر من ${stats.students.toLocaleString('ar-SY')} طالب`
                          : `Served over ${stats.students.toLocaleString('en-US')} students`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  )
}
