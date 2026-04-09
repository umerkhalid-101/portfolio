"use client";

import React from "react";
import Link from "next/link";
import { ShinyButton } from "./magicui/shiny-button";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Building a Subscription Handling System",
    role: "Product design • UX • Design system",
    description:
      "Designing a loyalty app around real user behavior, giving businesses control over campaigns, retention, and insights without overwhelming the interface.",
    buttonText: "View Case Study",
    image: "/assets/cs_1.png",
    bgColor: "#050912",
    gradientClass: "purple-radial-bg",
    url: "/projects/zewards",
  },
  {
    title: "Revamping a Crypto portfolio dashboard",
    role: "Product design • Data visualization",
    description:
      "Reworking a multi chain portfolio into a clearer, calmer dashboard with opinionated hierarchy, better alerting, and flows built for real traders.",
    buttonText: "View Case Study",
    image: "/assets/cs_2.png",
    bgColor: "#04080F",
    gradientClass: "blue-radial-bg",
    url: "/projects/folionomics",
  },
  {
    title: "Modernising a corporate website",
    role: "UX • Information architecture",
    description:
      "Helping Illumina tell a sharper story about Microsoft and Dynamics 365 by restructuring content, messaging, and page flows into something human.",
    buttonText: "View Case Study",
    image: "/assets/cs_3.png",
    bgColor: "#050910",
    gradientClass: "red-radial-bg",
    url: "/projects/illumina",
  },
  {
    title: "Jobbit – Operations platform",
    role: "Product design • Systems thinking",
    description:
      "Turning scattered workflows into a coherent workspace where teams, tasks, partnerships, and purchasing all live in one mental model.",
    buttonText: "View Case Study",
    image: "/assets/cs_4.svg",
    bgColor: "#030A0E",
    gradientClass: "green-radial-bg",
    url: "/projects/jobbit",
  },
];

const easeOut = [0.16, 1, 0.3, 1];

function CaseStudies() {
  return (
    <section
      id="casestudies"
      className="relative mx-auto my-32 max-w-[1300px] px-4 md:px-6"
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.7fr]">
        {/* Left rail – stays fixed while scrolling the right side */}
        <motion.div
          className="lg:sticky lg:top-28 self-start space-y-6"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] uppercase tracking-[0.25em] text-slate-300">
            Selected work
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Interfaces for
              <br />
              messy, real products.
            </h2>
            <p className="text-sm md:text-base text-slate-300 max-w-md">
              A set of projects where the goal was not just to make things
              pretty, but to untangle complexity, align with strategy, and
              create products people actually want to use.
            </p>
          </div>

          <div className="space-y-2 text-xs md:text-sm text-slate-400">
            <p className="font-medium text-slate-200">
              Saas • Platforms • Dashboards • Marketing sites
            </p>
            <p>Each case study breaks down context, decisions, and impact.</p>
          </div>

          {/* Vertical hint line */}
          <div className="hidden lg:block pt-6">
            <div className="h-40 w-px bg-gradient-to-b from-[#F15050] via-white/30 to-transparent" />
          </div>
        </motion.div>

        {/* Right side – tall "bands" per project */}
        <div className="space-y-10 md:space-y-14">
          {caseStudies.map((cs, index) => (
            <motion.article
              key={cs.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: index * 0.08, ease: easeOut }}
              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 via-[#05070A] to-black/80 p-[1px] shadow-[0_40px_120px_rgba(0,0,0,0.9)]"
            >
              {/* Inner card */}
              <div
                className="relative overflow-hidden rounded-[30px] bg-[#05070A]/95 px-5 py-6 md:px-8 md:py-8 lg:px-10 lg:py-9 flex flex-col md:flex-row gap-6 md:gap-10 items-stretch group hover:-translate-y-1.5 hover:shadow-[0_32px_90px_rgba(0,0,0,0.9)] transition-transform duration-200"
                style={{ backgroundColor: cs.bgColor }}
              >
                {/* Colored glow */}
                <div
                  className={`pointer-events-none absolute -inset-10 opacity-70 blur-3xl ${cs.gradientClass}`}
                />

                {/* Giant index number */}
                <div className="pointer-events-none absolute -left-4 bottom-[-40px] text-7xl md:text-8xl font-bold text-white/5 leading-none select-none">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Left: text */}
                <div className="relative z-10 flex-1 flex flex-col justify-between gap-4">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F15050]" />
                      Case study
                    </div>

                    <h3 className="text-2xl md:text-3xl font-semibold text-slate-50">
                      {cs.title}
                    </h3>

                    <p className="text-[11px] md:text-xs font-medium text-slate-300/80">
                      {cs.role}
                    </p>

                    <p className="text-sm md:text-[15px] leading-relaxed text-slate-200/90">
                      {cs.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mt-3">
                    <Link href={cs.url}>
                      <ShinyButton className="px-5 py-2.5 text-sm">
                        {cs.buttonText}
                      </ShinyButton>
                    </Link>

                    <Link
                      href={cs.url}
                      className="inline-flex items-center text-xs text-slate-200/80 hover:text-white"
                    >
                      <span className="mr-1 h-px w-6 bg-slate-400/60 group-hover:w-8 group-hover:bg-white transition-all" />
                      Open full case
                    </Link>
                  </div>
                </div>

                {/* Right: image "panel" */}
                <div className="relative z-10 w-full md:w-[45%] lg:w-[40%] flex items-center">
                  <div className="relative w-full rounded-3xl border border-white/12 bg-black/40 backdrop-blur-md overflow-hidden">
                    {/* angled highlight */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 opacity-70 mix-blend-screen" />
                    {/* image */}
                    <div className="relative h-44 md:h-56 lg:h-64 flex items-center justify-center">
                      <img
                        src={cs.image}
                        alt={cs.title}
                        className="h-full w-full object-contain transform transition-transform duration-300 group-hover:translate-y-1 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
