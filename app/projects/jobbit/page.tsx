import BlurText from '@/components/magicui/blurtext'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function zewards() {
  return (
    <div className='bg-[#140F00] w-full text-[#D1DAE0]'>
      <div className='container'>

        {/* Title & Description */}
        <div className='p-5 md:py-32 py-16  max-w-6xl mx-auto'>
          <BlurText text='Jobbit' className='font-roco text-3xl md:text-5xl' delay={150} animateBy="words" direction="top" />
          <p className='text-xl mt-3'>Jobbit is an all-in-one platform designed to streamline team collaboration, task management, and business operations. It empowers organizations with seamless coordination through features like teams, task tracking, network partnerships, and profile management. With integrated purchase management, supply chain tracking, and a dynamic calendar, Jobbit ensures smooth workflow execution and efficient resource allocation. Whether you're managing projects, building professional connections, or optimizing logistics, Jobbit provides a unified space to enhance productivity and drive business success.</p>
        </div>

        {/* Image after title */}
        <div className="w-full h-[200px] md:h-[600px] relative overflow-hidden rounded-2xl">
          <Image src="/assets/projects/j_1.svg" alt="Folionomics" fill className="object-cover" />
        </div>

        {/* Sidebar div */}
        <div className="md:p-10 p-2 md:max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-2">

            {/* Left Sidebar */}
            <div className="min-w-[250px] md:space-y-6 space-y-2">
              <div>
                <p className="text-white text-lg">Headquarters</p>
                <p>Warsaw, Poland</p>
              </div>
              <div>
                <p className="text-white text-lg">Founded</p>
                <p>2024</p>
              </div>
              <div>
                <p className="text-white text-lg">Industry</p>
                <p>Technology</p>
              </div>

              <div>
                <p className="text-white text-lg">Company size</p>
                <p>10-50+ People</p>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-10 max-md:mt-10">
              <div>
                <h2 className="text-2xl md:text-4xl font-semibold mb-2">Challenge</h2>
                <p className="text-lg">
                  Jobbit was created to address the inefficiencies caused by fragmented workflows, disconnected teams, and siloed tools that hinder collaboration and productivity. Many businesses struggle with managing tasks, coordinating with network partners, and streamlining purchases and supply chain operations, often relying on multiple unintegrated platforms. Existing solutions lack seamless collaboration, making it difficult to track team performance, manage dynamic schedules, and leverage professional networks effectively. Jobbit solves these challenges by providing an all-in-one platform that integrates teams, task management, network partnerships, profiles, purchases, supply chain tracking, and calendars—ensuring a unified, efficient, and scalable workflow.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2 md:text-4xl">Results</h2>
                <p className="text-lg ">
                  With Jobbit, businesses experience improved efficiency, seamless collaboration, and streamlined operations. Teams can work together effortlessly, reducing miscommunication and enhancing productivity. Task management becomes more structured, ensuring projects stay on track with clear accountability. Network partners are better integrated into workflows, fostering stronger business relationships and opportunities. Purchases and supply chain operations are optimized, minimizing delays and improving resource allocation. The dynamic calendar ensures better planning and scheduling, reducing bottlenecks. Overall, Jobbit empowers organizations with a unified platform that enhances workflow efficiency, drives growth, and simplifies complex business processes.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* image */}
        <div className="w-full h-[200px] md:h-[600px] my-16 relative overflow-hidden rounded-2xl">
          <Image src="/assets/projects/j_2.svg" alt="Folionomics" fill className="object-cover" />
        </div>

        {/* Modules & Features */}
        <div className='max-w-4xl mx-auto my-16'>
          <div className='mt-12'>
            <h2 className='text-2xl md:text-4xl mb-4 font-semibold'>Modules & Features</h2>
            <p className='text-lg mt-3 font-normal'><span className='font-bold'>Teams: Seamless Collaboration & Role Management</span> <br />
              Managing teams across multiple projects can be complex, especially when roles and responsibilities are unclear. Jobbit simplifies team management by allowing users to:</p>
          </div>

          <ul className='list-disc list-inside text-lg mt-3 font-normal'>
            <li>Create and manage teams within organizations.</li>
            <li>Define roles and access levels.</li>
            <li>Track contributions and performance across projects.</li>
            <li>Foster collaboration through integrated communication tools.</li>
              <Button className='bg-white rounded-full mt-10 list-none!' size={'lg'}>
                View User Flow
              </Button>
          </ul>
        </div>




        {/* Image */}
        <div className="w-full h-[200px] md:h-[600px] relative overflow-hidden rounded-2xl">
          <Image src="/assets/projects/j_3.svg" alt="Folionomics" fill className="object-cover" />
        </div>



        {/* Research & Insight */}
        <div className='max-w-4xl mx-auto my-16'>
          <div className='mt-12'>
            <p className='text-lg mt-3 font-normal'><span className='font-bold'>Task Manager: Organize, Track & Execute Tasks Efficiently</span> <br />
              Teams often struggle with unstructured task management, leading to delays and confusion. Jobbit’s task manager enables:</p>
          </div>

          <ul className='list-disc list-inside text-lg mt-3 font-normal'>
            <li>Task assignment with deadlines and priorities.</li>
            <li>Status tracking with progress updates.</li>
            <li>Task dependencies for better workflow planning.</li>
            <li>Customizable views (Kanban, List, Calendar).</li>
              <Button className='bg-white rounded-full mt-10 list-none!' size={'lg'}>
                View User Flow
              </Button>
          </ul>
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

export default zewards