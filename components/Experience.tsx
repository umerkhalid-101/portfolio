"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    title: "UX Designer",
    company: "Unita",
    duration: "Jan 2026 – Present",
    location: "Dubai, UAE",
    isCurrent: true,
    bullets: [
      "Sole designer on a pre-launch B2B marketplace platform, owning end-to-end UX and UI across 10+ modules and 30–50 screens.",
      "Built a comprehensive design system from scratch — full token coverage, component libraries, and a dark teal and burnt orange visual language.",
      "Designed landing page experiences, membership tier flows, and community-facing product surfaces.",
      "Developed high-fidelity prototypes and contributed to HTML/CSS front-end builds, bridging design and engineering.",
      "Ran A/B tests on pricing and dedicated offerings, exposing variations to select user segments to measure impact.",
    ],
  },
  {
    title: "Product Designer",
    company: "Axion Dynamic",
    duration: "Mar 2025 – Nov 2025",
    location: "Remote",
    isCurrent: false,
    bullets: [
      "Led end-to-end product design for Jobbit, an ERP platform for supply chain operations — from discovery to high-fidelity UI.",
      "Designed core modules and workflows tailored to supply chain use cases, simplifying complex operational processes into clear, usable interfaces.",
      "Built a scalable design system in Figma covering color, typography, and component libraries for consistent engineering handoff.",
      "Collaborated directly with founders and technical leads to align design decisions with product logic and business requirements.",
    ],
  },
  {
    title: "Lead Designer",
    company: "Folionomics",
    duration: "Jul 2024 – Feb 2025",
    location: "Remote",
    isCurrent: false,
    bullets: [
      "Designed the product end-to-end across all core modules — portfolio dashboard, market assets, wallet explorer, swap flow, and Portfolio AI chat.",
      "Designed wallet bundling and onboarding across EVM, Bitcoin, Solana, and 60+ chains from a single unified view.",
      "Drove a 25% increase in user retention through a cohesive, privacy-first experience making complex on-chain data accessible.",
      "Built a modular design system as the visual foundation for analytics, rebalancing tools, and notification alerts.",
    ],
  },
  {
    title: "Product Designer",
    company: "Hauraki",
    duration: "Jan 2023 – Jul 2024",
    location: "Remote, US",
    isCurrent: false,
    bullets: [
      "Designed four fully shipped products across the Zewst ecosystem: Zewst POS, Zewst Portfolio, Zewst Phone, and Zewards.",
      "Designed Zewst POS, a restaurant-grade point-of-sale system trusted by 500+ merchants — order management, inventory, real-time sales, and staff flows.",
      "Designed Zewst Portfolio, a BI dashboard covering revenue tracking, profit margins, franchise performance, and demand spike detection.",
      "Single-handedly designed Zewards — merchant app, customer web wallet, QR onboarding, Apple/Google Wallet, loyalty campaigns, and AI receipt scanning.",
    ],
  },
  {
    title: "User Experience Analyst",
    company: "Salams",
    duration: "May 2018 – Jan 2023",
    location: "Remote, US",
    isCurrent: false,
    bullets: [
      "Grew from QA into a core product design role over 5 years, owning the end-to-end redesign before acquisition by Match Group in 2023.",
      "Led the full redesign — onboarding, home tab, explore tab, matches, chat, events, settings, and a deeply detailed profile editing system.",
      "Designed a comprehensive onboarding flow across dozens of screens covering signup, profile setup, and identity attributes.",
      "Ran A/B tests on pricing models and feature rollouts including ghost mode and voice telegrams to guide product decisions.",
    ],
  },
  {
    title: "Product Designer",
    company: "Truebill",
    duration: "Sep 2018 – Nov 2019",
    location: "Remote, US",
    isCurrent: false,
    bullets: [
      "Conducted usability studies on financial workflows, improving data accuracy by 22%.",
      "Redesigned payment and authorisation journeys, reducing drop-offs by 18%.",
      "Collaborated with PMs and engineering to ship high-quality dashboards and transaction experiences.",
    ],
  },
];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const { offsetTop, offsetHeight } = sectionRef.current;
      const maxScroll = offsetHeight - window.innerHeight;
      if (maxScroll <= 0) { setActiveIndex(0); return; }
      const scrolled = Math.min(Math.max(window.scrollY - offsetTop, 0), maxScroll);
      setActiveIndex(
        Math.min(experiences.length - 1, Math.floor((scrolled / maxScroll) * experiences.length + 0.0001))
      );
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const active = experiences[activeIndex];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative"
      style={{ height: `${experiences.length * 110}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-0">

            {/* ── LEFT: company index ── */}
            <div className="hidden lg:flex flex-col justify-between pr-12 border-r border-white/[0.06]">
              <div>
                <p className="text-[0.6rem] tracking-[0.3em] uppercase text-white/25 mb-10">
                  Experience
                </p>
                <nav className="space-y-7">
                  {experiences.map((exp, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                      <div key={idx} className="flex items-start gap-3">
                        {/* active indicator */}
                        <div
                          className="mt-[7px] w-3 h-[1px] flex-shrink-0 transition-all duration-500"
                          style={{
                            backgroundColor: isActive ? "rgba(255,255,255,0.7)" : "transparent",
                            transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                          }}
                        />
                        <div>
                          <p
                            className="leading-none transition-all duration-500 font-medium"
                            style={{
                              color: isActive ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.22)",
                              fontSize: isActive ? "1rem" : "0.875rem",
                              transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                            }}
                          >
                            {exp.company}
                          </p>
                          <p
                            className="text-[0.7rem] mt-0.5 transition-all duration-500"
                            style={{
                              color: isActive ? "rgba(255,255,255,0.35)" : "transparent",
                              transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                            }}
                          >
                            {exp.duration}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </nav>
              </div>

              {/* scroll hint */}
              <p className="text-[0.6rem] tracking-[0.2em] uppercase text-white/15">
                Scroll to explore
              </p>
            </div>

            {/* ── RIGHT: detail panel ── */}
            <div className="lg:pl-14">
              {/* Mobile label */}
              <p className="lg:hidden text-[0.6rem] tracking-[0.3em] uppercase text-white/25 mb-6">
                Experience
              </p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease }}
                >
                  {/* index */}
                  <p className="text-[0.6rem] font-mono tracking-[0.25em] text-white/20 mb-4">
                    {String(activeIndex + 1).padStart(2, "0")} / {String(experiences.length).padStart(2, "0")}
                  </p>

                  {/* role + company */}
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-none tracking-tight">
                      {active.title}
                    </h2>
                    {active.isCurrent && (
                      <span className="text-[0.65rem] tracking-[0.2em] uppercase text-white/35 border border-white/15 px-2 py-0.5 rounded-full">
                        now
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-white/40 mb-8">
                    {active.company}&ensp;·&ensp;{active.duration}&ensp;·&ensp;{active.location}
                  </p>

                  {/* divider */}
                  <div className="h-px bg-white/[0.07] mb-8" />

                  {/* bullets */}
                  <ul className="space-y-5">
                    {active.bullets.map((bullet, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.12 + i * 0.07, duration: 0.38, ease }}
                        className="flex gap-5 text-sm md:text-[0.95rem] text-white/55 leading-relaxed"
                      >
                        <span className="mt-[10px] h-[1px] w-4 bg-white/20 flex-shrink-0" />
                        <span>{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
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
