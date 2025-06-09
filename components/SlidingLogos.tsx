import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";
import { div } from "motion/react-client";
import Image from "next/image";
import BlurText from "./magicui/blurtext";

const logos = [
  "/assets/logo1.png",
  "/assets/logo2.png",
  "/assets/logo3.png",
  "/assets/logo4.png",
  "/assets/logo5.png",
  "/assets/logo6.png",
  "/assets/logo7.png",
  "/assets/logo8.png",
  "/assets/logo9.png",
  "/assets/logo10.png",
]

export function SlidingLogos() {
  return (
    <div className="container min-h-[250px] relative">
     <div className="flex justify-center">
       <BlurText
        text="Skill Set"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-center mx-auto mb-5 text-2xl md:text-4xl font-light font-roco"
      />
     </div>
      <div
        className="relative flex w-full flex-col items-center justify-center overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <Marquee pauseOnHover className="[--duration:20s]">
          {logos.map((logo) => (
            <div key={logo} className="w-[50px] md:w-[60px] md:mx-3">
              <Image
                src={logo}
                alt="logo"
                layout="responsive"
                width={0}
                height={0}
                className="rounded-[13px] hover:shadow-md hover:shadow-gray-600"
              />
            </div>
          ))}
        </Marquee>

        {/* Fading overlays to visually blend edges with noisy background */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[10%]" style={{
          background: "linear-gradient(to right, rgba(YourBgColorHere,1), rgba(YourBgColorHere,0))",
        }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[10%]" style={{
          background: "linear-gradient(to left, rgba(YourBgColorHere,1), rgba(YourBgColorHere,0))",
        }} />
      </div>
    </div>
  );
}
