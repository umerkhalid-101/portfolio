"use client";

import React, { useEffect, useRef, useState } from "react";
import BlurText from "./magicui/blurtext";
import { ShineBorder } from "./magicui/shine-border";

const experiences = [
  {
    title: "Lead Product Designer",
    company: "Axion Dynamic",
    duration: "March 2025 to September 2025",
    location: "Lahore, PK",
    bullets: [
      "Led discovery research using interviews, contextual inquiry, and usability testing to shape version one direction.",
      "Built research systems and high fidelity prototypes, partnering cross functionally to drive user centered decisions.",
      "Set up research operations including recruitment and insight repositories to scale user centricity across teams.",
    ],
  },
  {
    title: "Lead Designer",
    company: "Folionomics",
    duration: "July 2024 to February 2025",
    location: "Remote, Canada",
    bullets: [
      "Ran mixed methods research on transaction behavior and improved retention by twenty five percent.",
      "Led usability testing and heuristic reviews that reduced navigation errors by eighteen percent.",
      "Built a responsive design system and partnered with engineering to ensure user centered execution.",
    ],
  },
  {
    title: "Product Designer",
    company: "Hauraki",
    duration: "August 2023 to July 2024",
    location: "Remote, US",
    bullets: [
      "Ran usability testing across web and mobile which improved task completion by twenty two percent and resolved more than sixty UX issues.",
      "Designed dashboards and multi step workflows grounded in behavior patterns to streamline key tasks.",
      "Built reusable components and scalable layouts, cutting production cycles by thirty five percent and aligning product and engineering.",
    ],
  },
  {
    title: "User Experience Analyst",
    company: "Salams formerly Minder",
    duration: "May 2018 to January 2024",
    location: "Remote, US",
    bullets: [
      "Ran more than fifty usability and regression tests which improved consistency and reduced user reported bugs by fifteen percent.",
      "Mapped user journeys and analyzed behavior to guide redesign decisions with clear actionable insights.",
      "Created structured research and QA documentation and collaborated across teams to refine key flows.",
    ],
  },
  {
    title: "Product Designer",
    company: "Truebill and Rocket Money",
    duration: "September 2018 to November 2019",
    location: "Remote, US",
    bullets: [
      "Ran more than thirty validation and usability studies on account linking, subscription detection, and transaction flows.",
      "Identified clarity impacting UX issues across payments and authorization which strengthened trust in critical financial actions.",
      "Collaborated with design and engineering to refine dashboards and reduce account linking drop offs by eighteen percent.",
    ],
  },
];

function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const maxScroll = sectionHeight - viewportHeight;
      if (maxScroll <= 0) {
        setActiveIndex(0);
        return;
      }

      const scrollY = window.scrollY;
      const scrolledInside = Math.min(
        Math.max(scrollY - sectionTop, 0),
        maxScroll
      );

      const progress = scrolledInside / maxScroll; // 0 to 1
      const rawIndex = progress * experiences.length;
      const index = Math.min(
        experiences.length - 1,
        Math.floor(rawIndex + 0.0001)
      );

      setActiveIndex(index);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const sectionHeightVh = experiences.length * 110; // taller = slower transitions

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative"
      style={{ height: `${sectionHeightVh}vh` }}
    >
      {/* sticky viewport */}
      <div className="sticky top-0 h-screen flex flex-col">
        <div className="container pt-10 pb-6">
          <BlurText
            text="Experience"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-center mb-4 text-2xl md:text-4xl font-medium"
          />

          <p className="mx-auto max-w-xl text-center text-xs md:text-sm text-white/60">
            Scroll to move through each role. Cards step in one at a time and stay
            centered while you read.
          </p>
        </div>

        <div className="flex-1 flex items-center">
          <div className="container">
            <div className="relative flex items-center justify-center">
              {/* cards stacked and swapped by scroll */}
              {experiences.map((exp, idx) => {
                const isActive = idx === activeIndex;
                const isPast = idx < activeIndex;

                return (
                  <div
                    key={exp.title}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <div
                      className={`
                        relative max-w-3xl w-full px-4 md:px-0
                        transition-all duration-400
                        ${isActive ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"}
                      `}
                      style={{
                        pointerEvents: isActive ? "auto" : "none",
                      }}
                    >
                      {/* soft glow behind card */}
                      <div className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14),transparent_60%)] blur-3xl opacity-70" />

                      <ShineBorder
                        shineColor={["#ffffff26", "#ffffff40"]}
                        borderWidth={1.5}
                        duration={12 + idx * 2}
                      />

                      <article
                        className={`
                          relative z-10 rounded-3xl
                          bg-black/85 border border-white/10
                          px-6 py-7 md:px-8 md:py-9
                          shadow-[0_30px_100px_rgba(0,0,0,1)]
                          backdrop-blur-xl
                        `}
                      >
                        {/* meta */}
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-lg md:text-2xl font-semibold text-white">
                              {exp.title}
                            </h3>
                            <p className="text-sm md:text-base text-white/70">
                              {exp.company}
                            </p>
                          </div>
                          <div className="text-right text-[0.7rem] md:text-xs text-white/50">
                            <p>{exp.duration}</p>
                            <p className="mt-0.5">{exp.location}</p>
                            <p className="mt-2 text-[0.65rem] uppercase tracking-[0.16em]">
                              {String(idx + 1).padStart(2, "0")} of{" "}
                              {String(experiences.length).padStart(2, "0")}
                            </p>
                          </div>
                        </div>

                        {/* bullets */}
                        <ul className="space-y-3 text-sm md:text-[0.95rem] text-white/70 leading-relaxed">
                          {exp.bullets.map((item, i) => (
                            <li key={i} className="flex gap-3">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/60 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 text-center text-[0.7rem] md:text-xs text-white/40">
              Scroll down to move through the chapters of experience.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
