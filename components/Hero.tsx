import React from 'react';
import { ShimmerButton } from './magicui/shimmer-button';
import ShinyText from './magicui/ShinyText';
import { Button } from './ui/button';
import { ShinyButton } from './magicui/shiny-button';
import { ShineBorder } from './magicui/shine-border';
import BlurText from './magicui/blurtext';
import { AuroraText } from './magicui/aurora-text';

function Hero() {
    return (
        <div className="flex justify-center items-center min-h-[100vh]" id='home'>
            {/* Fullscreen background wrapper */}
            <div className="fixed inset-0 w-full h-[100vh] z-[-1]">

                {/* Blurred Conic Gradient Background */}
                <div className="absolute inset-0 w-full h-full flex items-center justify-center max-2xl:blur-[100px] blur-[150px]">
                    <div className="rounded-full w-[80vw] h-[80vh] bg-black relative md:scale-[0.8] overflow-hidden">
                        <div className="blob absolute inset-0 w-full h-full" />
                    </div>
                </div>

                {/* Grain Noise Layer */}
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="absolute inset-0 w-full h-full">
                    <filter id="noiseFilter">
                        <feTurbulence
                            type="turbulence"
                            baseFrequency="0.3"
                            numOctaves="1"
                            seed="2"
                        />
                    </filter>
                    <rect
                        width="100%"
                        height="100%"
                        filter="url(#noiseFilter)"
                        fill="#000"
                        style={{
                            mixBlendMode: 'multiply',
                            opacity: 0.3,
                        }}
                    />
                </svg>
            </div>

            {/* Foreground Content */}

            <div className='w-full container flex justify-center items-center flex-col max-2xl:min-h-[70vh] min-h-[500px]'>

                <BlurText
                    text="Hi, I'm Umer Khalid"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-3xl md:text-6xl font-bold font-roco"
                />
                 <AuroraText className='text-2xl md:text-5xl italic mt-5 font-black'>Product Designer </AuroraText>

                <p className='text-lg md:text-xl font-light md:mt-14 mt-8 text-gray-300 text-center'>Designing intuitive and impactful digital experiences.</p>

                {/* <div className='bg-gray-700 bg-opacity-50 rounded-full bg-transparent p-2 px-3 mt-4 border-2 border-gray-400'>
                <ShinyText text="Book A Discovery Call" disabled={false} speed={3} className='text-base'/>
                </div> */}
                <div className='rounded-full mt-10 relative overflow-hidden p-2 px-6 bg-black hover:cursor-pointer text-base'>
                    <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} duration={13} borderWidth={2} />
                    Book Discovery Call
                </div>
            </div>
        </div>
    );
}

export default Hero;
