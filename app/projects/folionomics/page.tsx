import BlurText from '@/components/magicui/blurtext'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function folionnomics() {
  return (
    <div className='bg-[#000A04] w-full text-[#D1DAE0] '>
      <div className='container'>

        {/* Title & Description */}
        <div className='p-5 md:py-32 py-16 max-w-6xl mx-auto'>
          <BlurText text='FolioNomics' className='font-roco text-3xl md:text-5xl'  delay={150} animateBy="words" direction="top"/>
          <p className='text-xl mt-3'>Crypto investors of all experience levels, with a focus on those who manage holdings across multiple blockchains.</p>
        </div>

        {/* Image after title */}
        <div className="w-full h-[200px] md:h-[600px] relative overflow-hidden rounded-2xl">
          <Image src="/assets/projects/fn_1.svg" alt="Folionomics" fill className="object-cover" />
        </div>

        {/* Sidebar div */}
        <div className="md:p-10 p-2 md:max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-2">

            {/* Left Sidebar */}
            <div className="min-w-[250px] md:space-y-6 space-y-2">
              <div>
                <p className="text-white text-lg">Headquarters</p>
                <p>Ottawa, Ontario, Canada</p>
              </div>
              <div>
                <p className="text-white text-lg">Founded</p>
                <p>2006</p>
              </div>
              <div>
                <p className="text-white text-lg">Industry</p>
                <p>Finance</p>
              </div>
              <div>
                <p className="text-white text-lg">Revenue</p>
                <p>Startup</p>
              </div>
              <div>
                <p className="text-white text-lg">Company size</p>
                <p>10–20 People</p>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-10 max-md:mt-10">
              <div>
                <h2 className="text-2xl md:text-4xl font-semibold mb-2">Challenge</h2>
                <p className="text-lg">
                  Current wallet aggregators primarily show wallet-based information, which is not portfolio-centric or asset-centric. Users managing their portfolios typically create buckets with different risk profiles that need to be tracked independently. Existing solutions do not offer this level of granularity and customization.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2 md:text-4xl">Results</h2>
                <p className="text-lg ">
                  Providing a platform where users can create and manage virtual portfolios allows for better compartmentalization and risk management. This feature enables users to group assets into portfolios, track changes over time, and gain deeper insights into their investment strategies.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* comparison */}
        <div className='flex flex-col md:flex-row gap-6 my-16 max-w-[80rem]'>
         <div className="md:w-[50%]">
            <img src="/assets/projects/fn_2.svg" alt="Folionomics" className='w-full rounded-xl'/>
          </div>
         <div className="md:w-[50%]">
            <img src="/assets/projects/fn_3.avif" alt="Folionomics" className='w-full rounded-xl'/>
          </div>
        </div>


        {/* Process */}
        <div className=' flex flex-col gap-4 max-w-6xl mx-auto font-light text-xl'>
           <h2 className="text-2xl md:text-4xl font-semibold mb-2">Process</h2>
           <p><span className='font-bold'>Research & Analysis:</span> I conducted user interviews and surveys with crypto investors across different experience levels. In addition, I analyzed user behavior data from the app, focusing on portfolio management patterns across multiple blockchains. I also studied competitor platforms and emerging trends in the decentralized finance (DeFi) space to gather insights.</p>
           <p> <span className='font-bold'>Information Architecture:</span> Based on my research findings, I restructured the app’s navigation and content to streamline multi-blockchain portfolio management. I prioritized key features like wallet integration, cross-chain asset tracking, and transaction history, all aligned with the specific needs of crypto investors.</p>
           <p> <span className='font-bold'>Wireframing & Prototyping:</span>Wireframing & Prototyping: I designed low-fidelity wireframes to visualize the new interface, focusing on simplifying complex portfolio data. These wireframes were iteratively refined with user feedback from both novice and experienced crypto investors. I then developed a high-fidelity, interactive prototype for usability testing.</p>
           <p> <span className='font-bold'>Usability Testing:</span> I conducted usability tests with a diverse group of crypto investors, including those managing portfolios across multiple blockchains. The testing helped us validate the design's effectiveness and ease of use, leading to targeted improvements in features like transaction summaries and real-time price updates.</p>
           <p> <span className='font-bold'>Visual Design & Style Guide:</span> I developed a modern visual design that reflects the fast-evolving nature of the crypto world. This included a dark mode interface, intuitive iconography, and clear data visualizations. A comprehensive style guide was created to ensure visual consistency, even as new features are added to support emerging blockchain technologies.</p>
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
          <Image src="/assets/projects/fn_4.svg" alt="Folionomics" fill className="object-cover" />
        </div>

        {/* Content */}
        <p className='text-xl md:text-2xl my-20 max-w-5xl text-center mx-auto'>New and redesigned with all the major improvements related to UI and User Experience, Worked on Narrowing down the steps for a user to create a wallet, portfolio and account. </p>


        {/* comparison */}
        <div className='flex flex-col md:flex-row gap-6 my-16 max-w-[80rem]'>
         <div className="md:w-[50%]">
            <img src="/assets/projects/fn_2.svg" alt="Folionomics" className='w-full rounded-xl'/>
          </div>
         <div className="md:w-[50%]">
            <img src="/assets/projects/fn_3.avif" alt="Folionomics" className='w-full rounded-xl'/>
          </div>
        </div>

        {/* Userflow */}
        <div className='bg-[#232423] flex flex-col justify-center items-center p-10 rounded-2xl my-14'>
          <h3 className='text-3xl md:text-5xl text-white font-bold'>Checkout the Userflow for this project</h3>
          
          <Button className='bg-white rounded-full mt-10' size={'lg'}>
            View User Flow
          </Button>
        </div>


        {/* Conclusion */}
        <div className='py-20 max-w-6xl mx-auto'>
          <h2 className='text-3xl md:text-5xl mb-4'>Conclusion</h2>
          <p className='text-xl'>By focusing on the needs of crypto investors managing portfolios across multiple blockchains, I was able to design a platform that simplifies this often complex process. Through in-depth research, including user interviews and competitor analysis, I gained a clear understanding of pain points and opportunities in this space. By iterating on wireframes and prototypes, and conducting usability tests with a diverse user base, I ensured the design was intuitive and user-centric. The final product not only addresses key challenges but is also scalable for future growth. I’m proud of the cohesive visual design and style guide, which will ensure consistency as the platform evolves alongside the fast-moving crypto industry.</p>
        </div>

       </div>
    </div>
  )
}

export default folionnomics