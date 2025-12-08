'use client'

import BlurText from '@/components/magicui/blurtext'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useState } from 'react'

function Folionomics() {
  const [activePhase, setActivePhase] = useState<'discover' | 'shape' | 'design' | 'validate'>('discover')
  const [openDecision, setOpenDecision] = useState<number | null>(0)

  return (
    <div className="bg-[#000307] w-full text-[#D1DAE0]">
      <div className="container mx-auto px-4 md:px-6">

        {/* ================= HERO / INTRO ================= */}
        <section className="pt-16 md:pt-24 pb-12 md:pb-16">
          <div className="relative overflow-hidden rounded-3xl border border-[#193821] bg-gradient-to-br from-[#020705] via-[#020908] to-[#020304] px-6 md:px-10 py-8 md:py-12">
            {/* soft glows */}
            <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#9FE870]/15 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 -bottom-10 h-72 w-72 rounded-full bg-[#00F5A0]/14 blur-3xl" />
            <div className="pointer-events-none absolute left-1/3 -bottom-24 h-56 w-56 rounded-full bg-[#46FFB9]/12 blur-3xl" />

            <div className="relative space-y-8 max-w-5xl">
              {/* badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#28472E] bg-white/5 px-4 py-1 text-[10px] md:text-xs uppercase tracking-[0.22em] text-[#C5FFD5]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#9FE870] animate-pulse" />
                FolioNomics case study
              </div>

              {/* headline with subtle glow wrapper */}
              <div className="relative">
                <div className="pointer-events-none absolute -inset-6 bg-gradient-to-r from-[#9FE870]/22 via-[#C8FFB6]/16 to-[#58F3A3]/22 blur-xl" />
                <BlurText
                  text="Redesigning a wallet viewer into a strategy first portfolio product"
                  className="relative font-roco text-3xl md:text-5xl lg:text-6xl leading-tight text-[#F4FFE9]"
                  delay={120}
                  animateBy="words"
                  direction="top"
                />
              </div>

              {/* short story */}
              <p className="text-sm md:text-base text-[#C2CDD5] max-w-2xl">
                FolioNomics began as a way to see balances per wallet. As the product designer, I reframed it
                around strategies, risk, and runway so investors can see how their capital is deployed across
                chains instead of staring at isolated addresses.
              </p>

              {/* stats row */}
              <div className="grid gap-3 md:grid-cols-3 text-xs md:text-sm">
                <StatCard
                  label="My role"
                  title="End to end product design"
                  body="Research, information architecture, flows, and visual system."
                />
                <StatCard
                  label="Core shift"
                  title="Wallets to strategies"
                  body="Portfolios became the primary object. Wallets became liquidity sources feeding them."
                />
                <StatCard
                  label="Product impact"
                  title="Faster first insight"
                  body="New users reach a strategy view in one session instead of bouncing between wallets."
                />
              </div>

              {/* CTA */}
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  size="lg"
                  asChild
                  className="rounded-full bg-gradient-to-r from-[#9FE870] via-[#C5FFB5] to-[#58F3A3] text-black hover:brightness-110 shadow-[0_0_30px_rgba(159,232,112,0.35)]"
                >
                  <a
                    href="https://drive.google.com/file/d/1AtYlghDFvGvxp-AVv1USQkDCRupmxTV1/view"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View user flow
                  </a>
                </Button>
                <div className="flex flex-col text-[11px] md:text-xs text-[#9CAAB5]">
                  <span>Designed for multi chain investors</span>
                  <span>who care about risk and runway, not just balances.</span>
                </div>
              </div>
            </div>

            {/* bottom accent line */}
            <div className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-[#9FE870]/60 to-transparent" />
          </div>
        </section>

        {/* SNAPSHOT STRIP */}
        <section className="mt-2 md:mt-4 rounded-3xl border border-[#1A3221] bg-gradient-to-r from-[#040B07] via-[#020604] to-[#030806] px-5 py-6 md:px-10 md:py-8">
          <div className="grid gap-6 md:grid-cols-4 text-sm md:text-base">
            <MetaBlock label="Product type" value="Consumer crypto portfolio" />
            <MetaBlock label="Focus" value="Strategy views and risk clarity" />
            <MetaBlock label="Team setup" value="Founder, engineer, product designer" />
            <MetaBlock label="My ownership" value="Problem framing to usability tests" />
          </div>
        </section>

        {/* PRODUCT SNAPSHOT – MOVED BANNER IMAGE */}
        <section className="py-12 md:py-16 max-w-6xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1.1fr] items-center">
            {/* text side */}
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.22em] text-[#B7F8C9]">
                Product snapshot
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#F4FFE9]">
                One tracker for all chains, organized by strategy not chaos.
              </h2>
              <p className="text-sm md:text-base text-[#C2CDD5] max-w-md">
                The redesigned home view gives investors a single place to see portfolios, risk bands, and chain exposure.
                Same on chain data, but finally mapped to how people think about their capital: long term bets, experiments,
                yield, and reserves.
              </p>

              <div className="rounded-2xl border border-[#234428] bg-black/75 px-4 py-3 text-[11px] md:text-xs space-y-1 max-w-md">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#B7F8C9]">
                  What this view unlocks
                </p>
                <p className="font-medium text-[#E4F6EB]">
                  One place to see strategies, risk bands, and chain exposure instead of fragmented wallet views.
                </p>
                <p className="text-[10px] text-[#9CAAB5]">
                  It turns FolioNomics from a wallet viewer into a portfolio tool that supports real decisions.
                </p>
              </div>
            </div>

            {/* banner image side */}
            <div className="relative rounded-3xl border border-[#234428] bg-gradient-to-br from-[#050B07] via-[#050705] to-[#020303] p-3 md:p-4 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.8)]">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#9FE870]/18 via-transparent to-[#00F5A0]/18 blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src="/assets/projects/fn_1.svg"
                  alt="FolioNomics hero banner"
                  width={1200}
                  height={720}
                  className="w-full h-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-[#9FE870]/25" />
              </div>
            </div>
          </div>
        </section>

        {/* IMPACT SUMMARY */}
        <section className="py-4 md:py-8 max-w-6xl mx-auto relative">
          <div className="pointer-events-none absolute -right-32 top-0 h-64 w-64 rounded-full bg-[#75F39E]/12 blur-3xl" />

          <h2 className="text-xl md:text-2xl font-semibold mb-2 bg-gradient-to-r from-[#E7FFE9] to-[#9FE870] bg-clip-text text-transparent">
            What my work unlocked for the product
          </h2>
          <p className="text-sm md:text-base text-[#9CAAB5] mb-6 max-w-2xl">
            This was not a cosmetic refresh. The redesign changed the mental model of the product and set it up to
            support serious use cases like tax, reporting, and performance analysis.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <ImpactCard
              title="Strategy centered model"
              body="Portfolios now mirror how investors think about capital long horizon, high risk, yield, and reserves instead of how wallets are set up."
              tag="Product thinking"
            />
            <ImpactCard
              title="Onboarding to insight"
              body="Flows guide users from wallet connection to a meaningful strategy view so they can answer real questions without exporting data."
              tag="Flow design"
            />
            <ImpactCard
              title="Foundation for growth"
              body="The same structure that powers current views can support tax, reporting, and exchange imports without forcing a redesign."
              tag="Systems design"
            />
          </div>
        </section>

        {/* PROBLEM AND INSIGHTS */}
        <section className="pb-16 md:pb-20 max-w-6xl mx-auto relative">
          <div className="pointer-events-none absolute -left-20 top-10 h-60 w-60 rounded-full bg-[#9FE870]/10 blur-3xl" />

          <div className="grid gap-10 md:grid-cols-[1.7fr_1.3fr] items-start">
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-[#E9FFE8] to-[#9FE870] bg-clip-text text-transparent">
                Problem before the redesign
              </h2>
              <p className="text-lg text-[#D3E3D8]">
                FolioNomics could show what sat inside each wallet, but it did not match how people think about
                their crypto wealth. Serious users were exporting data into sheets just to understand which bets
                were long term, which were experiments, and where their actual risk lived.
              </p>
              <p className="text-lg text-[#C2CDD5]">
                The product answered where a token lived instead of what the capital was doing and how fragile a
                strategy was. That meant the interface was informational but did not support decisions.
              </p>
            </div>

            <div className="rounded-2xl border border-[#253D2B] bg-gradient-to-b from-[#050C08] via-[#040805] to-[#030503] p-5 space-y-3 shadow-[0_18px_40px_rgba(0,0,0,0.7)]">
              <p className="text-xs uppercase tracking-[0.18em] text-[#B7F8C9]">
                What I learned from research
              </p>
              <ul className="text-sm md:text-base text-[#D8E8DD] space-y-2 list-disc list-inside">
                <li>People group assets into strategies, not into chains or individual wallets.</li>
                <li>Most do not know their true concentration risk until it is visualized at portfolio level.</li>
                <li>Plain language risk bands work better than dense metrics for non institutional users.</li>
                <li>Being honest about data quality builds more trust than pretending every number is perfect.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* BEFORE / AFTER SNAPS */}
        <section className="my-6 md:my-10 max-w-6xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2">
            <ScreenCard
              src="/assets/projects/fn_2.svg"
              alt="Portfolio breakdown"
              label="Strategy list ordered by capital and risk band, not just by wallet address."
            />
            <ScreenCard
              src="/assets/projects/fn_3.avif"
              alt="Cross chain view"
              label="Cross chain exposure that makes spreadsheets unnecessary for basic risk checks."
            />
          </div>
        </section>

        {/* PROCESS WITH PHASES */}
        <section className="py-16 md:py-20 max-w-6xl mx-auto relative">
          <div className="pointer-events-none absolute right-0 -top-10 h-60 w-60 rounded-full bg-[#67F39C]/10 blur-3xl" />

          <h2 className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-[#ECFFE9] to-[#9FE870] bg-clip-text text-transparent">
            How I approached the redesign
          </h2>
          <p className="mt-3 text-lg text-[#CFE0D5] max-w-3xl">
            I treated this as a systems and decision making problem first and a visual problem second.
            Each step aligned the data model, flows, and interface to how investors talk about their money.
          </p>

          <div className="mt-8 flex flex-wrap gap-2 text-xs md:text-sm">
            <PhasePill
              label="Discover"
              active={activePhase === 'discover'}
              onClick={() => setActivePhase('discover')}
            />
            <PhasePill
              label="Shape"
              active={activePhase === 'shape'}
              onClick={() => setActivePhase('shape')}
            />
            <PhasePill
              label="Design"
              active={activePhase === 'design'}
              onClick={() => setActivePhase('design')}
            />
            <PhasePill
              label="Validate"
              active={activePhase === 'validate'}
              onClick={() => setActivePhase('validate')}
            />
          </div>

          <PhaseContent phase={activePhase} />
        </section>

        {/* DESIGN DECISIONS */}
        <section className="py-12 md:py-16 max-w-6xl mx-auto relative">
          <div className="pointer-events-none absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-[#9FE870]/10 blur-3xl" />

          <h2 className="text-2xl md:text-3xl font-semibold mb-3 bg-gradient-to-r from-[#F0FFE9] to-[#9FE870] bg-clip-text text-transparent">
            Design decisions that changed how people use the product
          </h2>
          <p className="text-sm md:text-base text-[#9CAAB5] mb-6 max-w-3xl">
            These decisions did not just change screens. They changed the questions investors could answer inside
            FolioNomics without running back to spreadsheets.
          </p>

          <div className="space-y-4">
            {decisions.map((decision, index) => (
              <DecisionRow
                key={decision.title}
                index={index}
                isOpen={openDecision === index}
                onToggle={() => setOpenDecision(openDecision === index ? null : index)}
                {...decision}
              />
            ))}
          </div>
        </section>

        {/* FINTECH CONSTRAINTS AND STACK */}
        <section className="my-12 md:my-16 max-w-6xl mx-auto relative">
          <div className="pointer-events-none absolute right-[-80px] top-16 h-72 w-72 rounded-full bg-[#74F29E]/12 blur-3xl" />

          <div className="grid gap-8 md:grid-cols-[1.5fr_1.3fr] items-start">
            <div className="rounded-2xl border border-[#223928] bg-gradient-to-b from-[#050E07] via-[#040805] to-[#020403] p-6 space-y-3 shadow-[0_22px_50px_rgba(0,0,0,0.75)]">
              <h3 className="text-xl font-semibold text-[#E9FFE9]">
                Designing for fintech reality
              </h3>
              <p className="text-sm md:text-base text-[#CFE0D5]">
                Crypto data is noisy. Rules vary by region. People mix centralized and decentralized holdings.
                I made design choices that respect this reality instead of pretending it is a clean lab.
              </p>
              <ul className="text-sm md:text-base text-[#DDEADD] space-y-2 list-disc list-inside mt-2">
                <li>Clear risk bands and concentration flags instead of complex ratios.</li>
                <li>Separate confirmed on chain data from estimates so trust is preserved.</li>
                <li>Keep tax and reporting out of core flows, but shape the model so they can be added later.</li>
                <li>Frame portfolios so exchange balances and off chain assets can plug in through the same concept.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#253D2B] bg-gradient-to-b from-[#050E08] via-[#050905] to-[#020403] p-6 space-y-3 shadow-[0_22px_50px_rgba(0,0,0,0.75)]">
              <h3 className="text-xl font-semibold text-[#E9FFE9]">
                Stack and prototyping approach
              </h3>
              <p className="text-sm md:text-base text-[#CFE0D5]">
                I worked with realistic synthetic portfolios and price behavior so we could see how the
                interface holds up when markets move, not only in calm states.
              </p>
              <p className="text-sm md:text-base text-[#9CAAB5]">
                The design system is modular so future modules like tax, reporting, or deeper analytics can
                share the same hierarchy and patterns instead of feeling bolted on.
              </p>
              <div className="mt-4 rounded-2xl bg-[#111611] border border-[#304533] px-6 md:px-8 py-5 flex flex-wrap items-center justify-center gap-6">
                <img src="/assets/projects/stack1.avif" alt="stack" className="w-[44px] h-[44px]" />
                <img src="/assets/projects/stack2.avif" alt="stack" className="w-[28px] h-[44px]" />
                <img src="/assets/projects/stack3.png" alt="stack" className="w-[54px] h-[44px]" />
                <img src="/assets/projects/stack4.png" alt="stack" className="w-[44px] h-[44px]" />
                <img src="/assets/projects/stack5.webp" alt="stack" className="w-[44px] h-[44px]" />
              </div>
            </div>
          </div>
        </section>

        {/* FULL WIDTH IMAGE */}
        <section className="my-10 md:my-16">
          <div className="relative w-full h-[220px] md:h-[520px] overflow-hidden rounded-3xl border border-[#244029] bg-gradient-to-b from-[#050F08] via-[#050706] to-[#010202]">
            <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-[#9FE870]/18 via-transparent to-transparent" />
            <Image
              src="/assets/projects/fn_4.svg"
              alt="FolioNomics detailed screens"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* CONCLUSION */}
        <section className="py-16 md:py-20 max-w-6xl mx-auto relative">
          <div className="pointer-events-none absolute left-0 -top-10 h-56 w-56 rounded-full bg-[#9FE870]/10 blur-3xl" />

          <h2 className="text-3xl md:text-5xl mb-6 font-semibold bg-gradient-to-r from-[#F4FFE9] to-[#9FE870] bg-clip-text text-transparent">
            What this project says about me
          </h2>
          <div className="grid gap-8 md:grid-cols-[1.6fr_1.1fr] items-start">
            <p className="text-lg md:text-xl text-[#DCEBDD]">
              FolioNomics is where I shifted a product from nice charts to real portfolio thinking. I did not only
              tune interfaces. I reshaped the model from addresses to strategies, from balance snapshots to
              risk and runway, and from single screens to a structure that can support tax, reporting, and serious
              analytics without confusing users.
            </p>
            <div className="rounded-2xl border border-[#243E29] bg-gradient-to-b from-[#050E08] via-[#040805] to-[#030403] p-5 text-sm text-[#D8E7DC] space-y-2 shadow-[0_20px_50px_rgba(0,0,0,0.75)]">
              <p className="text-xs uppercase tracking-[0.18em] text-[#B7F8C9] mb-1">
                As a product designer, this highlights
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Comfort working with portfolio, risk, and strategy concepts.</li>
                <li>Ability to convert messy user behavior into a clear information model.</li>
                <li>Habit of balancing user clarity, data reality, and future product bets.</li>
                <li>Focus on product impact rather than only surface polish.</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

/* SMALL REUSABLE PIECES */

type MetaBlockProps = {
  label: string
  value: string
}

function MetaBlock({ label, value }: MetaBlockProps) {
  return (
    <div>
      <p className="text-[#E7F5EB] text-xs md:text-sm uppercase tracking-[0.18em] mb-1">{label}</p>
      <p className="text-[#CFE0D5]">{value}</p>
    </div>
  )
}

type StatCardProps = {
  label: string
  title: string
  body: string
}

function StatCard({ label, title, body }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-[#234128] bg-gradient-to-b from-[#050D07] via-[#050805] to-[#020403] p-4 shadow-[0_10px_24px_rgba(0,0,0,0.7)] hover:translate-y-[-4px] transition-transform duration-200">
      <p className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#B7F8C9] mb-1">
        {label}
      </p>
      <p className="font-semibold text-[#F3FFF4]">
        {title}
      </p>
      <p className="mt-1 text-[#9CAAB5]">
        {body}
      </p>
    </div>
  )
}

type ScreenCardProps = {
  src: string
  alt: string
  label: string
}

function ScreenCard({ src, alt, label }: ScreenCardProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-[#243E29] bg-gradient-to-b from-[#050E08] via-[#050706] to-[#020303] shadow-[0_24px_60px_rgba(0,0,0,0.75)] group hover:translate-y-[-6px] hover:scale-[1.01] transition-transform duration-300">
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-white/6 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
      />
      <div className="absolute bottom-3 left-3 rounded-full bg-black/75 px-3 py-1 text-xs backdrop-blur flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#9FE870]" />
        <span>{label}</span>
      </div>
    </div>
  )
}

/* PHASES */

type PhasePillProps = {
  label: string
  active: boolean
  onClick: () => void
}

function PhasePill({ label, active, onClick }: PhasePillProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 rounded-full border text-xs md:text-sm transition-all ${
        active
          ? 'bg-gradient-to-r from-[#9FE870] via-[#C5FFB5] to-[#58F3A3] text-black border-transparent shadow-[0_0_20px_rgba(159,232,112,0.5)]'
          : 'bg-transparent text-[#C2CDD5] border-white/15 hover:border-[#9FE870]'
      }`}
    >
      {label}
    </button>
  )
}

type PhaseContentProps = {
  phase: 'discover' | 'shape' | 'design' | 'validate'
}

function PhaseContent({ phase }: PhaseContentProps) {
  if (phase === 'discover') {
    return (
      <div className="mt-8 rounded-2xl border border-[#234128] bg-gradient-to-b from-[#050D07] via-[#050806] to-[#020403] p-6 space-y-3 text-sm md:text-base text-[#D8E7DC] shadow-[0_18px_40px_rgba(0,0,0,0.75)]">
        <h3 className="text-lg md:text-xl font-semibold mb-1 text-[#F2FFE9]">
          Discover: understand how people really manage crypto
        </h3>
        <p>
          I spoke with investors who spread capital across exchanges, self custody wallets, and DeFi protocols.
          The goal was to capture the questions they ask themselves every week, not only the tools they use.
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Which strategies they mentally separate when they think about holdings.</li>
          <li>How they decide when to rebalance, exit, or add to a position.</li>
          <li>Where they see the full picture of risk and runway today.</li>
        </ul>
        <p className="mt-2">
          Almost everyone had a clear mental model of their portfolio, but almost nobody had a product that reflected
          it. That gap became the starting point.
        </p>
      </div>
    )
  }

  if (phase === 'shape') {
    return (
      <div className="mt-8 rounded-2xl border border-[#234128] bg-gradient-to-b from-[#050D07] via-[#050806] to-[#020403] p-6 space-y-3 text-sm md:text-base text-[#D8E7DC] shadow-[0_18px_40px_rgba(0,0,0,0.75)]">
        <h3 className="text-lg md:text-xl font-semibold mb-1 text-[#F2FFE9]">
          Shape: reframe the core object model
        </h3>
        <p>
          I worked with the team to reshape the model of the product around strategies instead of addresses.
          This was the key step that unlocked the rest of the design.
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Portfolios became first class objects with a purpose and a risk band.</li>
          <li>Wallets became sources of liquidity that can feed one or more portfolios.</li>
          <li>Chains moved from the top level to attributes of assets and positions.</li>
        </ul>
        <p className="mt-2">
          This gave us a consistent foundation for navigation, metrics, and charts without fighting the underlying data.
        </p>
      </div>
    )
  }

  if (phase === 'design') {
    return (
      <div className="mt-8 rounded-2xl border border-[#234128] bg-gradient-to-b from-[#050D07] via-[#050806] to-[#020403] p-6 space-y-3 text-sm md:text-base text-[#D8E7DC] shadow-[0_18px_40px_rgba(0,0,0,0.75)]">
        <h3 className="text-lg md:text-xl font-semibold mb-1 text-[#F2FFE9]">
          Design: flows, risk views, and visual language
        </h3>
        <p>
          I designed flows that move users from first wallet connection to a strategy level view in as few choices as
          possible while still feeling in control.
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Guided creation of long term, high risk, yield, and reserve portfolios with simple examples.</li>
          <li>Clear distinction between funding wallets and strategy wallets.</li>
          <li>Risk and allocation views that highlight concentration without heavy jargon.</li>
        </ul>
        <p className="mt-2">
          The visual system uses a calm dark palette with color reserved for meaning performance, risk, and status
          rather than decoration.
        </p>
      </div>
    )
  }

  return (
    <div className="mt-8 rounded-2xl border border-[#234128] bg-gradient-to-b from-[#050D07] via-[#050806] to-[#020403] p-6 space-y-3 text-sm md:text-base text-[#D8E7DC] shadow-[0_18px_40px_rgba(0,0,0,0.75)]">
      <h3 className="text-lg md:text-xl font-semibold mb-1 text-[#F2FFE9]">
        Validate: see if it actually helps decisions
      </h3>
      <p>
        I ran moderated sessions with newer and experienced investors to see whether the new model helped them answer
        their own questions faster and with more confidence.
      </p>
      <ul className="list-disc list-inside space-y-2 mt-2">
        <li>Find which strategy is overexposed in under a minute.</li>
        <li>Estimate stablecoin runway for a given strategy without leaving FolioNomics.</li>
        <li>Understand cross chain exposure for a core token or theme.</li>
      </ul>
      <p className="mt-2">
        Feedback led to clearer copy, smoother defaults, and small tweaks to portfolio suggestions, but the core
        strategy first model held up well.
      </p>
    </div>
  )
}

/* IMPACT + DECISIONS */

type ImpactCardProps = {
  title: string
  body: string
  tag: string
}

function ImpactCard({ title, body, tag }: ImpactCardProps) {
  return (
    <div className="rounded-2xl border border-[#233F29] bg-gradient-to-b from-[#050E08] via-[#050706] to-[#020303] p-5 space-y-2 text-sm md:text-base shadow-[0_18px_40px_rgba(0,0,0,0.75)] hover:border-[#9FE870] hover:translate-y-[-6px] transition-all duration-200">
      <p className="text-[11px] md:text-xs uppercase tracking-[0.18em] text-[#B7F8C9]">
        {tag}
      </p>
      <h3 className="text-base md:text-lg font-semibold text-[#F5FFE9]">{title}</h3>
      <p className="text-[#CFE0D5]">
        {body}
      </p>
    </div>
  )
}

type DecisionConfig = {
  title: string
  rationale: string
  impact: string
}

const decisions: DecisionConfig[] = [
  {
    title: 'Make portfolios the primary object',
    rationale:
      'People were already thinking in terms of long term bets, high risk experiments, yield plays, and reserves. Reflecting that in the product makes it easier to map their mental model to the interface.',
    impact:
      'Investors can now reason about capital by strategy instead of jumping between wallets and chains. It also gives the team a stable base for new features.'
  },
  {
    title: 'Use simple risk bands instead of complex ratios',
    rationale:
      'Most users are not quants. They care about fragility and concentration, not about formulas. Simple bands and flags communicate risk without scaring people away.',
    impact:
      'More users engage with risk views instead of skipping them, and the team has a clear framework for adding more depth later without overwhelming new users.'
  },
  {
    title: 'Separate confirmed data from estimates',
    rationale:
      'On chain data can be delayed or partial. Treating every number as exact erodes trust. Marking estimates clearly sets better expectations.',
    impact:
      'FolioNomics feels more honest and serious. It positions the product as a tool that respects nuance instead of a dashboard that hides uncertainty behind visuals.'
  }
]

type DecisionRowProps = DecisionConfig & {
  index: number
  isOpen: boolean
  onToggle: () => void
}

function DecisionRow({ title, rationale, impact, index, isOpen, onToggle }: DecisionRowProps) {
  return (
    <div className="rounded-2xl border border-[#233F29] bg-gradient-to-b from-[#050E08] via-[#050706] to-[#020303] shadow-[0_18px_40px_rgba(0,0,0,0.75)]">
      <button
        className="w-full flex items-start gap-3 px-5 py-4 md:px-6 md:py-5 text-left"
        onClick={onToggle}
      >
        <div className="mt-1 text-xs text-[#9FE870]">{index + 1}</div>
        <div className="flex-1">
          <h3 className="text-base md:text-lg font-semibold text-[#F4FFE9]">{title}</h3>
        </div>
        <span className="ml-3 text-xl text-[#CFE0D5]">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-5 pb-4 md:px-6 md:pb-6 text-sm md:text-base text-[#D8E7DC] space-y-2 border-t border-[#234128]">
          <p className="text-xs uppercase tracking-[0.18em] text-[#B7F8C9]">
            Rationale
          </p>
          <p>{rationale}</p>
          <p className="text-xs uppercase tracking-[0.18em] text-[#B7F8C9] mt-2">
            Impact
          </p>
          <p>{impact}</p>
        </div>
      )}
    </div>
  )
}

export default Folionomics
