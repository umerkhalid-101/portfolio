'use client';

import React from 'react';
import { ShineBorder } from './magicui/shine-border';
import { AuroraText } from './magicui/aurora-text';
import { motion } from 'framer-motion';

const easeOut = [0.16, 1, 0.3, 1];

function Hero() {
    return (
        <div className="flex justify-center items-center min-h-[100vh]" id='home'>
            {/* Fullscreen background wrapper */}
            <div className="fixed inset-0 w-full h-[100vh] z-[-1]">

                {/* Blurred Conic Gradient Background */}
                <div className="absolute inset-0 w-full h-full flex items-center justify-center blur-[50px] sm:blur-[70px] md:blur-[100px] 2xl:blur-[120px]">
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
            <div className='w-full container flex justify-center items-center flex-col max-2xl:min-h-[100vh] min-h-[600px]'>
                <h1 className="text-4xl md:text-6xl font-medium reveal-text font-satoshi">
                    {"Hi, I'm Umer Khalid".split("").map((char, index) => (
                        <span
                            key={index}
                            style={{
                                animationDelay: `${index * 0.06}s`,
                                display: "inline-block",
                                whiteSpace: "pre",
                            }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </h1>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.3, ease: easeOut }}
                >
                    <AuroraText className='text-3xl md:text-5xl italic mt-5 font-light' colors={["#FFFFFF", "#BABABA", "#FFFFFF", "#808080", "#FFFFFF"]}>Product Designer </AuroraText>
                </motion.div>

                <motion.p
                    className='text-lg md:text-xl font-light md:mt-8 mt-8 text-gray-300 text-center'
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.6, ease: easeOut }}
                >
                    Designing intuitive and impactful digital experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 16, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7, delay: 1.85, ease: easeOut }}
                >
                    <a href="https://calendly.com/umerkhalid141/30min" target="_blank" rel="noreferrer noopener">
                        <div className='rounded-full mt-6 relative overflow-hidden font-normal p-3 px-6 bg-[#E6E6E6] hover:cursor-pointer text-base text-black hover:scale-105 transition-transform duration-300'>
                            <ShineBorder duration={13} borderWidth={0} />
                            Book Discovery Call
                        </div>
                    </a>
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;
