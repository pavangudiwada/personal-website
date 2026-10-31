"use client"

import { createContext, useContext, useEffect, useState } from "react"
import Image from "next/image"
import { DotPattern } from "@/components/ui/dot-pattern"
import { Highlighter } from "@/components/ui/highlighter"
import { Marquee } from "@/components/ui/marquee"
import { Terminal, TypingAnimation, AnimatedSpan } from "@/components/ui/terminal"
import { WordRotate } from "@/components/ui/word-rotate"
import { TOOLS, isFileTool, type Tool } from "@/lib/tools"

const Ready = createContext(false)

// Flip to true once real posts exist; the "Things I've shipped" list shows otherwise.
const SHOW_WRITING = false
const ACCENT = "#B7014D"

function Mark({ children, type = "underline" }: { children: React.ReactNode; type?: "underline" | "highlight" }) {
  const ready = useContext(Ready)
  if (!ready) return <span>{children}</span>
  return (
    <Highlighter
      action={type}
      color={type === "highlight" ? "#B7014D1F" : ACCENT}
      strokeWidth={1.5}
      iterations={1}
      padding={type === "highlight" ? 2 : 1}
      animationDuration={500}
      multiline
    >
      {children}
    </Highlighter>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-14 mb-3.5 font-sans text-[13px] font-medium text-[var(--muted)]">{children}</h2>
}

function Row({ t, d, href = "#" }: { t: string; d: string; href?: string }) {
  return (
    <li className="flex items-baseline justify-between gap-4 border-t border-[var(--rule)] py-2.5 last:border-b">
      <a href={href} className="min-w-0">{t}</a>
      <span className="shrink-0 font-sans text-sm text-[var(--muted)]">{d}</span>
    </li>
  )
}

function ToolMark({ tool }: { tool: Tool }) {
  if (isFileTool(tool)) {
    return (
      <Image
        src={tool.src}
        alt={tool.title}
        title={tool.title}
        width={24}
        height={24}
        unoptimized
        className="size-6 shrink-0 object-contain"
      />
    )
  }

  return (
    <svg
      role="img"
      aria-label={tool.title}
      viewBox="0 0 24 24"
      width={24}
      height={24}
      className="size-6 shrink-0"
      fill={`#${tool.icon.hex}`}
    >
      <title>{tool.title}</title>
      <path d={tool.icon.path} />
    </svg>
  )
}

function QuoteCard({
  quote,
  name,
  title,
  href,
  photo,
}: {
  quote: string
  name: string
  title: string
  href: string
  photo: string
}) {
  const body = quote.startsWith("“") ? quote.slice(1) : quote

  return (
    <figure className="quote-card mt-5 rounded-2xl border border-[var(--rule)] bg-white px-5 pt-4 pb-5">
      <blockquote className="font-serif text-[18px] leading-[1.6] italic text-[var(--ink)] sm:text-[19px]">
        <span aria-hidden="true" className="mr-1 inline-block translate-y-[0.12em] font-serif text-[2.75rem] leading-none text-[#B7014D] not-italic">
          “
        </span>
        {body}
      </blockquote>
      <figcaption className="mt-4">
        <a href={href} aria-label={`${name}, ${title}`} className="flex items-center gap-3">
          <Image
            src={photo}
            alt=""
            width={80}
            height={80}
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="min-w-0 font-sans text-[14px] leading-tight">
            <span className="quote-name block font-medium text-[var(--ink)]">{name}</span>
            <span className="mt-0.5 block font-normal text-[var(--muted)]">{title}</span>
          </span>
        </a>
      </figcaption>
    </figure>
  )
}

export default function Home() {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    document.fonts.ready.then(() => setTimeout(() => setReady(true), 50))
  }, [])

  return (
    <Ready.Provider value={ready}>
      <div className="relative min-h-screen overflow-x-hidden">
        <DotPattern
          width={22}
          height={22}
          cr={1}
          className="fill-[#16110F]/15 [mask-image:radial-gradient(520px_circle_at_50%_0%,white,transparent)]"
        />
        <main className="prose-a relative mx-auto max-w-[600px] px-[22px] pt-16 pb-20 font-serif text-[18px] leading-[1.65] sm:px-6 sm:pt-28 sm:text-[19px] [&_p]:relative">
          <div className="flex items-center gap-3.5 font-sans text-[15px] leading-tight font-medium">
            <Image
              src="/pavan.jpg"
              alt="Pavan Gudiwada"
              width={88}
              height={88}
              priority
              className="h-11 w-11 rounded-full object-cover"
            />
            <div>
              Pavan Gudiwada
              <span className="block font-normal text-[var(--muted)]">Technical product marketing</span>
            </div>
          </div>

          <p className="mt-12">
            I do product marketing for <Mark>developer tools</Mark>. I used to be an engineer, so I write for the people who will <Mark type="highlight">actually run the thing</Mark>: what it does, where it fits, and why it’s worth their time.
          </p>
          <div className="mt-4 flex items-baseline gap-1.5 font-sans text-[15px] text-[var(--muted)]">
            I work on
            <span className="inline-block w-[10em] font-medium text-[var(--ink)]">
              <WordRotate
                className="text-[15px] leading-normal font-medium whitespace-nowrap text-[#B7014D]"
                words={["Positioning", "Messaging", "Copywriting", "Product Marketing"]}
              />
            </span>
          </div>
          <p className="mt-4">
            Right now I’m at <a href="https://victoriametrics.com">VictoriaMetrics</a>. Before that I was the founding DevRel at <a href="https://home.robusta.dev">Robusta</a>.
          </p>

          <Terminal className="mt-10 max-w-full font-mono text-[13px]" sequence>
            <TypingAnimation>$ whoami</TypingAnimation>
            <AnimatedSpan className="text-[var(--muted)]">pavan, ex-engineer, devtool marketer</AnimatedSpan>
            <TypingAnimation>$ ls ~/desk</TypingAnimation>
            <AnimatedSpan className="text-[var(--muted)]">cursor/  claude/  obsidian/  notion/</AnimatedSpan>
            <TypingAnimation>$ cat now-reading.txt</TypingAnimation>
            <AnimatedSpan className="text-[var(--muted)]">Obviously Awesome, April Dunford</AnimatedSpan>
            <TypingAnimation>$ git log -1 --oneline</TypingAnimation>
            <AnimatedSpan style={{ color: ACCENT }}>a1f9c2e rewrite homepage (again)</AnimatedSpan>
          </Terminal>

          {SHOW_WRITING ? (
            <>
              <SectionTitle>Writing</SectionTitle>
              <ul>
                <Row t="Positioning is an engineering problem" d="Soon" />
                <Row t="What makes a devtool launch post land" d="Soon" />
                <Row t="Comparison pages engineers actually trust" d="Soon" />
              </ul>
            </>
          ) : (
            <>
              <SectionTitle>Things I’ve shipped</SectionTitle>
              <ul>
                <Row t="Kubernetes Guides" d="Visual guides" href="https://github.com/pavangudiwada/kubernetesguides" />
                <Row t="VictoriaTraces README" d="Docs design" href="https://github.com/pavangudiwada/victoriatraces-readme-options" />
                <Row t="Salary time calculator" d="Side project" href="https://github.com/pavangudiwada/salary-time-calc" />
                <Row t="Generative art with Go" d="For fun" href="https://github.com/pavangudiwada/generative-art-with-go" />
              </ul>
            </>
          )}

          <p className="mt-14">
            <em>Work with me.</em> Building a devtool that people love once they try it, but <Mark>can’t explain in one sentence</Mark>? That’s my favourite kind of problem. Tell me what you’re building and I’ll tell you honestly whether I can help.{" "}
            <a href="mailto:hello@pavangudiwada.dev" style={{ color: ACCENT, textDecorationColor: ACCENT }}>Say hi</a>.
          </p>

          <SectionTitle>Kind words</SectionTitle>
          <QuoteCard
            quote="“He has a natural instinct for product thinking and developer experience. He understands how developers think, what frustrates them, and what makes a tool genuinely useful.”"
            name="Natan Yellin"
            title="CEO, Robusta.dev"
            href="https://www.linkedin.com/in/natanyellin"
            photo="/people/natan-yellin.jpg"
          />
          <QuoteCard
            quote="“He already had great knowledge but remains keen to both learn and share… he has passion and enthusiasm in equal measure and is a joy to collaborate with.”"
            name="Andy Hawkins"
            title="CTO, DevOps Solutions"
            href="https://www.linkedin.com/in/andy-hawkins-306848"
            photo="/people/andy-hawkins.jpg"
          />

          <SectionTitle>Tools I reach for</SectionTitle>
          <div className="relative">
            <Marquee pauseOnHover className="[--duration:40s] [--gap:2rem] items-center p-0">
              {TOOLS.map((tool) => (
                <ToolMark key={tool.title} tool={tool} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white" />
          </div>

          <div className="mt-14 flex gap-5 font-sans text-[15px] text-[var(--muted)]">
            <a href="https://x.com/pavangudiwada_">X</a>
            <a href="https://linkedin.com/in/pavangudiwada">LinkedIn</a>
            <a href="https://github.com/pavangudiwada">GitHub</a>
            <a href="mailto:hello@pavangudiwada.dev">Email</a>
          </div>
        </main>
      </div>
    </Ready.Provider>
  )
}
