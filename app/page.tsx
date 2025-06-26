import CaseStudies from '@/components/CaseStudies'
import ExperienceSection from '@/components/Experience'
import Hero from '@/components/Hero'
import PhotographySection from '@/components/Photography'
import Productdesigner from '@/components/Productdesigner'
import Skills from '@/components/Skills'
import { SlidingLogos } from '@/components/SlidingLogos'
import React from 'react'

function page() {
  return (
    <div className='overflow-visible'>
      <Hero/>
      <SlidingLogos/>
      <CaseStudies/>
      <Productdesigner/>
      <Skills/>
      <ExperienceSection/>
      <PhotographySection/>
      
    </div>
  )
}

export default page