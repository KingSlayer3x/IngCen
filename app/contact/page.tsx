import type { Metadata } from 'next'
import { ContactContent } from './contact-content'

export const metadata: Metadata = {
  title: 'اتصل بنا | Contact Us',
  description: 'تواصل مع فريق Ingenium للاستفسارات والتسجيل في الدورات',
}

export default function ContactPage() {
  return <ContactContent />
}
