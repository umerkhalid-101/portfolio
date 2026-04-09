"use client";

import React, { useEffect, useRef, useState } from "react";
import BlurText from "./magicui/blurtext";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "UX Designer",
    company: "Unita",
    duration: "January 2026 – Present",
    location: "Dubai, UAE",
    isCurrent: true,
    accent: "#0EADA0",
    accentRgb: "14, 173, 160",
    type: ["B2B", "Marketplace", "Design Systems"],
    metric: { value: "30–50", label: "Screens owned end-to-end" },
    bullets: [
      "Sole designer on a pre-launch B2B marketplace platform, owning end-to-end UX and UI across 10+ modules.",
      "Built a comprehensive design system from scratch — full token coverage, component libraries, and a dark teal and burnt orange visual language.",
      "Designed landing page experiences, membership tier flows, and community-facing product surfaces.",
      "Developed high-fidelity prototypes and contributed to HTML/CSS front-end builds, bridging design and engineering.",
      "Ran A/B tests on pricing and dedicated offerings, exposing variations to select user segments to measure impact.",
    ],
  },
  {
    title: "Product Designer",
    company: "Axion Dynamic",
    duration: "March 2025 – November 2025",
    location: "Remote",
    isCurrent: false,
    accent: "#F97316",
    accentRgb: "249, 115, 22",
    type: ["ERP", "Supply Chain", "SaaS"],
    metric: { value: "Full", label: "Discovery to delivery ownership" },
    bullets: [
      "Led end-to-end product design for Jobbit, an ERP platform built for supply chain operations, from discovery to high-fidelity UI.",
      "Designed core modules and workflows tailored to supply chain use cases, simplifying complex operational processes into clear, usable interfaces.",
      "Built a scalable design system in Figma covering color, typography, and component libraries for consistent engineering handoff.",
      "Collaborated directly with founders and technical leads to align design decisions with product logic and business requirements.",
    ],
  },
  {
    title: "Lead Designer",
    company: "Folionomics",
    duration: "July 2024 – February 2025",
    location: "Remote",
    isCurrent: false,
    accent: "#3B82F6",
    accentRgb: "59, 130, 246",
    type: ["Fintech", "Web3", "DeFi"],
    metric: { value: "+25%", label: "User retention increase" },
    bullets: [
      "Designed the product end-to-end across all core modules — portfolio dashboard, market assets, wallet explorer, swap flow, and Portfolio AI chat.",
      "Designed wallet bundling and onboarding across EVM, Bitcoin, Solana, and 60+ chains from a single unified view.",
      "Drove a 25% increase in user retention through a cohesive, privacy-first experience making complex on-chain data accessible.",
      "Built a modular design system establishing the visual foundation for analytics, rebalancing tools, and notification alerts.",
    ],
  },
  {
    title: "Product Designer",
    company: "Hauraki",
    duration: "January 2023 – July 2024",
    location: "Remote, US",
    isCurrent: false,
    accent: "#8B5CF6",
    accentRgb: "139, 92, 246",
    type: ["POS", "Loyalty", "Mobile", "SaaS"],
    metric: { value: "500+", label: "Merchants on Zewst POS" },
    bullets: [
      "Designed four distinct, fully shipped products across the Zewst ecosystem: Zewst POS, Zewst Portfolio, Zewst Phone, and Zewards.",
      "Designed Zewst POS, a restaurant-grade point-of-sale system trusted by 500+ merchants — order management, inventory, real-time sales, and staff flows.",
      "Designed Zewst Portfolio, a business intelligence dashboard covering revenue tracking, profit margins, franchise performance, and demand spike detection.",
      "Single-handedly designed Zewards end-to-end — merchant app, customer web wallet, QR onboarding, Apple/Google Wallet, loyalty campaigns, and AI receipt scanning.",
    ],
  },
  {
    title: "User Experience Analyst",
    company: "Salams (formerly Minder)",
    duration: "May 2018 – January 2023",
    location: "Remote, US",
    isCurrent: false,
    accent: "#EC4899",
    accentRgb: "236, 72, 153",
    type: ["Consumer", "Mobile", "Social"],
    metric: { value: "Acquired", label: "by Match Group in 2023" },
    bullets: [
      "Grew from QA into a core product design role over 5 years, ultimately owning the end-to-end redesign before acquisition by Match Group.",
      "Led the full redesign — onboarding, home tab, explore tab, matches, chat, events, settings, and a deeply detailed profile editing system.",
      "Designed a comprehensive onboarding flow across dozens of screens covering signup, profile setup, preferences, and identity attributes.",
      "Ran A/B tests on pricing models and feature rollouts including ghost mode and voice telegrams to guide product decisions.",
    ],
  },
  {
    title: "Product Designer",
    company: "Truebill / Rocket Money",
    duration: "Sept 2018 – Nov 2019",
    location: "Remote, US",
    isCurrent: false,
    accent: "#10B981",
    accentRgb: "16, 185, 129",
    type: ["Fintech", "Consumer", "Mobile"],
    metric: { value: "-18%", label: "Drop-off on payment journeys" },
    bullets: [
      "Conducted usability studies on financial workflows, improving data accuracy by 22%.",
      "Redesigned payment and authorisation journeys, reducing drop-offs by 18%.",
      "Collaborated with PMs and engineering to ship high-quality dashboards and transaction experiences.",
    ],
  },
];

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

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
      if (maxScroll <= 0) { setActiveIndex(0); return; }
      const scrolledInside = Math.min(Math.max(window.scrollY - sectionTop, 0), maxScroll);
      const progress = scrolledInside / maxScroll;
      const index = Math.min(experiences.length - 1, Math.floor(progress * experiences.length + 0.0001));
      setActiveIndex(index);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const activeExp = experiences[activeIndex];
  const sectionHeightVh = experiences.length * 110;

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative"
      style={{ height: `${sectionHeightVh}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">

        {/* Heading */}
        <div className="container pt-8 pb-3">
          <BlurText
            text="Experience"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-center text-3xl md:text-5xl font-medium"
          />
        </div>

        {/* Progress dots — accent-colored */}
        <div className="flex justify-center gap-2 pb-3">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="rounded-full transition-all duration-500"
              style={{
                width: idx === activeIndex ? "28px" : "6px",
                height: "6px",
                backgroundColor: idx === activeIndex
                  ? exp.accent
                  : "rgba(255,255,255,0.15)",
                transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
              }}
            />
          ))}
        </div>

        {/* Cards area */}
        <div className="flex-1 flex items-center min-h-0">
          <div className="container px-4 md:px-6">
            <div className="relative flex items-center justify-center" style={{ minHeight: "420px" }}>

              {/* Ambient background glow — changes with accent */}
              <div
                className="pointer-events-none absolute inset-0 -z-10 transition-all duration-700"
                style={{
                  background: `radial-gradient(ellipse 60% 50% at 20% 30%, rgba(${activeExp.accentRgb}, 0.07), transparent 70%)`,
                }}
              />

              {experiences.map((exp, idx) => {
                const isActive = idx === activeIndex;

                return (
                  <motion.div
                    key={exp.company}
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 28,
                      scale: isActive ? 1 : 0.96,
                    }}
                    transition={{ duration: 0.55, ease: easeOut }}
                    style={{ pointerEvents: isActive ? "auto" : "none" }}
                  >
                    <div className="max-w-5xl w-full">
                      {/* Card */}
                      <div
                        className="relative rounded-[1.75rem] overflow-hidden shadow-[0_48px_120px_rgba(0,0,0,0.95)]"
                        style={{
                          background: `radial-gradient(ellipse 80% 60% at 0% 0%, rgba(${exp.accentRgb}, 0.09) 0%, #08090d 55%)`,
                          border: `1px solid rgba(${exp.accentRgb}, 0.18)`,
                        }}
                      >
                        {/* Top accent stripe */}
                        <div
                          className="h-[2px] w-full"
                          style={{
                            background: `linear-gradient(to right, ${exp.accent}, rgba(${exp.accentRgb}, 0.1), transparent)`,
                          }}
                        />

                        <div className="px-7 pt-6 pb-7 md:px-10 md:pt-7 md:pb-8">

                          {/* ── Header row ── */}
                          <div className="flex items-start justify-between gap-4 mb-5">

                            {/* Left: role info */}
                            <div className="flex-1 min-w-0">
                              {/* Role index + current badge */}
                              <div className="flex items-center gap-2 mb-2">
                                <span
                                  className="text-[0.65rem] font-mono tracking-[0.25em] uppercase"
                                  style={{ color: exp.accent }}
                                >
                                  {String(idx + 1).padStart(2, "0")} / {String(experiences.length).padStart(2, "0")}
                                </span>
                                {exp.isCurrent && (
                                  <span
                                    className="px-2 py-0.5 rounded-full text-[0.6rem] font-semibold tracking-wider uppercase"
                                    style={{
                                      background: `rgba(${exp.accentRgb}, 0.15)`,
                                      color: exp.accent,
                                      border: `1px solid rgba(${exp.accentRgb}, 0.35)`,
                                    }}
                                  >
                                    Current
                                  </span>
                                )}
                              </div>

                              {/* Company */}
                              <p
                                className="text-sm font-semibold tracking-wide mb-0.5"
                                style={{ color: exp.accent }}
                              >
                                {exp.company}
                              </p>

                              {/* Title */}
                              <h3 className="text-2xl md:text-[1.75rem] font-semibold text-white leading-tight tracking-tight">
                                {exp.title}
                              </h3>

                              {/* Duration + location */}
                              <p className="text-xs text-white/45 mt-1 tracking-wide">
                                {exp.duration} &nbsp;·&nbsp; {exp.location}
                              </p>

                              {/* Type tags */}
                              <div className="flex flex-wrap gap-1.5 mt-3">
                                {exp.type.map((tag) => (
                                  <span
                                    key={tag}
                                    className="px-2.5 py-0.5 rounded-full text-[0.65rem] tracking-wide border"
                                    style={{
                                      background: `rgba(${exp.accentRgb}, 0.07)`,
                                      borderColor: `rgba(${exp.accentRgb}, 0.2)`,
                                      color: `rgba(${exp.accentRgb}, 0.9)`,
                                    }}
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Right: metric callout */}
                            <motion.div
                              className="hidden sm:flex flex-col items-center justify-center rounded-2xl px-5 py-4 text-center flex-shrink-0 min-w-[110px]"
                              style={{
                                background: `rgba(${exp.accentRgb}, 0.08)`,
                                border: `1px solid rgba(${exp.accentRgb}, 0.22)`,
                              }}
                              animate={isActive
                                ? { opacity: 1, scale: 1 }
                                : { opacity: 0, scale: 0.88 }
                              }
                              transition={{ duration: 0.4, delay: isActive ? 0.18 : 0, ease: easeOut }}
                            >
                              <p
                                className="text-2xl md:text-3xl font-bold leading-none"
                                style={{ color: exp.accent }}
                              >
                                {exp.metric.value}
                              </p>
                              <p className="text-[0.65rem] text-white/45 mt-1.5 leading-snug max-w-[90px]">
                                {exp.metric.label}
                              </p>
                            </motion.div>
                          </div>

                          {/* Divider */}
                          <div
                            className="h-px w-full mb-5"
                            style={{
                              background: `linear-gradient(to right, rgba(${exp.accentRgb}, 0.35), rgba(${exp.accentRgb}, 0.05), transparent)`,
                            }}
                          />

                          {/* ── Bullets ── */}
                          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2.5">
                            {exp.bullets.map((bullet, i) => (
                              <motion.li
                                key={i}
                                className="flex gap-3 text-sm text-white/70 leading-relaxed"
                                animate={isActive
                                  ? { opacity: 1, x: 0 }
                                  : { opacity: 0, x: -10 }
                                }
                                transition={{
                                  duration: 0.42,
                                  delay: isActive ? 0.2 + i * 0.07 : 0,
                                  ease: easeOut,
                                }}
                              >
                                <span
                                  className="mt-[7px] h-1.5 w-1.5 rounded-sm flex-shrink-0"
                                  style={{ backgroundColor: exp.accent }}
                                />
                                <span>{bullet}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
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
