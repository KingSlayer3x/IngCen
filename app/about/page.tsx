import type { Metadata } from 'next'
import { AboutContent } from './about-content'

export const metadata: Metadata = {
  title: 'من نحن | About Us',
  description: 'تعرف على قصة Ingenium ورؤيتنا لتطوير الكوادر المهنية في سوريا',
}

export default function AboutPage() {
  return <AboutContent />
}
