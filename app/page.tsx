import { HeroSection } from '@/components/home/hero-section'
import { StatsSection } from '@/components/home/stats-section'
import { TracksSection } from '@/components/home/tracks-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { CTASection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <TracksSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
