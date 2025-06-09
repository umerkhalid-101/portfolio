import React from 'react'
import { ShinyButton } from './magicui/shiny-button'
import { NeonGradientCard } from './magicui/neon-gradient-card'

function Productdesigner() {
  return (
    <div className='container min-h-[400px] flex justify-center items-center'>
      <div className='text-lg md:text-2xl font-light max-w-[700px] text-center leading-tight]'>
        Product designer expert in
        
        
        <ShinyButton className=' mx-2 bg-black py-2 px-6 rounded-full border-2 border-[#5b5d61]'>Figma</ShinyButton>
        with over
        <ShinyButton className='mx-2 bg-black py-2 px-6 rounded-full border-2 border-[#5b5d61]'>6 Years</ShinyButton>
        of industry experience.
        Experties in creating

        <ShinyButton className='mx-2 bg-black py-2 px-6 rounded-full border-2 border-[#5b5d61]'>Clean, Modern & Functional</ShinyButton>
        designs enabling to create
        both aesthetically pleasing and easily implementable solutions.
        Currently works as
        <ShinyButton className='mx-2 bg-black py-2 px-6 rounded-full border-2 border-[#5b5d61]'>Product Designer</ShinyButton>
        at GammaLabs
      </div>
    </div>

  )
}

export default Productdesigner