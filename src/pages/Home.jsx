import { useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import CaseSection from '../components/CaseSection'
import StatsSection from '../components/StatsSection'
import AwardsSection from '../components/AwardsSection'
import FieldReportsSection from '../components/FieldReportsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import CoverageSection from '../components/CoverageSection'
import HomeFAQSection from '../components/HomeFAQSection'
import ClosingSection from '../components/ClosingSection'
import AmsterdamSkyline from '../components/illustrations/AmsterdamSkyline'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HeroSection />
      <CaseSection />
      <StatsSection />
      <AwardsSection />
      <FieldReportsSection />
      <div className="bg-cream py-4 flex justify-center overflow-hidden">
        <AmsterdamSkyline className="w-full max-w-4xl opacity-15" />
      </div>
      <TestimonialsSection />
      <CoverageSection />
      <HomeFAQSection />
      <ClosingSection />
    </>
  )
}
