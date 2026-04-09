'use client'

import React from 'react'
import { ShinyButton } from './magicui/shiny-button'
import BlurText from './magicui/blurtext'
import { motion } from 'framer-motion'

const easeOut = [0.16, 1, 0.3, 1]

function Productdesigner() {
  return (
    <section className="relative py-20 md:py-28">
      {/* background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-violet-500/25 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-fuchsia-500/18 blur-3xl" />
        <div className="absolute left-1/3 bottom-[-5rem] h-64 w-64 rounded-full bg-sky-500/16 blur-3xl" />
      </div>

      <div className="container relative">
        {/* section label */}
        <motion.div
          className="flex items-center gap-3 mb-8 md:mb-10"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          <span className="h-px w-10 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-sky-400" />
          <p className="text-[11px] md:text-xs uppercase tracking-[0.22em] text-slate-400">
            Behind the case studies
          </p>
        </motion.div>

        <div className="grid gap-10 md:gap-14 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1.3fr)] items-start">
          {/* LEFT: headline + story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            {/* headline */}
            <div className="relative mb-4 md:mb-6">
              <div className="pointer-events-none absolute -inset-5 bg-gradient-to-r from-violet-500/25 via-fuchsia-500/18 to-sky-500/22 blur-xl" />
              <BlurText
                text="Product designer and UX research specialist with a systems mindset"
                className="relative text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-50 leading-tight"
                delay={120}
                animateBy="words"
                direction="top"
              />
            </div>

            {/* subline */}
            <p className="text-xs md:text-sm text-slate-400 mb-5 md:mb-6 max-w-md">
              I design digital products where research, interaction, and systems thinking all ladder up to measurable product outcomes.
            </p>

            {/* main summary */}
            <div className="space-y-4 text-sm md:text-base text-slate-300 leading-relaxed max-w-xl">
              <p>
                Product Designer and UX Research specialist with 6+ years of experience designing high impact digital
                products across SaaS, fintech and consumer platforms. Experienced in user research, usability testing,
                information architecture, prototyping, and data driven UX optimization.
              </p>
              <p>
                Known for collaborating closely with cross functional teams and translating complex user needs into
                clear product direction. Focused on designing intuitive interaction patterns, mobile first experiences,
                and scalable design systems that improve conversion, retention and overall product performance.
              </p>
            </div>

            {/* quick stats (simple, no extra chrome) */}
            <div className="mt-6 grid grid-cols-3 gap-4 text-xs md:text-sm text-slate-300 max-w-md">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500 mb-1">
                  Experience
                </p>
                <p className="text-sm md:text-base text-slate-50">
                  6+ years
                </p>
                <p className="text-[11px] text-slate-400">
                  SaaS, fintech, consumer
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500 mb-1">
                  Strength
                </p>
                <p className="text-sm md:text-base text-slate-50">
                  Research led
                </p>
                <p className="text-[11px] text-slate-400">
                  Research, testing, IA
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500 mb-1">
                  Focus
                </p>
                <p className="text-sm md:text-base text-slate-50">
                  Systems & impact
                </p>
                <p className="text-[11px] text-slate-400">
                  Conversion, retention
                </p>
              </div>
            </div>

            {/* focus chips – fewer, more intentional */}
            <div className="mt-7 flex flex-wrap gap-3">
              <ShinyButton className="bg-black px-4 py-1.5 rounded-full border border-slate-700 text-xs md:text-sm">
                SaaS · Fintech · Consumer
              </ShinyButton>
              <ShinyButton className="bg-black px-4 py-1.5 rounded-full border border-slate-700 text-xs md:text-sm">
                Research &amp; Usability Testing
              </ShinyButton>
              <ShinyButton className="bg-black px-4 py-1.5 rounded-full border border-slate-700 text-xs md:text-sm">
                Design Systems &amp; IA
              </ShinyButton>
            </div>
          </motion.div>

          {/* RIGHT: clean, scannable profile */}
          <motion.aside
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
          >
            <div className="absolute -left-6 top-0 bottom-0 hidden md:block">
              <div className="h-full w-px bg-gradient-to-b from-violet-400/80 via-fuchsia-400/60 to-sky-400/70 rounded-full" />
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950/85 px-5 py-6 md:px-6 md:py-7 shadow-[0_22px_70px_rgba(0,0,0,0.9)]">
              <p className="text-[11px] md:text-xs uppercase tracking-[0.22em] text-slate-400 mb-4">
                Working profile
              </p>

              <div className="space-y-4 text-sm md:text-base text-slate-200">
                <ProfileRow
                  label="Experience"
                  value="6+ years designing high impact SaaS, fintech, and consumer products."
                />
                <ProfileRow
                  label="Craft"
                  value="User research, usability testing, information architecture, prototyping, and data driven UX optimization."
                />
                <ProfileRow
                  label="Product lens"
                  value="Intuitive interaction patterns, mobile first experiences, and scalable design systems that move conversion and retention."
                />
                <ProfileRow
                  label="Next role"
                  value="Senior Product Designer in a growth focused, design led organization where I can lead research frameworks and shape product strategy."
                />
              </div>

              <div className="pt-4 border-t border-slate-800 mt-5">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Open to senior product design opportunities</span>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}

type ProfileRowProps = {
  label: string
  value: string
}

function ProfileRow({ label, value }: ProfileRowProps) {
  return (
    <div className="border-b border-slate-800/70 pb-3 last:border-b-0 last:pb-0">
      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500 mb-1.5">
        {label}
      </p>
      <p className="text-slate-200 text-sm md:text-[15px] leading-relaxed">
        {value}
      </p>
    </div>
  )
}

export default Productdesigner
