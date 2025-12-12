'use client'

import BlurText from '@/components/magicui/blurtext'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import Link from "next/link"

function JobbitCaseStudy() {
  return (
    <div className="relative min-h-screen w-full bg-[#05030A] text-slate-100">
      {/* Ambient background using brand colors */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(246,223,188,0.16),_transparent_60%),radial-gradient(circle_at_80%_20%,_rgba(230,159,82,0.18),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(230,159,82,0.12),_transparent_55%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent" />
      </div>

      {/* Page chrome */}
      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 md:px-6 pb-24">
        {/* HEADER BAR */}
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between pt-6 md:pt-8 pb-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#05030A]/15 border border-[#05030A] text-xs font-semibold text-[#05030A] ">
               
            </div>
            <div className="space-y-0.5">
              <p className="text-xs md:text-sm font-medium tracking-tight">
                
              </p>
              <p className="text-[11px] text-slate-400">
                 
              </p>
            </div>
          </div>

          {/* no tags here anymore */}
        </header>

        {/* HERO */}
        <section className="pt-10 md:pt-14 pb-12 md:pb-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)] items-start">
            {/* LEFT: STORY */}
            <div className="space-y-7">
              <div className="space-y-4">
                <BlurText
                  text="Turning scattered operations into one shared workspace"
                  className="font-roco text-3xl md:text-5xl lg:text-[2.8rem] leading-tight text-slate-50 drop-shadow-[0_12px_32px_rgba(15,23,42,0.75)]"
                  delay={130}
                  animateBy="words"
                  direction="top"
                />

                {/* TAGS MOVED TO HERO */}
                <div className="flex flex-wrap gap-2">
                  <TagPill>Case study</TagPill>
                  <TagPill>Work OS</TagPill>
                  <TagPill>Ops and delivery</TagPill>
                </div>

                <p className="text-sm md:text-base text-slate-300 max-w-xl">
                  Jobbit connects teams, tasks, purchasing, and supply chain events into a single operating view.
                  I led product design across the web app so operations leads can see real status and unblock work
                  without juggling a wall of different tools.
                </p>
              </div>

              {/* QUICK META */}
              <div className="grid gap-4 md:grid-cols-3 text-[11px] md:text-xs text-slate-300">
                <MetaItem label="Role" value="Lead product designer" />
                <MetaItem label="Scope" value="Discovery, UX strategy, IA, flows, UI, design system" />
                <MetaItem label="For" value="Teams in installations, services, and multi vendor work" />
              </div>

              {/* METRICS STRIP */}
              <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
                <MetricChip
                  label="Time to reliable overview"
                  value="40% less"
                  note="Less chasing people for updates"
                />
                <MetricChip
                  label="Shadow spreadsheets"
                  value="60% less"
                  note="Teams kept Jobbit as their source of truth"
                />
                <MetricChip
                  label="Tool adoption"
                  value="3 times higher"
                  note="Ops, team leads, and vendors stayed in the product"
                />
              </div>

              {/* CTAS */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href="https://drive.google.com/file/d/1wQJdjXbYZQaUncHOhpC-MOmYhawY9RKs/view?usp=drive_link">
              <Button
                size="lg"
                className="rounded-full bg-[#E69F52] text-slate-950 hover:bg-[#f0a75c] shadow-[0_18px_48px_rgba(230,159,82,0.7)]"
              >
                View main user flow
              </Button>
            </Link>
            
                <p className="text-[11px] md:text-xs text-slate-400 max-w-xs">
                  Built as a first version of a work OS, not a one off tool for a single team.
                </p>
              </div>
            </div>

            {/* RIGHT: HERO PANEL */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#E69F52]/20 via-[#F6DFBC]/10 to-transparent border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.85)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(246,223,188,0.22),_transparent_58%)] pointer-events-none" />
                <div className="relative p-4 md:p-5 space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-[#F6DFBC]">
                        Ops workspace
                      </p>
                      <p className="text-[11px] md:text-xs text-slate-200">
                        Where projects, vendors, and timing line up
                      </p>
                    </div>
                    <span className="rounded-full border border-[#F6DFBC]/70 bg-[#F6DFBC]/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#F6DFBC]">
                      core view
                    </span>
                  </div>

                  <div className="relative mt-3 h-[220px] md:h-[260px] rounded-2xl border border-slate-800/80 bg-slate-950 overflow-hidden">
                    <Image
                      src="/assets/projects/j_1.svg"
                      alt="Jobbit main workspace with boards and timelines"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                <div className="relative border-t border-white/10 px-4 md:px-5 py-3 text-[11px] md:text-xs text-slate-300 bg-black/40">
                  The primary Jobbit workspace mixes boards, lists, and critical paths in one canvas so people are not
                  switching between different products to understand a project.
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2 text-[11px] md:text-xs">
                <MiniHighlight
                  label="Company profile"
                  value="10 to 50 people, multi vendor operations, hybrid teams"
                />
                <MiniHighlight
                  label="Implementation goal"
                  value="Replace slide decks, side spreadsheets, and status meetings with one shared view"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SNAPSHOT ROW */}
        <section className="pt-4 pb-14 border-t border-white/10">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.5fr)] items-start">
            <div className="space-y-3">
              <Eyebrow>Project snapshot</Eyebrow>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
                A console for teams who care about projects, vendors, and timing at the same time.
              </h2>
              <p className="text-sm md:text-base text-slate-300">
                Jobbit is used by teams who ship work in the physical world. They need to know what is in progress,
                what is blocked, and where money and vendors are involved, without combing through five separate tools.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3 text-xs md:text-sm">
              <SnapshotCard
                title="Team reality"
                body="Status lives in chat, plans in slides, money in email, and delivery dates in vendor portals."
              />
              <SnapshotCard
                title="Product ambition"
                body="One operating view that shows work, dependencies, and supplier risk in a way people actually trust."
              />
              <SnapshotCard
                title="My impact"
                body="Reframed Jobbit from a feature set into a system, then designed flows and UI that feel calm to use."
              />
            </div>
          </div>
        </section>

        {/* SYSTEM STRIP */}
        <section className="pb-16">
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 shadow-[0_32px_100px_rgba(0,0,0,0.9)]">
            <div className="grid gap-0 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-stretch">
              <div className="p-5 md:p-7 space-y-4 border-b border-slate-800 md:border-b-0 md:border-r">
                <Eyebrow faint>System view</Eyebrow>
                <h2 className="text-lg md:text-xl font-semibold text-slate-50">
                  One model of work expressed in three views
                </h2>
                <p className="text-xs md:text-sm text-slate-300">
                  Jobbit is not three products. It is one model of work that shows up as:
                </p>
                <ul className="mt-2 space-y-2 text-xs md:text-sm text-slate-200 list-disc list-inside">
                  <li>Team spaces for day to day execution.</li>
                  <li>An operations view for planning and critical paths.</li>
                  <li>Vendor views that focus on their part of the plan.</li>
                </ul>
                <p className="text-[11px] md:text-xs text-slate-400 pt-2">
                  That model shaped everything from information architecture and naming to how boards, timelines, and
                  detail panes behave.
                </p>
              </div>
              <div className="relative h-[220px] md:h-full bg-black">
                <Image
                  src="/assets/projects/j_2.svg"
                  alt="Jobbit team board and operations timeline"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

{/* BRANDING SECTION */}
<section className="pb-16 border-t border-white/10 pt-10">
  <div className="mb-5 space-y-2">
    <Eyebrow>Branding</Eyebrow>
    <h2 className="text-xl md:text-2xl font-semibold text-slate-50 max-w-3xl">
      A warm, operational brand built around focus and clarity.
    </h2>
  </div>

  <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-[#120C05] via-[#08040A] to-[#05030A] px-5 md:px-7 py-6 md:py-8 shadow-[0_26px_90px_rgba(0,0,0,0.9)]">
    <div className="grid gap-8 md:gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.3fr)] items-start">
      {/* Logo + tone */}
      <div className="rounded-3xl bg-black/40 border border-slate-800 px-5 md:px-7 py-6 md:py-7 space-y-5 shadow-[0_22px_70px_rgba(0,0,0,0.9)]">
        <p className="text-[10px] md:text-xs uppercase tracking-[0.18em] text-slate-400">
          Logo
        </p>

       <div className="flex items-center gap-3">
          <Image
            src="/assets/cs_4.svg"
            alt="Jobbit logo"
            width={240}
            height={80}
            className="object-contain"
          />
        </div>

        <div className="pt-3 space-y-2">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.18em] text-slate-400">
            Brand tone
          </p>
          <p className="text-xs md:text-sm text-slate-200">
            Clear enough for operations, friendly enough for day to day teams. The interface uses dark
            surfaces with warm accents so attention goes to the work, not the chrome.
          </p>
        </div>
      </div>

      {/* Colors + type */}
      <div className="space-y-6">
        <div className="space-y-3">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.18em] text-slate-400">
            Color palette
          </p>
          <div className="grid gap-3 md:grid-cols-3">
            <BrandColorSwatch
              name="Jobbit orange"
              hex="#E69F52"
              role="Primary accent and CTAs"
            />
            <BrandColorSwatch
              name="Soft sand"
              hex="#F6DFBC"
              role="Highlights and subtle glows"
            />
            <BrandColorSwatch
              name="Deep slate"
              hex="#05030A"
              role="Background and app surfaces"
            />
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.18em] text-slate-400">
            Typography
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <TypeCard
              label="Display"
              name="Poppins / Roco"
              usage="Headlines and key narrative moments."
            />
            <TypeCard
              label="Body"
              name="Inter"
              usage="Body copy, labels, and UI text where clarity matters."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* CHALLENGE + APPROACH */}
        <section className="pb-16 border-t border-white/10 pt-10">
          <div className="grid gap-10 md:grid-cols-2 items-start">
            <div className="space-y-4">
              <Eyebrow>Challenge</Eyebrow>
              <h2 className="text-lg md:text-xl font-semibold text-slate-50">
                Work, money, and time were split across tools that did not share context.
              </h2>
              <p className="text-sm md:text-base text-slate-300">
                Teams used classic boards for tasks, email for purchase orders, and vendor tools for delivery dates.
                That meant there was no single place to answer simple questions like what is blocking this project,
                what depends on that delivery, or what is at risk this week.
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
                <li>Project tools focused on tasks but ignored purchasing and timelines.</li>
                <li>Finance and vendor tools knew about money but not about project context.</li>
                <li>Ops leads relied on private spreadsheets as the unofficial source of truth.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <Eyebrow>Design approach</Eyebrow>
              <h2 className="text-lg md:text-xl font-semibold text-slate-50">
                Start with one operating model, then design everything to support it.
              </h2>
              <p className="text-sm md:text-base text-slate-300">
                I treated Jobbit as an operating console instead of another project board. Every part of the
                product is a different angle on the same story: what are we doing, who is involved, and what might slip.
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
                <li>Define a shared vocabulary across work, money, and time.</li>
                <li>Keep the information architecture shallow and predictable.</li>
                <li>Use a quiet, intentional visual system so signal stands out when it matters.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* KEY FLOWS */}
        <section className="pb-16 border-t border-white/10 pt-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <Eyebrow>Key flows</Eyebrow>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
                Three flows the product needs to make effortless.
              </h2>
            </div>
            <p className="text-[11px] md:text-xs text-slate-400 max-w-sm">
              I framed the work around a few core loops instead of a list of screens. If these flows feel natural, the
              rest of the product earns the right to exist.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <FlowCard
              label="Flow 01"
              title="A team plans and runs work"
              body="Boards and lists that show ownership, blockers, and how work rolls up to a bigger initiative."
              bullets={[
                'Shared status model in board, list, and timeline views.',
                'Inline updates with side panels instead of separate pages.',
                'Saved views for different disciplines on the same workstream.'
              ]}
            />
            <FlowCard
              label="Flow 02"
              title="Ops links work to purchasing"
              body="Operations leads see which tasks depend on which orders and approvals."
              bullets={[
                'Tasks and milestones own POs and vendor commitments.',
                'Risk surfaces when delivery dates drift against milestones.',
                'Approvals show who is blocking and what the impact is.'
              ]}
            />
            <FlowCard
              label="Flow 03"
              title="Vendors deliver with context"
              body="Vendors get just enough of the picture to deliver reliably without wading through noise."
              bullets={[
                'Narrow views with only the projects and items that matter to them.',
                'Simple timeline and status instead of another complex portal.',
                'Clear, concrete next steps for every item they own.'
              ]}
            />
          </div>
        </section>

        {/* PROCESS GRID */}
        <section className="pb-16 border-t border-white/10 pt-10">
          <Eyebrow>Process</Eyebrow>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-50 mb-6">
            How I worked from vague idea to a shippable system.
          </h2>

          <div className="grid gap-6 md:grid-cols-4 text-xs md:text-sm">
            <ProcessBlock
              title="01 Understand reality"
              bullets={[
                'Interviews with operations leads, project managers, and vendor coordinators.',
                'Shadowed planning sessions, weekly check ins, and fire drills.',
                'Mapped which tools claimed to be the source of truth and which ones actually were.'
              ]}
            />
            <ProcessBlock
              title="02 Shape the model"
              bullets={[
                'Defined one concept of work that covers tasks, money, and time.',
                'Simplified overlapping terms into a shared vocabulary the team can repeat.',
                'Explored different information architectures and tested them against real scenarios.'
              ]}
            />
            <ProcessBlock
              title="03 Prototype and stress test"
              bullets={[
                'Built flows that simulate messy weeks, not perfect days.',
                'Looked for any point where ownership, state, or risk was unclear.',
                'Used feedback to adjust hierarchy, layout, and wording instead of just colors.'
              ]}
            />
            <ProcessBlock
              title="04 System and handoff"
              bullets={[
                'Component library for boards, timelines, and detail panes.',
                'Design tokens for color, spacing, and elevation tied to meaning.',
                'Interaction patterns and edge cases documented for engineering.'
              ]}
            />
          </div>
        </section>

        {/* FINAL IMAGE + REFLECTION */}
        <section className="pb-20 border-t border-white/10 pt-10">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1.2fr)] items-start">
            <div className="space-y-4">
              <Eyebrow>Reflection</Eyebrow>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
                The real design work was about reducing noise, not adding power.
              </h2>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                Jobbit could have turned into a loud, high contrast control room. Instead, I worked to make it feel like
                a calm, trustworthy place to understand what is happening. The value is not in showing everything. It is
                in showing the right things with just enough detail to act.
              </p>
              <p className="text-sm md:text-base text-slate-300">
                This project shows how I handle complex B2B products. Start from behavior, define one mental model that
                fits that behavior, then build a system around it that teams can actually live in for years.
              </p>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-5 space-y-2 text-sm md:text-base text-slate-200">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#E69F52]">
                  This project highlights that I
                </p>
                <ul className="list-disc list-inside space-y-2 text-xs md:text-sm">
                  <li>Can lead end to end design for complex, multi surface products.</li>
                  <li>Translate messy operational reality into one understandable system.</li>
                  <li>Design visual languages that feel calm without losing hierarchy.</li>
                  <li>Build design systems that engineering can extend without losing the story.</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative h-[220px] md:h-[320px] rounded-3xl border border-slate-800 bg-slate-950 overflow-hidden shadow-[0_28px_90px_rgba(0,0,0,0.9)]">
                <Image
                  src="/assets/projects/j_3.svg"
                  alt="Jobbit operations timeline with tasks and supply chain events"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs md:text-sm text-slate-300">
                The operations timeline pulls project work, approvals, and supply events into one place so risk is
                visible early instead of surfacing in a last minute call.
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

/* REUSABLE PIECES */

type TagPillProps = {
  children: React.ReactNode
}

function TagPill({ children }: TagPillProps) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-slate-600 bg-black/30 px-3 py-1 text-[11px] text-slate-100">
      <span className="h-1.5 w-1.5 rounded-full bg-[#E69F52]" />
      <span>{children}</span>
    </span>
  )
}

type MetaItemProps = {
  label: string
  value: string
}

function MetaItem({ label, value }: MetaItemProps) {
  return (
    <div className="space-y-0.5">
      <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
        {label}
      </p>
      <p className="text-[11px] md:text-xs text-slate-100">
        {value}
      </p>
    </div>
  )
}

type MetricChipProps = {
  label: string
  value: string
  note: string
}

function MetricChip({ label, value, note }: MetricChipProps) {
  return (
    <div className="min-w-[180px] rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 flex flex-col gap-1 shadow-[0_14px_40px_rgba(15,23,42,0.85)]">
      <p className="text-sm md:text-base font-semibold text-[#F6DFBC]">
        {value}
      </p>
      <p className="text-[11px] md:text-xs text-slate-200">
        {label}
      </p>
      <p className="text-[10px] text-slate-500">
        {note}
      </p>
    </div>
  )
}

type MiniHighlightProps = {
  label: string
  value: string
}

function MiniHighlight({ label, value }: MiniHighlightProps) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-black/40 px-4 py-3">
      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
        {label}
      </p>
      <p className="text-[11px] md:text-xs text-slate-100 mt-1">
        {value}
      </p>
    </div>
  )
}

type EyebrowProps = {
  children: React.ReactNode
  faint?: boolean
}

function Eyebrow({ children, faint }: EyebrowProps) {
  return (
    <p
      className={
        faint
          ? 'text-[11px] uppercase tracking-[0.2em] text-[#F6DFBC] mb-1'
          : 'text-[11px] uppercase tracking-[0.22em] text-[#E69F52] mb-1'
      }
    >
      {children}
    </p>
  )
}

type SnapshotCardProps = {
  title: string
  body: string
}

function SnapshotCard({ title, body }: SnapshotCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-black/40 p-5 space-y-2">
      <h3 className="text-sm md:text-base font-semibold text-slate-50">
        {title}
      </h3>
      <p className="text-xs md:text-sm text-slate-300">
        {body}
      </p>
    </div>
  )
}

type FlowCardProps = {
  label: string
  title: string
  body: string
  bullets: string[]
}

function FlowCard({ label, title, body, bullets }: FlowCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-black/45 p-5 space-y-3 shadow-[0_18px_60px_rgba(0,0,0,0.75)]">
      <p className="text-[10px] uppercase tracking-[0.2em] text-[#E69F52]">
        {label}
      </p>
      <h3 className="text-sm md:text-base font-semibold text-slate-50">
        {title}
      </h3>
      <p className="text-xs md:text-sm text-slate-300">
        {body}
      </p>
      <ul className="list-disc list-inside space-y-1.5 text-xs md:text-sm text-slate-300">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  )
}

type ProcessBlockProps = {
  title: string
  bullets: string[]
}

function ProcessBlock({ title, bullets }: ProcessBlockProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-black/45 p-5 space-y-2 shadow-[0_18px_60px_rgba(0,0,0,0.7)]">
      <h3 className="text-sm md:text-base font-semibold text-slate-50">
        {title}
      </h3>
      <ul className="list-disc list-inside space-y-1.5 text-xs md:text-sm text-slate-300">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  )
}

/* Branding helpers */

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
}

function TypeCard({ label, name, usage }: TypeCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/90 px-4 py-3 space-y-1.5 shadow-[0_18px_55px_rgba(0,0,0,0.9)]">
      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
        {label}
      </p>
      <p className="text-slate-50 text-base md:text-lg">
        {name}
      </p>
      <p className="text-[11px] md:text-xs text-slate-300">
        {usage}
      </p>
    </div>
  )
}

export default JobbitCaseStudy
