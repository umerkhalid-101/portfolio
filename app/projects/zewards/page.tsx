import BlurText from '@/components/magicui/blurtext'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function zewards() {
  return (
    <div className='bg-[#0C0012] w-full text-[#D1DAE0]'>
      <div className='container'>

        {/* Title & Description */}
        <div className='p-5 md:py-32 py-16  max-w-6xl mx-auto'>
          <BlurText text='Zewards' className='font-roco text-3xl md:text-5xl'  delay={150} animateBy="words" direction="top"/>
          <p className='text-xl mt-3'>Zewards is a cashback platform that allows users to earn rewards by shopping with partnered retailers. Shoppers can redeem rewards in the form of cryptocurrency, gift cards, or other incentives. By bridging the shopping experience with a rewards system, Zewards creates a unique value proposition for customers looking to save money or gain perks through everyday purchases. The platform supports multiple retailers, offering a variety of options for users to maximize their rewards.</p>
        </div>

        {/* Image after title */}
        <div className="w-full h-[200px] md:h-[600px] relative overflow-hidden rounded-2xl">
          <Image src="/assets/projects/z_1.svg" alt="Folionomics" fill className="object-cover" />
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
                <p>Food</p>
              </div>
              <div>
                <p className="text-white text-lg">Revenue</p>
                <p>Startup</p>
              </div>
              <div>
                <p className="text-white text-lg">Company size</p>
                <p>10-20 People</p>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-10 max-md:mt-10">
              <div>
                <h2 className="text-2xl md:text-4xl font-semibold mb-2">Challenge</h2>
                <p className="text-lg">
                  The challenge that led to creating Zewards was the lack of user-friendly cashback programs that effectively engage shoppers. Many existing programs did not provide a seamless experience or flexibility in redeeming rewards. Zewards addresses these issues by offering a straightforward platform where users can earn cashback rewards on their purchases from various retailers, making shopping more rewarding and enjoyable.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2 md:text-4xl">Results</h2>
                <p className="text-lg ">
                  I successfully designed two mobile applications: Zewards and Zewards Business. The Zewards Business app enables businesses to manage their promotions by setting up QR codes, generating offers, and launching campaigns. Meanwhile, the Zewards customer app allows users to create profiles, earn Zewards (rewards), and save them for later redemption. This dual approach enhances user engagement while providing businesses with a robust platform to drive customer loyalty and increase sales.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* comparison */}
        <div className='flex flex-col md:flex-row gap-6 my-16 max-w-[80rem]'>
         <div className="md:w-[50%]">
            <img src="/assets/projects/z_2.avif" alt="Folionomics" className='w-full rounded-xl'/>
          </div>
         <div className="md:w-[50%]">
            <img src="/assets/projects/z_3.avif" alt="Folionomics" className='w-full rounded-xl'/>
          </div>
        </div>


        {/* Process */}
        <div className=' flex flex-col gap-4 font-light text-xl max-w-6xl mx-auto'>
           <h2 className="text-2xl md:text-4xl font-semibold mb-2">Process</h2>
           <p><span className='font-bold'>Research & Analysis:</span> I conducted user interviews and surveys with shoppers to understand their experiences with existing cashback programs. Analyzing user behavior data, I focused on preferences for earning and redeeming rewards. I also examined competitor platforms and trends in consumer loyalty to gather insights.</p>
           <p> <span className='font-bold'>Information Architecture:</span>Based on the research findings, I restructured the app’s navigation to enhance user experience, prioritizing features like profile creation, rewards tracking, and redemption processes tailored to customer needs.</p>
           <p> <span className='font-bold'>Wireframing & Prototyping:</span> I designed low-fidelity wireframes to visualize the user interface, simplifying the process of earning and managing rewards. These were refined through user feedback before developing a high-fidelity, interactive prototype for usability testing.</p>
           <p> <span className='font-bold'>Usability Testing:</span>Usability tests with diverse users validated the design’s effectiveness and ease of use, leading to improvements in reward visibility and redemption features.</p>
           <p> <span className='font-bold'>Visual Design & Style Guide:</span>I developed a modern visual design reflecting the app’s user-friendly nature, including a clean interface and intuitive iconography. A comprehensive style guide ensures consistency in future updates and new feature integrations.</p>
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
          <Image src="/assets/projects/z_4.avif" alt="Folionomics" fill className="object-cover" />
        </div>

        {/* Content */}
        <p className='text-xl md:text-2xl my-20 max-w-5xl text-center mx-auto'>The Zewards customer app has been created from scratch, featuring a comprehensive redesign that enhances both UI and user experience. The design simplifies the account setup process, making it easier for users to create their wallets and manage their rewards. This user-focused approach ensures seamless engagement with the app, allowing customers to maximize their rewards effortlessly.</p>


        {/* comparison */}
        <div className='flex flex-col md:flex-row gap-6 my-16 max-w-[80rem]'>
         <div className="md:w-[50%]">
            <img src="/assets/projects/z_5.avif" alt="Folionomics" className='w-full rounded-xl'/>
          </div>
         <div className="md:w-[50%]">
            <img src="/assets/projects/z_6.avif" alt="Folionomics" className='w-full rounded-xl'/>
          </div>
        </div>

        {/* Userflow */}
        {/* <div className='bg-[#232423] flex flex-col justify-center items-center p-10 rounded-2xl my-14'>
          <h3 className='text-3xl md:text-5xl text-white font-bold'>Checkout the Userflow for this project</h3>
          
          <Button className='bg-white rounded-full mt-10' size={'lg'}>
            View User Flow
          </Button>
        </div> */}


        {/* Conclusion */}
        <div className='py-20 max-w-6xl mx-auto'>
          <h2 className='text-3xl md:text-5xl mb-4'>Conclusion</h2>
          <p className='text-xl'>By focusing on the needs of crypto investors managing portfolios across multiple blockchains, I was able to design a platform that simplifies this often complex process. Through in-depth research, including user interviews and competitor analysis, I gained a clear understanding of pain points and opportunities in this space. By iterating on wireframes and prototypes, and conducting usability tests with a diverse user base, I ensured the design was intuitive and user-centric. The final product not only addresses key challenges but is also scalable for future growth. I’m proud of the cohesive visual design and style guide, which will ensure consistency as the platform evolves alongside the fast-moving crypto industry.</p>
        </div>

       </div>
    </div>
  )
}

export default zewards