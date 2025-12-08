"use client";

import React, { useEffect, useRef, useState } from "react";
import { ShineBorder } from "./magicui/shine-border";

const experiences = [
  {
    title: "Lead Product Designer",
    company: "Axion Dynamic",
    duration: "March 2025 to September 2025",
    location: "Lahore, PK",
    focus:
      "Product design with a research led practice, centered on clarity in flows, measurable impact, and keeping teams aligned.",
    pills: ["Research", "Product", "Systems", "Usability"],
    bullets: [
      "Led discovery research using interviews, contextual inquiry, and usability testing.",
      "Built research systems and high fidelity prototypes to support decision making.",
      "Established research operations including recruitment and insight repositories.",
    ],
  },
  {
    title: "Lead Designer",
    company: "Folionomics",
    duration: "July 2024 to February 2025",
    location: "Remote (Canada)",
    focus:
      "Understanding transaction behavior, improving flows, and building scalable design systems.",
    pills: ["Research", "Design Systems", "Usability", "Product"],
    bullets: [
      "Improved retention by twenty five percent through mixed method research.",
      "Reduced navigation errors through usability testing and heuristic reviews.",
      "Built a responsive design system used across engineering.",
    ],
  },
  {
    title: "Product Designer",
    company: "Hauraki",
    duration: "August 2023 to July 2024",
    location: "Remote (US)",
    focus:
      "Better task flows, scalable interfaces, and decision clarity through behavior centered design.",
    pills: ["Systems", "Workflows", "Data UX"],
    bullets: [
      "Improved task completion by twenty two percent with usability studies.",
      "Designed dashboards and workflows grounded in behavioral patterns.",
      "Built reusable components that reduced production cycles by thirty five percent.",
    ],
  },
  {
    title: "User Experience Analyst",
    company: "Salams (formerly Minder)",
    duration: "May 2018 to January 2024",
    location: "Remote (US)",
    focus:
      "Deep testing, QA, and foundational UX work across a large user base.",
    pills: ["Usability Testing", "QA", "User Journeys"],
    bullets: [
      "Ran fifty plus usability and regression tests improving consistency.",
      "Mapped journeys to guide redesign decisions.",
      "Created structured QA and research documentation.",
    ],
  },
  {
    title: "Product Designer",
    company: "Truebill / Rocket Money",
    duration: "September 2018 to November 2019",
    location: "Remote (US)",
    focus:
      "Financial clarity, trust, and improving mission critical money flows.",
    pills: ["FinTech", "Usability", "Trust & Safety"],
    bullets: [
      "Increased financial data accuracy by twenty two percent.",
      "Identified UX issues across payment and authorization flows.",
      "Improved linking flows reducing drop offs by eighteen percent.",
    ],
  },
];

function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // smoothed scroll-to-index
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const el = sectionRef.current;
      const top = el.offsetTop;
      const height = el.offsetHeight;
      const view = window.innerHeight;

      const maxScroll = height - view;
      const inside = Math.min(Math.max(window.scrollY - top, 0), maxScroll);

      const progress = inside / maxScroll;

      // very smooth easing for scroll → card swap
      const eased = Math.pow(progress, 0.85);

      const idx = Math.floor(eased * experiences.length);

      setActiveIndex(Math.min(idx, experiences.length - 1));
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // reduce spacing so no empty top gap
  const totalHeight = experiences.length * 100;

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative"
      style={{ height: `${totalHeight}vh` }}
    >
      {/* sticky viewport */}
      <div className="sticky top-0 h-screen flex items-center justify-center">

        {/* card stack centered */}
        <div className="relative w-full flex justify-center px-4">
          {experiences.map((exp, idx) => {
            const isActive = idx === activeIndex;

            return (
              <div
                key={idx}
                className={`
                  absolute max-w-5xl w-full transition-all duration-500
                  ease-[cubic-bezier(.25,.46,.45,.94)]
                  ${
                    isActive
                      ? "opacity-100 scale-100 translate-y-0"
                      : "opacity-0 scale-[0.97] translate-y-4"
                  }
                `}
                style={{ pointerEvents: isActive ? "auto" : "none" }}
              >
                {/* premium border */}
                <ShineBorder
                  shineColor={["#ffffff20", "#ffffff35"]}
                  borderWidth={1}
                  duration={16}
                />

                <article
                  className="
                    relative z-10 rounded-[1.75rem]
                    bg-[radial-gradient(circle_at_top_left,#18191f,#0c0d11)]
                    border border-white/10
                    px-10 py-10 md:px-12 md:py-12
                    shadow-[0_26px_80px_rgba(0,0,0,0.8)]
                    backdrop-blur-xl
                  "
                >
                  {/* TOP META */}
                  <div className="flex items-start justify-between mb-10">
                    <div>
                      <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white/40 mb-2">
                        <span className="h-2 w-2 rounded-full bg-white/70" />
                        Role {String(idx + 1).padStart(2, "0")}
                      </div>

                      <h3 className="text-3xl font-semibold text-white tracking-tight">
                        {exp.title}
                      </h3>
                      <p className="text-sm mt-1 text-white/70">{exp.company}</p>
                    </div>

                    <div className="text-right text-xs text-white/60 space-y-1">
                      <p>{exp.duration}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  {/* subtle divider */}
                  <div className="h-px w-full bg-white/10 mb-10" />

                  {/* two-column Focus / Impact layout */}
                  <div className="grid gap-10 md:grid-cols-2">

                    {/* LEFT — FOCUS */}
                    <div>
                      <p className="text-xs tracking-[0.18em] uppercase text-white/40 mb-3">
                        Focus
                      </p>

                      <p className="text-white/65 text-sm leading-relaxed mb-4">
                        {exp.focus}
                      </p>

                      {/* skill pills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.pills.map((p) => (
                          <span
                            key={p}
                            className="px-3 py-1 border border-white/15 rounded-full text-[0.7rem] text-white/70 bg-white/[0.03]"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* RIGHT — SELECTED IMPACT */}
                    <div>
                      <p className="text-xs tracking-[0.18em] uppercase text-white/40 mb-3">
                        Selected Impact
                      </p>

                      <ul className="space-y-4 text-white/75 text-sm leading-relaxed">
                        {exp.bullets.map((b, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="mt-1 h-1.5 w-1.5 rounded-sm bg-white/70" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
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
