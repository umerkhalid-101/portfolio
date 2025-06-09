import React from 'react';
import { ShinyButton } from './magicui/shiny-button';
import Link from 'next/link';

// ✅ Data Array
const caseStudies = [
  {
    title: 'Building a Subscription Handling System',
    description:
      'With user-centered approach, the goal was to create a loyalty app with intuitive interface for boosting business profitability through valuable insights and optimized campaigns for customer retention.',
    buttonText: 'View Case Study',
    link: '#',
    image: '/assets/cs_1.png',
    bgColor: '#0F151F',
    gradientClass: 'purple-radial-bg',
    additionalClasses : "top-[30px]",
    url : "/projects/zewards"
  },
  {
    title: 'Revamping an Cypto portfolio management dashboard',
    description:
      'Worked on a dashboard to control and track all crypto chains across multiple chain. Applied new style, changed the entire design system to modern, clean and better user functionality ',
    buttonText: 'View Case Study',
    link: '#',
    image: '/assets/cs_2.png',
    bgColor: '#101820',
    gradientClass: 'blue-radial-bg',
    additionalClasses : "top-[60px]",
    url : "/projects/folionomics"
  },
  {
    title: 'Modernising a corporate  website',
    description:
      "Illumina Technologies specializes in delivering cutting-edge Microsoft and Dynamics 365 solutions that drive business efficiency and growth. Illumina provides tailored solutions that enhance productivity, streamline operations, and support digital transformation. Whether it's cloud services, CRM, or ERP",
    buttonText: 'View Case Study',
    link: '#',
    image: '/assets/cs_3.png',
    bgColor: '#0F161F',
    gradientClass: 'red-radial-bg',
    additionalClasses : "top-[90px]",
    url : "/projects/illumina"
  },
  {
    title: 'Jobbit',
    description:
      'Jobbit is an all-in-one platform designed to streamline team collaboration, task management, and business operations. It empowers organizations with seamless coordination through features like teams, task tracking, network partnerships, and profile management. With integrated purchase management, supply chain tracking, and a dynamic calendar.',
    buttonText: 'View Case Study',
    link: '#',
    image: '/assets/cs_4.svg',
    bgColor: '#101924',
    gradientClass: 'green-radial-bg',
    additionalClasses : "top-[120px]",
    url : "/projects/jobbit"
  },
  {
    title: 'Zewards - Product Wesbite',
    description:
      'Zewards is a platform designed to enhance user engagement through a dynamic rewards system. By integrating gamification elements with seamless user experiences, Zewards empowers businesses to drive customer loyalty, increase participation, and incentivize key actions effortlessly.',
    buttonText: 'View Case Study',
    link: '#',
    image: '/assets/cs_5.svg',
    bgColor: '#0F151F',
    gradientClass: 'purple-radial-bg',
    additionalClasses : "top-[150px]",
    url : "/projects/zewards-website"
  },
];

function CaseStudies() {
  return (
    <div className="container max-w-[1400px] my-32 space-y-20" id='casestudies'>
      {caseStudies.map((cs, idx) => (
        <div
          key={idx}
          className={`case_study_box ${cs.additionalClasses} sticky overflow-hidden  w-full min-h-[400px] rounded-3xl border-[1px] border-[#f1505022] flex flex-col md:flex-row justify-between items-center md:p-10 md:px-14 p-8`}
          style={{ backgroundColor: cs.bgColor }}
        >
          <div className="flex flex-col gap-3 md:max-w-[40%] relative z-[1]">
            <h3 className="text-3xl">{cs.title}</h3>
            <p className="text-lg text-[#B3C2CB]">{cs.description}</p>
            <Link href={cs.url}>
              <ShinyButton className="py-3">{cs.buttonText}</ShinyButton>
            </Link>
          </div>

          <div className="relative md:w-[50%] h-[150px] md:h-[400px] flex justify-center items-center">
            {/* Radial Gradient Background */}
            <div
              className={`${cs.gradientClass} absolute w-[400px] h-[400px] scale-[3] right-0 rounded-full z-0`}
            />

            {/* Image */}
            <img
              src={cs.image}
              alt="casestudy"
              className="relative w-[250px] md:w-[400px] z-10"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CaseStudies;
