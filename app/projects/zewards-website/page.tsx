import BlurText from '@/components/magicui/blurtext'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function zewards() {
  return (
    <div className='bg-[#14051b] w-full text-[#D1DAE0]'>
      <div className='container'>

        {/* Title & Description */}
        <div className='p-5 md:py-32 py-16  max-w-6xl mx-auto'>
          <BlurText text='Zewards' className='font-roco text-3xl md:text-5xl' delay={150} animateBy="words" direction="top" />
          <p className='text-2xl font-black mt-3'>Revolutionizing Engagement with Reward-Based Interactions</p>
          <p className='text-xl mt-3'>Zewards is a platform designed to enhance user engagement through a dynamic rewards system. By integrating gamification elements with seamless user experiences, Zewards empowers businesses to drive customer loyalty, increase participation, and incentivize key actions effortlessly.</p>
        </div>

        {/* Image after title */}
        <div className="w-full h-[200px] md:h-[600px] relative overflow-hidden rounded-2xl">
          <Image src="/assets/projects/zw_1.svg" alt="Folionomics" fill className="object-cover" />
        </div>

        {/* Sidebar div */}
        <div className="md:p-10 p-2 md:max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-2">

            {/* Left Sidebar */}
            <div className="min-w-[250px] md:space-y-6 space-y-2">
              <div>
                <p className="text-white text-lg">Headquarters</p>
                <p>Houston, Texas, USA</p>
              </div>
              <div>
                <p className="text-white text-lg">Founded</p>
                <p>2023</p>
              </div>
              <div>
                <p className="text-white text-lg">Industry</p>
                <p>Technology</p>
              </div>
              <div>
                <p className="text-white text-lg">Company size</p>
                <p>10-15+ People</p>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-10 max-md:mt-10">
              <div>
                <h2 className="text-2xl md:text-4xl font-semibold mb-2">Challenge</h2>
                <p className="text-lg">
                  Traditional reward programs often lack flexibility, engagement, and personalization. Businesses struggle to keep users motivated, and customers find generic loyalty systems uninspiring. The challenge was to design an intuitive and scalable platform that makes earning and redeeming rewards both effortless and engaging.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2 md:text-4xl">My Role</h2>
                <div className="text-lg ">
                  As the <span className='font-bold'>Lead Product Designer</span>, I was responsible for:
                  <ul className='list-disc list-inside'>
                    <li>Crafting a seamless, visually appealing user experience</li>
                    <li>Defining the platform’s UX strategy and gamification flow</li>
                    <li>Designing high-fidelity UI components and interactions</li>
                    <li>Collaborating with developers to ensure smooth implementation</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* image */}
        <div className="w-full h-[200px] md:h-[600px] my-16 relative overflow-hidden rounded-2xl">
          <Image src="/assets/projects/zw_2.svg" alt="Folionomics" fill className="object-cover" />
        </div>

        {/* Research & Insight */}
        <div className='max-w-4xl mx-auto my-16'>
          <div className='my-12'>
            <h2 className='text-2xl md:text-4xl mb-4 font-semibold'>1. Research & Insights</h2>
            <p className='text-xl mt-3 font-normal'>I conducted market research on existing loyalty and rewards platforms to identify pain points and opportunities. Insights gathered helped shape the core experience of Zewards.</p>
          </div>

          <div className='my-16'>
            <h2 className='text-2xl md:text-4xl mb-4 font-semibold'>2. UX Strategy & Wireframing</h2>
            <ul className='list-disc list-inside text-xl mt-3 font-normal'>
              <li>Developed a <span className='font-semibold'>modern, clean interface</span> aligned with industry trends</li>
              <li>Focused on intuitive navigation and gamified engagement loops</li>
              <li>Designed user flows that prioritize ease of use</li>
            </ul>
          </div>


           <div className='my-16'>
            <h2 className='text-2xl md:text-4xl mb-4 font-semibold'>3. UI Design & Prototyping</h2>
            <ul className='list-disc list-inside text-xl mt-3 font-normal'>
              <li>Developed a modern, clean interface aligned with industry trends</li>
              <li>Implemented Linear-style design principles for clarity and usability</li>
              <li>Built interactive prototypes for usability testing and feedback</li>
            </ul>
          </div>
        </div>




        {/* Image */}
        <div className="w-full h-[200px] md:h-[600px] relative overflow-hidden rounded-2xl">
          <Image src="/assets/projects/zw_3.svg" alt="Folionomics" fill className="object-cover" />
        </div>



         {/* Research & Insight */}
        <div className='max-w-4xl mx-auto my-16'>
        
          <div className='my-16'>
            <h2 className='text-2xl md:text-4xl mb-4 font-semibold'>4. Development Handoff</h2>
            <ul className='list-disc list-inside text-xl mt-3 font-normal'>
              <li>Provided detailed design specs and components in Figma</li>
              <li>Worked closely with developers to ensure pixel-perfect execution</li>
              <li>Iterated based on feedback to refine the final product</li>
            </ul>
          </div>


           <div className='my-16'>
            <h2 className='text-2xl md:text-4xl mb-4 font-semibold'>Impact & Results</h2>
            <ul className='list-disc list-inside text-xl mt-3 font-normal'>
              <li><span className='font-semibold'>Enhanced user engagement </span>through intuitive gamification</li>
              <li><span className='font-semibold'>Increased retention</span> by offering personalized reward systems</li>
              <li><span className='font-semibold'>Optimized the redemption process</span>, making it faster and more rewarding for users</li>
            </ul>
          </div>
        </div>




        {/* Conclusion */}
        <div className='py-20 max-w-6xl mx-auto'>
          <h2 className='text-3xl md:text-5xl mb-4'>Conclusion</h2>
          <p className='text-xl'>Zewards is more than just a rewards platform—it’s a seamless, gamified experience that enhances engagement and drives user retention. By combining intuitive design, strategic gamification, and a frictionless rewards system, Zewards empowers businesses to build stronger relationships with their users. As the platform continues to evolve, the focus remains on innovation, personalization, and expanding its impact. This project reinforced my expertise in designing engaging digital experiences, and I’m excited to see how Zewards grows in the future.</p>
        </div>

      </div>
    </div>
  )
}

export default zewards