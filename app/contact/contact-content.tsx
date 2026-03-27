'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, Loader2, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeader } from '@/components/section-header'
import { useAppStore } from '@/store/app-store'
import { translations } from '@/lib/translations'

export function ContactContent() {
  const { language } = useAppStore()
  const t = translations[language]
  const locationDisplay =
    language === 'ar'
      ? 'طرطوس - دريكيش - جانب مديرية المنطقة'
      : 'Tartous - Duraykish - near District Directorate'
  const locationArea = language === 'ar' ? 'دريكيش، طرطوس' : 'Duraykish, Tartous'
  const locationQuery =
    language === 'ar'
      ? 'طرطوس دريكيش جانب مديرية المنطقة سوريا'
      : 'Tartous Duraykish near District Directorate Syria'
  const encodedLocationQuery = encodeURIComponent(locationQuery)
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodedLocationQuery}&z=16&output=embed`
  const mapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedLocationQuery}`

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
    setIsSuccess(true)
    setFormData({ name: '', email: '', message: '' })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: t.contact.info.phone,
      value: '+963 987-562-678',
      dir: 'ltr' as const,
    },
    {
      icon: Mail,
      title: t.contact.info.email,
      value: 'info@ingenium.sy',
      dir: 'ltr' as const,
    },
    {
      icon: MapPin,
      title: t.contact.info.address,
      value: locationDisplay,
      dir: undefined,
    },
    {
      icon: Clock,
      title: t.contact.info.hours,
      value: t.contact.info.hoursValue,
      dir: undefined,
    },
  ]

  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeader title={t.contact.title} subtitle={t.contact.subtitle} />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-border/50">
              <CardContent className="p-6">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-8 text-center"
                  >
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center bg-primary/10 text-primary">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold">{t.contact.form.success}</h3>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t.contact.form.name}</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">{t.contact.form.email}</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t.contact.form.message}</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          {t.contact.form.sending}
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          {t.contact.form.send}
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Info Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border-border/50 transition-all hover:border-primary/50">
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary/10 text-primary">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground" dir={item.dir}>
                        {item.value}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">
                  {language === 'ar' ? 'تواصل معنا عبر واتساب' : 'Contact us via WhatsApp'}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {language === 'ar'
                    ? 'للحصول على رد سريع، تواصل معنا مباشرة عبر واتساب'
                    : 'For a quick response, contact us directly via WhatsApp'}
                </p>
                <a
                  href="https://wa.me/963111234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {t.contact.info.whatsapp}
                </a>
              </CardContent>
            </Card>

            {/* Location Map */}
            <Card className="overflow-hidden border-border/50">
              <CardContent className="p-0">
                <div className="relative h-72 overflow-hidden bg-secondary">
                  <iframe
                    title={language === 'ar' ? 'خريطة موقع المركز' : 'Center location map'}
                    src={mapEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full border-0"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/75 to-transparent p-4">
                    <div className="pointer-events-auto flex items-end justify-between gap-3">
                      <div>
                        <p className="font-semibold">{locationArea}</p>
                        <p className="text-sm text-muted-foreground">
                          {language === 'ar' ? 'موقع المركز على الخريطة' : 'Center location on the map'}
                        </p>
                      </div>
                      <a
                        href={mapDirectionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-primary/30 bg-background/90 px-3 py-2 text-sm font-medium text-primary backdrop-blur transition-colors hover:bg-primary/10"
                      >
                        <MapPin className="h-4 w-4" />
                        {language === 'ar' ? 'فتح بالخريطة' : 'Open Map'}
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
