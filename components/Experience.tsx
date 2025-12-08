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
    location: "Remote (Canada)",
    bullets: [
      "Ran mixed methods research on transaction behavior which improved retention by twenty five percent.",
      "Led usability testing and heuristic reviews which reduced navigation errors by eighteen percent.",
      "Built a responsive design system and partnered with engineering to ensure user centric execution.",
    ],
  },
  {
    title: "Product Designer",
    company: "Hauraki",
    duration: "August 2023 to July 2024",
    location: "Remote (US)",
    bullets: [
      "Ran usability testing across web and mobile which improved task completion by twenty two percent and resolved more than sixty UX issues.",
      "Designed dashboards and multi step workflows grounded in behavior patterns to streamline key tasks.",
      "Built reusable components and scalable layouts, cutting production cycles by thirty five percent and aligning product and engineering.",
    ],
  },
  {
    title: "User Experience Analyst",
    company: "Salams (formerly Minder)",
    duration: "May 2018 to January 2024",
    location: "Remote (US)",
    bullets: [
      "Ran more than fifty usability and regression tests which improved consistency and reduced user reported bugs by fifteen percent.",
      "Mapped user journeys and analyzed behavior to guide redesign decisions with clear actionable insights.",
      "Created structured research and QA documentation and collaborated across teams to refine key flows.",
    ],
  },
  {
    title: "Product Designer",
    company: "Truebill / Rocket Money",
    duration: "September 2018 to November 2019",
    location: "Remote (US)",
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

      const progress = scrolledInside / maxScroll;
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

  const sectionHeightVh = experiences.length * 110;

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative"
      style={{ height: `${sectionHeightVh}vh` }}
    >
      {/* sticky viewport */}
      <div className="sticky top-0 h-screen flex flex-col">
        {/* centered heading */}
        <div className="container pt-10 pb-6">
          <BlurText
            text="Experience"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-center mb-4 text-3xl md:text-5xl font-medium"
          />
        </div>

        <div className="flex-1 flex items-center">
          <div className="container">
            <div className="relative flex items-center justify-center">
              {/* background shapes behind cards */}
              <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                {/* large diagonal glows */}
                <div
                  className="absolute -top-40 -left-32 h-[480px] w-[480px] rounded-full 
                  bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_70%)]
                  blur-3xl opacity-60 rotate-[-20deg]"
                />
                <div
                  className="absolute bottom-0 -right-24 h-[380px] w-[380px] rounded-full 
                  bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_70%)]
                  blur-3xl opacity-50 rotate-[25deg]"
                />

                {/* circular contour ring */}
                <div
                  className="absolute left-1/2 top-1/2 h-[700px] w-[700px] 
                  -translate-x-1/2 -translate-y-1/2 
                  rounded-full border border-white/[0.05] 
                  [mask-image:radial-gradient(circle,white,transparent_75%)]"
                />

                {/* rotated subtle grid */}
                <div
                  className="absolute inset-x-16 inset-y-10 
                  bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),
                       linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
                  bg-[size:60px_60px] 
                  opacity-[0.12]
                  rotate-1"
                />

                {/* vertical center glow */}
                <div
                  className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 
                  bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-30"
                />
              </div>

              {/* stacked cards */}
              {experiences.map((exp, idx) => {
                const isActive = idx === activeIndex;

                return (
                  <div
                    key={exp.title}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <div
                      className={`
                        relative max-w-5xl w-full px-4 md:px-0
                        transition-all duration-300
                        ${
                          isActive
                            ? "opacity-100 scale-100 translate-y-0"
                            : "opacity-0 scale-95 translate-y-6"
                        }
                      `}
                      style={{
                        pointerEvents: isActive ? "auto" : "none",
                      }}
                    >
                      {/* glow around card */}
                      <div className="pointer-events-none absolute -inset-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_65%)] blur-3xl opacity-70" />

                      <ShineBorder
                        shineColor={["#ffffff18", "#ffffff30"]}
                        borderWidth={1.2}
                        duration={12 + idx * 2}
                      />

                      <article
                        className="
                          relative z-10 rounded-[2rem]
                          bg-[radial-gradient(circle_at_top_left,#14151c,#050509)]
                          border border-white/12
                          px-8 py-8 md:px-10 md:py-10
                          shadow-[0_40px_120px_rgba(0,0,0,1)]
                          backdrop-blur-xl
                        "
                      >
                        {/* top row */}
                        <div className="flex items-start justify-between gap-6 mb-8">
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-[0.7rem] md:text-[0.75rem] tracking-[0.22em] uppercase text-white/45">
                              <span className="h-2 w-2 rounded-full bg-white/80" />
                              <span>Role {String(idx + 1).padStart(2, "0")}</span>
                            </div>
                            <div>
                              <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                                {exp.title}
                              </h3>
                              <p className="mt-1 text-sm md:text-base text-white/70">
                                {exp.company}
                              </p>
                            </div>
                          </div>

                          <div className="text-right text-[0.75rem] md:text-xs text-white/60 space-y-1">
                            <p className="text-white/75">{exp.duration}</p>
                            <p>{exp.location}</p>
                          </div>
                        </div>

                        {/* content grid */}
                        <div className="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                          {/* left column */}
                          <div className="space-y-4">
                            <p className="text-[0.7rem] md:text-[0.75rem] tracking-[0.18em] uppercase text-white/40">
                              Focus
                            </p>
                            <p className="text-sm md:text-[0.9rem] text-white/65 leading-relaxed">
                              Product design with a research led practice, centered on
                              clarity in flows, measurable impact, and keeping teams
                              aligned.
                            </p>

                            <div className="flex flex-wrap gap-2 pt-1">
                              {["Research", "Product", "Systems", "Usability"].map(
                                (tag) => (
                                  <span
                                    key={tag}
                                    className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-[0.7rem] text-white/70"
                                  >
                                    {tag}
                                  </span>
                                )
                              )}
                            </div>
                          </div>

                          {/* right column */}
                          <div>
                            <p className="text-[0.7rem] md:text-[0.75rem] tracking-[0.18em] uppercase text-white/40 mb-3">
                              Selected impact
                            </p>
                            <ul className="space-y-3 text-sm md:text-[0.95rem] text-white/72 leading-relaxed">
                              {exp.bullets.map((item, i) => (
                                <li key={i} className="flex gap-3">
                                  <span className="mt-1 h-1.5 w-1.5 rounded-sm bg-white/70 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                );
              })}

              {/* pagination pills were here; removed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ExperiencePage() {
  return (
    <main className="min-h-screen">
      <ExperienceSection />
    </main>
  );
}
