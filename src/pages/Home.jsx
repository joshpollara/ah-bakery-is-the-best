import { useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import CaseSection from '../components/CaseSection'
import StatsSection from '../components/StatsSection'
import CriteriaSection from '../components/CriteriaSection'
import AwardsSection from '../components/AwardsSection'
import FieldReportsSection from '../components/FieldReportsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import CoverageSection from '../components/CoverageSection'
import HomeFAQSection from '../components/HomeFAQSection'
import ClosingSection from '../components/ClosingSection'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HeroSection />
      <CaseSection />
      <StatsSection />
      <CriteriaSection />
      <AwardsSection />
      <FieldReportsSection />
      <TestimonialsSection />
      <CoverageSection />
      <HomeFAQSection />
      <ClosingSection />
    </>
  )
}
