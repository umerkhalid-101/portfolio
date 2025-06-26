import React from "react";
import ShinyText from "./magicui/ShinyText";
import { ShineBorder } from "./magicui/shine-border";
import { ShineBorderGlow } from "./magicui/ShineBorderGlow";
import BlurText from "./magicui/blurtext";

function Footer() {
    const date = new Date().getFullYear();
    return (
        <footer className="bg-black text-white py-16 relative overflow-hidden">
            <img
                src="/assets/footerbg.avif"
                alt="Footer Background"
                className="absolute inset-0 w-full h-full object-cover z-[0]"
            />
            <div className="container relative z-[1]">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Heading */}
                   <div className="flex justify-center flex-col items-center">
                     <BlurText
                        text=" Ready to Start"
                        delay={50}
                        animateBy="words"
                        direction="top"
                        className="text-center mb-5 text-2xl md:text-4xl font-medium"
                    />

                    <BlurText
                        text="Your Project?"
                        delay={350}
                        animateBy="words"
                        direction="top"
                        className="text-center mb-5 text-2xl md:text-4xl font-medium"
                    />

                   </div>
                    {/* CTA */}

                    <a href="" className="flex justify-center items-center">
                        <div className='relative p-3 px-5 rounded-full bg-black max-w-[300px] z-[10]'>
                            <ShineBorderGlow shineColor={["#24378b", "#2774cd50"]} borderWidth={2} duration={10} />
                            Book Discovery Call
                        </div>
                    </a>



                    {/* Subtext */}
                    <div className="flex justify-center items-center mt-6 gap-2">
                        <p className="text-sm text-white/70">
                            Schedule a call with me
                        </p>
                        <img src="/assets/umar.avif" alt="" className="w-[30px] h-[30px] rounded-full" />
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
                    <p>© {date} Umer Khalid. All Rights Reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Linkedin</a>
                        <a href="#" className="hover:text-white">Instagram</a>
                        <a href="#" className="hover:text-white">Mail</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
