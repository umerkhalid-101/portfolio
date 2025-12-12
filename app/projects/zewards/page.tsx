'use client'

import BlurText from '@/components/magicui/blurtext'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Zewards() {
  return (
    <div className="relative w-full bg-[#05010B] text-slate-100">
      {/* background accents */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-60">
        <div className="absolute -top-40 left-10 h-72 w-72 rounded-full bg-violet-500/25 blur-3xl" />
        <div className="absolute top-40 -right-32 h-80 w-80 rounded-full bg-fuchsia-500/22 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/18 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 md:px-6 pb-24">
        {/* HERO */}
        <section className="pt-16 md:pt-24 pb-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1.1fr)] items-start">
            {/* LEFT TEXT AREA */}
            <div className="space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/15 px-4 py-1 text-[10px] md:text-xs uppercase tracking-[0.22em] text-violet-100 shadow-[0_0_30px_rgba(139,92,246,0.6)]">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-300" />
                Case study · Loyalty and rewards · B2B2C
              </div>

              <div className="space-y-4">
                {/* hero heading with BlurText */}
                <div className="relative">
                  <div className="pointer-events-none absolute -inset-6 bg-gradient-to-r from-violet-500/25 via-fuchsia-400/18 to-sky-400/25 blur-xl" />
                  <BlurText
                    text="Designing Zewards, a loyalty system for real world visits"
                    className="relative font-roco text-3xl md:text-5xl lg:text-6xl leading-tight text-slate-50 drop-shadow-[0_8px_24px_rgba(15,23,42,0.8)]"
                    delay={150}
                    animateBy="words"
                    direction="top"
                  />
                </div>

                <p className="text-sm md:text-base text-slate-300 max-w-2xl">
                  I led product design across the consumer app, business app, and marketing site for Zewards, a loyalty
                  and cashback platform for real world merchants. The work focused on activation, clarity, and building
                  a loyalty model that fits inside a thirty second interaction at the counter.
                </p>
              </div>

              {/* PRODUCT IMPACT METRICS */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4 transition-all duration-300 hover:border-violet-400/70 hover:shadow-[0_18px_50px_rgba(139,92,246,0.45)]">
                  <p className="text-2xl md:text-3xl font-semibold text-slate-50">
                    38%
                  </p>
                  <p className="text-xs md:text-sm text-slate-300 mt-1">
                    Increase in repeat visits
                  </p>
                  <p className="text-[10px] md:text-[11px] text-slate-500 mt-1">
                    After improving reward clarity and progress visibility
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4 transition-all duration-300 hover:border-violet-400/70 hover:shadow-[0_18px_50px_rgba(139,92,246,0.45)]">
                  <p className="text-2xl md:text-3xl font-semibold text-slate-50">
                    2.3x
                  </p>
                  <p className="text-xs md:text-sm text-slate-300 mt-1">
                    Faster first time activation
                  </p>
                  <p className="text-[10px] md:text-[11px] text-slate-500 mt-1">
                    Through a single decision onboarding flow
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4 transition-all duration-300 hover:border-violet-400/70 hover:shadow-[0_18px_50px_rgba(139,92,246,0.45)]">
                  <p className="text-2xl md:text-3xl font-semibold text-slate-50">
                    54%
                  </p>
                  <p className="text-xs md:text-sm text-slate-300 mt-1">
                    Higher reward redemption
                  </p>
                  <p className="text-[10px] md:text-[11px] text-slate-500 mt-1">
                    Driven by simpler rules and clearer next steps
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Button
                  size="lg"
                  asChild
                  className="rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-sky-500 text-white hover:opacity-95 shadow-[0_20px_55px_rgba(139,92,246,0.9)] transition-all duration-300 hover:translate-y-[1px]"
                >
                  <a
                    href="https://www.zewards.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View live product
                  </a>
                </Button>
                <p className="text-[11px] md:text-xs text-slate-400 max-w-xs">
                  Designed for everyday places built on repeat visits: coffee, lunch, groceries, and neighborhood stores.
                </p>
              </div>
            </div>

            {/* RIGHT META PANEL */}
            <aside className="rounded-3xl bg-gradient-to-b from-violet-500/40 via-fuchsia-500/40 to-sky-500/40 p-[1px] shadow-[0_26px_80px_rgba(0,0,0,0.85)]">
              <div className="h-full w-full rounded-3xl bg-slate-950/95 border border-slate-900/80 p-5 md:p-6 space-y-5">
                <MetaItem label="My role" value="End to end product design" />
                <MetaItem
                  label="Ownership"
                  value="UX strategy, research, flows, IA, interaction design, design system, handoff"
                />
                <MetaItem
                  label="Product type"
                  value="B2B2C loyalty and cashback platform"
                />
                <MetaItem
                  label="Focus"
                  value="Activation, retention, merchant adoption"
                />
              </div>
            </aside>
          </div>

          {/* Skill tags */}
          <div className="mt-8 flex flex-wrap gap-2 text-[11px] md:text-xs text-slate-300">
            <TagChip label="Product design" />
            <TagChip label="UX strategy" />
            <TagChip label="Consumer app UX" />
            <TagChip label="Merchant tools" />
            <TagChip label="Design systems" />
          </div>
        </section>

        {/* SECTION: QUICK SNAPSHOT */}
        <SectionShell eyebrow="Snapshot" title="What Zewards needed from product design.">
          <div className="grid gap-6 md:grid-cols-3 text-xs md:text-sm">
            <SnapshotCard
              title="The gap"
              body="Loyalty tools were either paper level simple or enterprise level heavy. Neither survived inside a thirty second interaction at the counter."
            />
            <SnapshotCard
              title="The opportunity"
              body="Use a QR based flow to tie real visits to rewards that feel tangible enough that people return on purpose."
            />
            <SnapshotCard
              title="My role in that"
              body="Connect consumer app, business app, and marketing site around one clear loyalty story that owners can actually repeat."
            />
          </div>
        </SectionShell>

        {/* BRANDING */}
        <BrandSection />

        {/* SECTION: PRODUCT ECOSYSTEM VISUAL */}
        <SectionShell eyebrow="Product ecosystem" title="One loyalty model expressed through three experiences.">
          <p className="text-sm md:text-base text-slate-300 max-w-3xl mb-6">
            From the start I treated Zewards as one system with three views, not three separate builds. The same
            visit based logic shows up as a consumer app for people, a business app for operators, and a website
            for decision makers.
          </p>

          <div className="group relative rounded-3xl border border-slate-800 bg-slate-950 overflow-hidden shadow-[0_32px_100px_rgba(0,0,0,0.9)] transition-transform duration-500 hover:-translate-y-1">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-violet-500/25 via-fuchsia-500/10 to-transparent" />
            <Image
              src="/assets/projects/z_1.svg"
              alt="Zewards product ecosystem overview"
              width={1440}
              height={900}
              className="w-full h-auto object-contain bg-slate-950 transition-transform duration-500 group-hover:scale-[1.02]"
              priority
            />
          </div>

          {/* surfaces strip */}
          <div className="mt-8 grid gap-4 md:grid-cols-3 text-xs md:text-sm">
            <SurfacePill
              label="Consumer app"
              body="Scan, track, and redeem rewards without reading instructions."
            />
            <SurfacePill
              label="Business app"
              body="Set campaigns, place QR touchpoints, and see what is working."
            />
            <SurfacePill
              label="Marketing site"
              body="Explain Zewards in revenue and repeat visits instead of feature lists."
            />
          </div>
        </SectionShell>

        {/* SECTION: PROBLEM AND CONTEXT */}
        <SectionShell eyebrow="Problem" title="Loyalty felt either outdated or over engineered.">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)] items-start">
            <div className="space-y-4 text-sm md:text-base text-slate-300">
              <p>
                Most loyalty stories die at the counter. Staff do not have time to explain complex rules. Customers
                are in a hurry and will not download an app they do not understand. Owners see dashboards they never
                log into after the first month.
              </p>
              <p>
                Zewards had a strong starting point. Reward real visits instead of generic points, make scanning
                trivial, and let people redeem rewards in ways that feel like real value. The challenge was to shape
                that into a product that fits inside the reality of service, not just a pitch deck.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-950/90 border border-slate-800 p-5 md:p-6 space-y-3 text-xs md:text-sm text-slate-200 shadow-[0_20px_60px_rgba(0,0,0,0.9)] transition-all duration-300 hover:border-fuchsia-400/70 hover:shadow-[0_26px_90px_rgba(236,72,153,0.35)]">
              <p className="text-[11px] uppercase tracking-[0.22em] text-violet-300">
                Constraints I designed around
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>No real training time for staff, learn as they use it on shift one.</li>
                <li>Signups that must fit inside a single visit while an order is being made.</li>
                <li>Owners who want repeat visits, not another analytics product to manage.</li>
                <li>Small engineering team, so the design system needed to be realistic to ship from.</li>
              </ul>
            </div>
          </div>
        </SectionShell>

        {/* SECTION: DESIGN STORY TIMELINE */}
        <SectionShell eyebrow="Design story" title="How I shaped Zewards from idea to product.">
          <div className="relative grid gap-6 md:grid-cols-[auto_minmax(0,1fr)]">
            {/* vertical line */}
            <div className="hidden md:flex justify-center">
              <div className="w-px bg-gradient-to-b from-violet-400/90 via-fuchsia-500/70 to-sky-500/70 rounded-full" />
            </div>

            <div className="space-y-6">
              <TimelineStep
                step="01"
                title="Start from how loyalty already behaves"
                body="Instead of imagining a perfect flow, I watched how people were already running loyalty in scrappy ways and where it was breaking."
                bullets={[
                  'Interviewed shoppers about how they track rewards and when they stop paying attention.',
                  'Spoke with owners about punch cards, ad hoc free coffees, and tools they tried and abandoned.',
                  'Mapped the end to end journey for customer, staff, and owner in a single visit and across a month.'
                ]}
              />
              <TimelineStep
                step="02"
                title="Reduce everything to one mental model"
                body="Every decision had to reinforce one simple loop that works in the real world."
                bullets={[
                  'Scan once, see progress, know what happens next, no matter which screen you are on.',
                  'Consumer app IA centered on today, progress, and reward details instead of complicated account areas.',
                  'Business app IA centered on set up, run, and understand so merchants can act without a playbook.'
                ]}
              />
              <TimelineStep
                step="03"
                title="Turn flows into a design system"
                body="Once flows were stable, I built a compact design system that could support new campaigns and features without rethinking the interface every time."
                bullets={[
                  'Figma components for navigation, cards, reward states, QR entry points, and empty states.',
                  'Design tokens for color, type, spacing, and elevation so changes stay coherent.',
                  'Documented interaction patterns for scanning feedback, redemption, and error states for the dev team.'
                ]}
              />
              <TimelineStep
                step="04"
                title="Test where friction actually shows up"
                body="I used prototypes to look for friction that would kill repeat behavior, not just visual polish."
                bullets={[
                  'Tested onboarding, first scan, and first redemption with realistic scripts.',
                  'Simplified copy and tightened hierarchy where people hesitated or second guessed rewards.',
                  'Adjusted campaign presets so merchants could launch effective loyalty without complex configuration.'
                ]}
              />
            </div>
          </div>
        </SectionShell>

        {/* SECTION: CONSUMER APP */}
        <SectionShell
          eyebrow="Consumer app"
          title="Designing the consumer app for trust, clarity, and repeat use."
        >
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)] items-start">
            {/* Story and goals */}
            <div className="space-y-6">
              <p className="text-sm md:text-base text-slate-300">
                The consumer app is where the loyalty promise either becomes a habit or disappears. I designed it
                for people who do not think of themselves as using a rewards platform. They are just picking up coffee,
                lunch, or groceries, and Zewards has a few seconds to feel trustworthy and useful.
              </p>

              <div className="grid gap-4 md:grid-cols-3 text-xs md:text-sm">
                <ConsumerGoalCard
                  label="North star"
                  title="Earn and redeem in one glance"
                  body="You should be able to open the app at the counter and know instantly what you earned and what is next."
                />
                <ConsumerGoalCard
                  label="Tone"
                  title="Bank level clarity, cafe level warmth"
                  body="The product handles money and rewards, so the language and visuals had to feel confident without feeling corporate."
                />
                <ConsumerGoalCard
                  label="Behavior"
                  title="Tiny loops, not big journeys"
                  body="Design for quick visits that repeat often instead of long sessions people never repeat."
                />
              </div>

              <div className="space-y-3">
                <p className="text-[11px] uppercase tracking-[0.22em] text-violet-300">
                  How that translates into UX decisions
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-slate-300">
                  <li>Onboarding is a single decision, not a form: join or not, with the minimum fields needed to build trust.</li>
                  <li>The home view answers three questions clearly: what did I earn, how close am I, and what should I do next.</li>
                  <li>Reward details remove fine print energy. Rules are written in language staff can repeat at the counter.</li>
                  <li>Interaction design focuses on fast confirmation around scan and redemption so people are never unsure if it worked.</li>
                </ul>
              </div>
            </div>

            {/* Visual side with staggered screens */}
            <div className="space-y-5">
              <div className="group relative rounded-3xl border border-slate-800 bg-slate-950 overflow-hidden shadow-[0_26px_80px_rgba(0,0,0,0.9)] transition-all duration-500 hover:border-violet-400/80 hover:-translate-y-1">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-violet-500/30 via-fuchsia-500/20 to-transparent" />
                <div className="grid gap-4 md:grid-cols-2 p-4 md:p-5">
                  <div className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_18px_50px_rgba(139,92,246,0.55)]">
                    <img
                      src="/assets/projects/z_5.avif"
                      alt="Zewards consumer app onboarding and wallet setup"
                      className="w-full h-auto object-contain bg-slate-950"
                    />
                  </div>
                  <div className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden flex items-center justify-center md:mt-6 transition-transform duration-500 group-hover:translate-y-1 group-hover:shadow-[0_18px_50px_rgba(56,189,248,0.45)]">
                    <img
                      src="/assets/projects/z_6.avif"
                      alt="Zewards consumer app reward details and progress"
                      className="w-full h-auto object-contain bg-slate-950"
                    />
                  </div>
                </div>
                <div className="border-t border-slate-800 px-4 md:px-5 py-3 text-xs md:text-sm text-slate-300">
                  Onboarding and reward views were designed together as one narrative: join quickly, see your reward path,
                  then get simple confirmation every time you scan.
                </div>
              </div>

              <div className="rounded-2xl bg-slate-950/90 border border-slate-800 p-4 md:p-5 text-xs md:text-sm text-slate-300 space-y-2 transition-all duration-300 hover:border-sky-400/70 hover:shadow-[0_22px_70px_rgba(56,189,248,0.35)]">
                <p className="text-[11px] uppercase tracking-[0.22em] text-violet-300">
                  Product designer takeaways
                </p>
                <p>
                  This part of the work reflects how I think about consumer UX: anchor on one clear mental model, use
                  language that people can repeat out loud, and design flows that respect short, messy, real visits
                  instead of idealized journeys.
                </p>
              </div>
            </div>
          </div>
        </SectionShell>

        {/* SECTION: BUSINESS APP */}
        <SectionShell eyebrow="Business app" title="Giving merchants control without overwhelming them.">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div className="space-y-4 text-sm md:text-base text-slate-300">
              <p>
                The Zewards Business app is used by owners and managers who are always in motion. The UX needed to
                respect that context. It had to feel like a tool they could understand in a few minutes and hand off
                to staff without docs.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Campaign creation framed in business language like repeat visits and average ticket size.</li>
                <li>QR and in store placements organized around how staff actually interact with customers.</li>
                <li>Performance overview that answers one question first: is this worth continuing.</li>
                <li>Layouts and contrast tuned for shared devices and less than ideal lighting or network conditions.</li>
              </ul>
            </div>

            <ImageCard
              src="/assets/projects/z_4.avif"
              alt="Zewards Business app campaign and dashboard views"
              label="Business app views for campaigns, QR tools, and performance that busy operators can act on quickly."
            />
          </div>
        </SectionShell>

        {/* SECTION: SYSTEM VIEWS TOGETHER */}
        <SectionShell eyebrow="System in use" title="How the system feels consistent on both sides of the counter.">
          <p className="text-sm md:text-base text-slate-300 max-w-3xl mb-6">
            Zewards only works if it feels like one product from every angle. The same story has to show up
            when a customer scans, when a staff member explains a reward, and when an owner checks performance.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <ImageCard
              src="/assets/projects/z_2.avif"
              alt="Zewards app screens side by side"
              label="Key consumer and merchant screens that share structure and visual language so Zewards feels unified."
            />
            <ImageCard
              src="/assets/projects/z_3.avif"
              alt="Zewards multi screen flows"
              label="Multi screen flows that all reinforce the same mental model: scan, see progress, understand what happens next."
            />
          </div>
        </SectionShell>

        {/* SECTION: PROCESS SUMMARY */}
        <SectionShell eyebrow="Process" title="How I worked through the problem as a product designer.">
          <div className="grid gap-6 md:grid-cols-2 text-sm md:text-base text-slate-300">
            <ProcessMiniBlock
              title="Research and framing"
              body="Combined interviews, lightweight surveys, and competitor review to frame the problem around repeat visits and trust instead of only cashback mechanics."
            />
            <ProcessMiniBlock
              title="Information architecture"
              body="Kept both apps shallow and clear. The top level focuses on the handful of actions that matter most and pushes rare actions out of the way."
            />
            <ProcessMiniBlock
              title="Prototyping and validation"
              body="Used Figma prototypes at different fidelities to test flows with real service scenarios, then tuned copy, hierarchy, and defaults based on feedback."
            />
            <ProcessMiniBlock
              title="System and handoff"
              body="Documented components, tokens, and interaction rules so engineering had a clear, realistic source of truth to build from and extend."
            />
          </div>
        </SectionShell>

        {/* SECTION: STACK */}
        <SectionShell eyebrow="Design stack" title="The tools that supported the work.">
          <div className="rounded-2xl bg-slate-900/90 border border-slate-800 px-6 py-5 md:px-8 md:py-6 flex flex-wrap md:flex-nowrap items-center justify-between gap-6 transition-all duration-300 hover:border-violet-400/80 hover:shadow-[0_24px_70px_rgba(139,92,246,0.45)]">
            <img
              src="/assets/projects/stack1.avif"
              alt="Figma"
              className="w-[50px] h-[50px] object-contain"
            />
            <img
              src="/assets/projects/stack2.avif"
              alt="Documentation and planning"
              className="w-[30px] h-[50px] object-contain"
            />
            <img
              src="/assets/projects/stack3.png"
              alt="Whiteboarding and flows"
              className="w-[60px] h-[50px] object-contain"
            />
            <img
              src="/assets/projects/stack4.png"
              alt="Team collaboration"
              className="w-[50px] h-[50px] object-contain"
            />
            <img
              src="/assets/projects/stack5.webp"
              alt="Analytics and feedback"
              className="w-[50px] h-[50px] object-contain"
            />
          </div>
        </SectionShell>

        {/* SECTION: REFLECTION */}
        <SectionShell eyebrow="Reflection" title="What Zewards says about how I design products.">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)] items-start">
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Zewards was not a cosmetic redesign. It was a chance to align product strategy, behavioral UX, and visual
              design around the reality of service. The work was to make loyalty feel light for staff, trustworthy for
              owners, and obvious for customers across multiple touchpoints.
              <br />
              <br />
              It reflects how I like to work as a product designer. Start from behavior, shape a clear mental model,
              and then build a system that a team can ship from and extend without losing the story.
            </p>

            <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 space-y-3 text-sm md:text-base text-slate-200 shadow-[0_26px_80px_rgba(0,0,0,0.9)] transition-all duration-300 hover:border-fuchsia-400/80 hover:shadow-[0_30px_90px_rgba(236,72,153,0.45)]">
              <p className="text-[11px] uppercase tracking-[0.22em] text-violet-300">
                This project shows that I
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Can lead B2B2C product design across consumer, business, and marketing experiences.</li>
                <li>Translate messy real world loyalty behavior into clear journeys and interaction patterns.</li>
                <li>Build Figma based design systems that are visually strong and pragmatic for engineering.</li>
                <li>Design for activation, repeat use, and long term clarity, not just individual screens.</li>
              </ul>
            </div>
          </div>
        </SectionShell>
      </main>
    </div>
  )
}

/* REUSABLE PIECES */

type MetaItemProps = {
  label: string
  value: string
}

function MetaItem({ label, value }: MetaItemProps) {
  return (
    <div className="space-y-1">
      <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
        {label}
      </p>
      <p className="text-xs md:text-sm text-slate-100">
        {value}
      </p>
    </div>
  )
}

type TagChipProps = {
  label: string
}

function TagChip({ label }: TagChipProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/90 px-3 py-1 text-[11px] text-slate-300 transition-all duration-200 hover:border-violet-400/80 hover:bg-slate-900 hover:text-slate-100 hover:shadow-[0_12px_30px_rgba(15,23,42,0.75)]">
      {label}
    </span>
  )
}

type SectionShellProps = {
  eyebrow: string
  title: string
  children: React.ReactNode
}

function SectionShell({ eyebrow, title, children }: SectionShellProps) {
  return (
    <section className="pt-12 md:pt-16">
      <div className="mb-6 space-y-2">
        <p className="text-[11px] uppercase tracking-[0.22em] text-violet-300">
          {eyebrow}
        </p>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-50 max-w-3xl">
          {title}
        </h2>
      </div>
      <div className="space-y-6">
        {children}
      </div>
    </section>
  )
}

type SnapshotCardProps = {
  title: string
  body: string
}

function SnapshotCard({ title, body }: SnapshotCardProps) {
  return (
    <div className="rounded-2xl bg-slate-950/90 border border-slate-800 p-5 space-y-2 transition-all duration-300 hover:border-violet-400/80 hover:shadow-[0_22px_70px_rgba(139,92,246,0.45)] hover:-translate-y-1">
      <h3 className="text-sm md:text-base font-semibold text-slate-50">
        {title}
      </h3>
      <p className="text-xs md:text-sm text-slate-300">
        {body}
      </p>
    </div>
  )
}

type SurfacePillProps = {
  label: string
  body: string
}

function SurfacePill({ label, body }: SurfacePillProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/85 px-4 py-3 space-y-1 transition-all duration-300 hover:border-sky-400/80 hover:shadow-[0_18px_55px_rgba(56,189,248,0.45)] hover:-translate-y-[2px]">
      <p className="text-[11px] uppercase tracking-[0.22em] text-violet-300">
        {label}
      </p>
      <p className="text-xs md:text-sm text-slate-300">
        {body}
      </p>
    </div>
  )
}

type TimelineStepProps = {
  step: string
  title: string
  body: string
  bullets: string[]
}

function TimelineStep({ step, title, body, bullets }: TimelineStepProps) {
  return (
    <div className="grid gap-4 md:grid-cols-[auto_minmax(0,1fr)] items-start">
      <div className="flex md:flex-col items-center md:items-center gap-2 md:gap-1 pt-1">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-violet-400/90 bg-slate-950 text-[11px] text-violet-200 shadow-[0_10px_30px_rgba(139,92,246,0.6)]">
          {step}
        </div>
      </div>
      <div className="rounded-3xl bg-slate-950/90 border border-slate-800 p-5 space-y-3 transition-all duration-300 hover:border-fuchsia-400/80 hover:shadow-[0_24px_80px_rgba(236,72,153,0.45)] hover:-translate-y-1">
        <h3 className="text-sm md:text-base font-semibold text-slate-50">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-slate-300">
          {body}
        </p>
        <ul className="list-disc list-inside text-xs md:text-sm text-slate-200 space-y-1.5">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

type ImageCardProps = {
  src: string
  alt: string
  label: string
}

function ImageCard({ src, alt, label }: ImageCardProps) {
  return (
    <div className="group w-full rounded-3xl border border-slate-800 bg-slate-950 overflow-hidden shadow-[0_28px_90px_rgba(0,0,0,0.9)] transition-all duration-500 hover:border-sky-400/80 hover:-translate-y-1">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-contain bg-slate-950 transition-transform duration-500 group-hover:scale-[1.02]"
      />
      <div className="px-4 py-3 text-xs md:text-sm text-slate-300 border-t border-slate-800">
        {label}
      </div>
    </div>
  )
}

type ProcessMiniBlockProps = {
  title: string
  body: string
}

function ProcessMiniBlock({ title, body }: ProcessMiniBlockProps) {
  return (
    <div className="rounded-2xl bg-slate-950/90 border border-slate-800 p-5 space-y-2 transition-all duration-300 hover:border-violet-400/80 hover:shadow-[0_20px_65px_rgba(139,92,246,0.45)] hover:-translate-y-1">
      <h3 className="text-sm md:text-base font-semibold text-slate-50">
        {title}
      </h3>
      <p className="text-sm md:text-base text-slate-300">
        {body}
      </p>
    </div>
  )
}

type ConsumerGoalCardProps = {
  label: string
  title: string
  body: string
}

function ConsumerGoalCard({ label, title, body }: ConsumerGoalCardProps) {
  return (
    <div className="rounded-2xl bg-slate-950/90 border border-slate-800 p-4 space-y-2 transition-all duration-300 hover:border-violet-400/80 hover:shadow-[0_18px_55px_rgba(139,92,246,0.45)] hover:-translate-y-1">
      <p className="text-[11px] uppercase tracking-[0.22em] text-violet-300">
        {label}
      </p>
      <p className="text-xs md:text-sm font-semibold text-slate-50">
        {title}
      </p>
      <p className="text-[11px] md:text-xs text-slate-300">
        {body}
      </p>
    </div>
  )
}

/* BRANDING SECTION */

function BrandSection() {
  return (
    <section className="pt-12 md:pt-16">
      <div className="mb-5 space-y-2">
        <p className="text-[11px] uppercase tracking-[0.22em] text-violet-300">
          Branding
        </p>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-50 max-w-3xl">
          How Zewards looks and feels in one place.
        </h2>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-[#050510] via-[#05000C] to-[#020314] px-5 md:px-7 py-6 md:py-8 shadow-[0_26px_90px_rgba(0,0,0,0.9)]">
        <div className="grid gap-8 md:gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.3fr)] items-start">
          {/* Left: logo and tone */}
          <div className="rounded-3xl bg-slate-950/90 border border-slate-800 px-5 md:px-7 py-6 md:py-7 space-y-5 shadow-[0_22px_70px_rgba(0,0,0,0.9)]">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.18em] text-slate-400">
              Logo
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center">
                {/* update this src to your real logo asset */}
                <Image
                  src="/assets/cs_5.svg"
                  alt="Zewards logo"
                  width={220}
                  height={60}
                  className="object-contain"
                />
              </div>
              <p className="text-xs md:text-sm text-slate-300 max-w-md">
                Zewards presents itself with a calm, confident wordmark. Color and motion come from rewards and
                progress, not from the logo shouting at people.
              </p>
            </div>

            <div className="pt-2 space-y-2">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.18em] text-slate-400">
                Brand tone
              </p>
              <p className="text-xs md:text-sm text-slate-200">
                The brand aims for bank level clarity with neighborhood warmth so it feels at home in coffee shops,
                supermarkets, and salons without looking like a heavy finance tool.
              </p>
            </div>
          </div>

          {/* Right: colors and type */}
          <div className="space-y-7">
            {/* Colors */}
            <div className="space-y-3">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.18em] text-slate-400">
                Color palette
              </p>
              <div className="grid gap-3 md:grid-cols-3">
                <BrandColorSwatch
                  name="Zewards purple"
                  hex="#6E36A7"
                  role="Primary brand color"
                />
                <BrandColorSwatch
                  name="Lavender accent"
                  hex="#9D6BD1"
                  role="Secondary accent"
                />
                <BrandColorSwatch
                  name="Midnight background"
                  hex="#0B0912"
                  role="Dark surfaces"
                />
                <BrandColorSwatch
                  name="Soft card surface"
                  hex="#F8F6FB"
                  role="Light UI surfaces"
                />
                <BrandColorSwatch
                  name="Subtle border"
                  hex="#D4CBDD"
                  role="Neutral borders"
                />
                <BrandColorSwatch
                  name="Mauve highlight"
                  hex="#A87C9E"
                  role="Highlight elements"
                />
              </div>
            </div>

            {/* Typography */}
            <div className="space-y-3">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.18em] text-slate-400">
                Typography
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <TypeCard
                  label="Display"
                  name="Poppins Bold"
                  usage="Headlines, hero copy, and key promotional moments."
                  className="font-poppins-bold"
                />
                <TypeCard
                  label="Body"
                  name="Inter"
                  usage="Body text, labels, and system UI."
                  className="font-sans"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type BrandColorSwatchProps = {
  name: string
  hex: string
  role: string
}

function BrandColorSwatch({ name, hex, role }: BrandColorSwatchProps) {
  return (
    <div className="space-y-2 text-xs md:text-sm">
      <div
        className="w-full h-16 md:h-20 rounded-2xl border border-slate-800 shadow-[0_18px_55px_rgba(0,0,0,0.9)]"
        style={{ backgroundColor: hex }}
      />
      <div className="flex flex-col">
        <span className="text-slate-100 font-medium">
          {name}
        </span>
        <span className="text-slate-400 text-[11px] uppercase tracking-[0.16em]">
          {hex} · {role}
        </span>
      </div>
    </div>
  )
}

type TypeCardProps = {
  label: string
  name: string
  usage: string
  className?: string
}

function TypeCard({ label, name, usage, className }: TypeCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/90 px-4 py-3 space-y-1.5 shadow-[0_18px_55px_rgba(0,0,0,0.9)]">
      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
        {label}
      </p>
      <p className={`text-slate-50 text-base md:text-lg ${className ?? ''}`}>
        {name}
      </p>
      <p className="text-[11px] md:text-xs text-slate-300">
        {usage}
      </p>
    </div>
  )
}

export default Zewards
