import BlurText from '@/components/magicui/blurtext'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function illumina() {
  return (
    <div className='bg-[#000514] w-full text-[#D1DAE0]'>
      <div className='container'>

        {/* Title & Description */}
        <div className='p-5 md:py-32 py-16  max-w-6xl mx-auto'>
          <BlurText text='Illumina Technologies' className='font-roco text-3xl md:text-5xl'  delay={150} animateBy="words" direction="top"/>
          <p className='text-xl mt-3'>Illumina Technologies provides comprehensive digital solutions designed to enhance operational efficiency and support businesses in navigating the evolving Microsoft ecosystem. Their services include digital transformation, cloud integration, end-to-end implementation, and quality engineering. By focusing on tailored support and effective system updates, Illumina empowers organizations to achieve their strategic goals while fostering innovation. The modern redesign of their website reflects their commitment to delivering cutting-edge solutions and exceptional customer service.</p>
        </div>

        {/* Image after title */}
        <div className="w-full h-[200px] md:h-[600px] relative overflow-hidden rounded-2xl">
          <Image src="/assets/projects/il_3.svg" alt="Folionomics" fill className="object-cover" />
        </div>

        {/* Sidebar div */}
        <div className="md:p-10 p-2 md:max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-2">

            {/* Left Sidebar */}
            <div className="min-w-[250px] md:space-y-6 space-y-2">
              <div>
                <p className="text-white text-lg">Headquarters</p>
                <p>Portland, USA</p>
              </div>
              <div>
                <p className="text-white text-lg">Founded</p>
                <p>2010</p>
              </div>
              <div>
                <p className="text-white text-lg">Industry</p>
                <p>Technology</p>
              </div>
              <div>
                <p className="text-white text-lg">Company size</p>
                <p>1000-2000+ People</p>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-10 max-md:mt-10">
              <div>
                <h2 className="text-2xl md:text-4xl font-semibold mb-2">Challenge</h2>
                <p className="text-lg">
                  During the redesign of Illumina Technologies' website, several challenges emerged. One significant challenge was balancing a modern aesthetic with a professional tone to effectively appeal to their corporate audience. Optimizing user experience was crucial, ensuring intuitive navigation while presenting complex information clearly. Additionally, maintaining brand consistency throughout the redesign while integrating new features posed difficulties. Ensuring mobile responsiveness across devices was also essential for user accessibility. Addressing these challenges was vital to creating a successful, modern platform that reflects the company’s innovative spirit.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2 md:text-4xl">Results</h2>
                <p className="text-lg ">
                  The redesign of Illumina Technologies' website resulted in a modern, user-friendly platform that effectively highlights their digital solutions. The new design strikes a balance between contemporary aesthetics and professionalism, enhancing brand consistency. Users experience improved navigation and clearer access to complex information, while mobile responsiveness ensures seamless functionality across devices. This transformation reflects Illumina's commitment to delivering innovative technology solutions and empowers organizations to engage with their services more effectively.
                </p>
              </div>
            </div>

          </div>
        </div>

          {/* comparison */}
        <div className='flex flex-col md:flex-row gap-6 my-16 max-w-[80rem]'>
         <div className="md:w-[50%]">
            <img src="/assets/projects/il_1.svg" alt="Folionomics" className='w-full rounded-xl'/>
          </div>
         <div className="md:w-[50%]">
            <img src="/assets/projects/il_4.svg" alt="Folionomics" className='w-full rounded-xl'/>
          </div>
        </div>

       
        {/* Process */}
        <div className=' flex flex-col gap-4 font-light text-xl max-w-6xl mx-auto'>
           <h2 className="text-2xl md:text-4xl font-semibold mb-2">Process</h2>
           <p> <span className='font-bold'>Information Architecture:</span> I restructured the app's navigation to enhance user experience, prioritizing features like profile creation and rewards tracking.</p>
           <p> <span className='font-bold'>Wireframing & Prototyping:</span> Low-fidelity wireframes were developed and refined through feedback, leading to a high-fidelity prototype for usability testing.</p>
           <p> <span className='font-bold'>Usability Testing:</span> Diverse user tests validated the design, leading to improvements in reward visibility.</p>
           <p> <span className='font-bold'>Visual Design & Style Guide:</span>A modern visual design was created, accompanied by a style guide for consistency in future updates.</p>
        </div>


        {/* Stack */}
        <div className='flex flex-col justify-center my-20 max-w-6xl mx-auto'>
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">Stack</h2>
         <div className='flex flex-row justify-between items-center  bg-[#252523] px-8 py-5 rounded-xl md:min-w-[900px]'>
          <img src="/assets/projects/stack1.avif" alt="stack" className='w-[50px] h-[50px]'/>
          <img src="/assets/projects/stack2.avif" alt="stack" className='w-[30px] h-[50px]'/>
          <img src="/assets/projects/stack3.png" alt="stack" className='w-[60px] h-[50px]'/>
          <img src="/assets/projects/stack4.png" alt="stack" className='w-[50px] h-[50px]'/>
          <img src="/assets/projects/stack5.webp" alt="stack" className='w-[50px] h-[50px]'/>
        </div>
        </div>


         {/* Image */}
         <div className="w-full h-[200px] md:h-[600px] relative overflow-hidden rounded-2xl">
          <Image src="/assets/projects/il_1.svg" alt="Folionomics" fill className="object-cover" />
        </div>

     
        {/* Conclusion */}
        <div className='py-20 max-w-6xl mx-auto'>
          <h2 className='text-3xl md:text-5xl mb-4'>Conclusion</h2>
          <p className='text-xl'>In conclusion, the comprehensive redesign of Illumina Technologies' website has resulted in a modern and user-centric platform. Through diligent research, effective information architecture, and iterative prototyping, I created an intuitive experience that highlights their digital solutions. The successful usability testing led to valuable enhancements, while the cohesive visual design reinforces brand identity. Overall, this transformation reflects a commitment to innovation and positions Illumina as a leader in digital technology solutions, empowering users to engage effectively with their services.</p>
        </div>

       </div>
    </div>
  )
}

export default illumina