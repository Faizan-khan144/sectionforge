import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  Check,
  Cpu,
  Copy,
  Layers,
  Loader2,
  PenLine,
  Scan,
  Terminal,
} from 'lucide-react'
import { Reveal, CountUp } from './Motion.jsx'

const codeLines = [
  `
  export function CloneCard() {`,
  `    const data = useForge().section("hero");
  const model = data.model; // 92% match`,
  `
    return (
  <section className="relative py-20 px-6">
    <div className="mx-auto max-w-3xl text-center">
      <p className="eyebrow text-xs">0% to 100% in hours</p>
      <h1 className="font-display text-4xl font-bold">
        {model.heading}
      </h1>
      <p className="mt-4 text-muted">{model.sub}</p>
      <div className="mt-8 flex justify-center gap-3">
        <Button size="lg">{model.cta}</Button>
        <Button variant="ghost" size="lg">
          {model.ghost}
        </Button>
      </div>
    </div>
  </section>
  );`,
  `  };`,
]

const checkmarks = [
  'Reusable components, not flat HTML',
  'Tailwind, CSS modules or plain inline',
  'Design tokens mapped automatically',
]

function Typewriter({ lines }) {
  const [done, setDone] = useState(0)
  const [char, setChar] = useState(0)
  const [phase, setPhase] = useState('typing')

  useEffect(() => {
    if (phase === 'recording') {
      setChar(0)
      setDone(0)
      setPhase('typing')
    }
  }, [phase])

  useEffect(() => {
    if (phase !== 'typing') return
    const line = lines[done]
    if (!line) {
      setPhase('done')
      return
    }
    if (char < line.length) {
      const t = setTimeout(() => setChar((c) => c + 1), 13)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setDone((d) => d + 1)
      setChar(0)
    }, 120)
    return () => clearTimeout(t)
  }, [phase, done, char, lines])

  return (
    <pre className="text-[12.5px] leading-[1.55] text-mist">
      <div className="flex items-center justify-between border-b border-edge/70 px-4 py-2.5">
        <span className="flex items-center gap-1.5 text-[11px] text-fog">
          <Terminal size={13} />
          forge clone://live-site — react
        </span>
        <span className="flex items-center gap-2">
          {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
            <span key={c} className="h-2.5 w-2.5 rounded-full" style={{ background: c }} />
          ))}
        </span>
      </div>
      <code className="block overflow-hidden p-4">
        {done > 0 && <span className="text-fog/60">{lines[0]}</span>}
        {(done > 1 || (done === 1 && char > 0)) && (
          <span className="text-fog/60">{lines[1]}</span>
        )}
        {(done > 2 || (done === 2 && char > 0)) && (
          <span className="text-fog/60">{lines[2]}</span>
        )}
        <span className="text-mist">
          {lines[done]?.slice(0, char)}
          {phase === 'typing' && <span className="cursor-blink" />}
          {phase === 'done' && <span className="text-volt"> ✓</span>}
        </span>
      </code>
    </pre>
  )
}

function MockPage({ scanned }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-white text-left">
      <div className="flex items-center gap-1.5 border-b border-slate-200 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="ml-3 flex-1 rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-400">
          envato-remake.dev
        </span>
      </div>

      <nav className="flex items-center justify-between px-6 py-4">
        <span className="font-display text-sm font-bold text-slate-800">Logomark</span>
        <div className="flex gap-4">
          {['Features', 'Pricing', 'Docs'].map((n) => (
            <span key={n} className="text-[11px] text-slate-500">
              {n}
            </span>
          ))}
        </div>
        <span className="rounded-full bg-slate-900 px-3 py-1.5 text-[10px] font-semibold text-white">
          Get started
        </span>
      </nav>

      <div className="px-6 pt-6">
        <span className="inline-block rounded-full bg-violet-100 px-2.5 py-1 text-[10px] font-semibold text-violet-700">
          Changelog
        </span>
        <h3 className="font-display mt-3 text-[22px] leading-tight font-bold text-slate-900">
          The tool your team will
          <br />
          actually want to open
        </h3>
        <p className="mt-2 max-w-[240px] text-[11px] leading-relaxed text-slate-500">
          Ship boring software faster. Connected to the stack you already own.
        </p>
        <div className="mt-4 flex gap-2">
          <span className="rounded-lg bg-emerald-500 px-3 py-2 text-[10px] font-semibold text-white">
            Start free
          </span>
          <span className="rounded-lg border border-slate-300 px-3 py-2 text-[10px] font-semibold text-slate-600">
            Talk to sales
          </span>
        </div>
        <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-3 pb-4">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <span
                key={i}
                className="h-6 w-6 rounded-full border-2 border-white"
                style={{ background: ['#c084fc', '#38bdf8', '#fb7185'][i - 1] }}
              />
            ))}
          </div>
          <span className="text-[10px] text-slate-500">
            Loved by <b className="text-slate-700">2,104 teams</b>
          </span>
        </div>
      </div>

      {scanned && (
        <div
          className="absolute inset-x-0 top-0 h-16 border-2 border-ember/80 bg-ember/10 backdrop-blur-[1px]"
          style={{ animation: 'scan 2.6s ease-in-out infinite' }}
        >
          <span className="absolute top-1/2 left-2 -translate-y-1/2 rounded bg-ember px-1.5 py-0.5 text-[9px] font-bold text-white">
            HERO ×
          </span>
        </div>
      )}
    </div>
  )
}

export default function Hero() {
  const [phase, setPhase] = useState('ready')
  const [copied, setCopied] = useState(false)
  const [result, setResult] = useState(false)
  const stageRef = useRef(null)

  useEffect(() => {
    if (phase !== 'run') return
    const t = setTimeout(() => {
      setResult(true)
      setCopied(false)
      stageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }, 1100)
    return () => clearTimeout(t)
  }, [phase])

  const start = () => {
    if (phase === 'running') return
    setPhase('running')
    setResult(false)
    const t = setTimeout(() => setPhase('run'), 80)
    return () => clearTimeout(t)
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(codeLines.join('\n'))
    } catch {
      /* ignored */
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="grid-bg absolute inset-0" />
      <div className="pointer-events-none absolute top-[-12rem] left-1/2 h-[30rem] w-[48rem] -translate-x-1/2 rounded-full bg-ember/[0.09] blur-[110px]" />
      <div className="pointer-events-none absolute bottom-[-10rem] right-[-6rem] h-[24rem] w-[24rem] rounded-full bg-volt/[0.05] blur-[100px]" />

      <div className="wrap relative">
        <div className="mx-auto max-w-[52rem] text-center">
          <Reveal>
            <a
              href="#workbench"
              className="group inline-flex items-center gap-2 rounded-full border border-edge/70 bg-coal/80 px-4 py-1.5 text-[12.5px] text-mist backdrop-blur transition-colors hover:border-ember/60"
            >
              <span className="live-dot h-1.5 w-1.5 rounded-full bg-volt" />
              New: full-page mode — now clones entire layouts
              <ArrowRight size={13} className="text-ember transition-transform group-hover:translate-x-0.5" />
            </a>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="font-display mt-7 text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.04] font-bold tracking-[-0.03em]">
              Turn any live site into{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-ember via-ember-hot to-spark bg-clip-text text-transparent">
                  your code
                </span>
                <svg
                  className="absolute -bottom-1 left-0 h-2.5 w-full text-ember/70"
                  viewBox="0 0 200 9"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 7c40-5 156-5 196 0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-fog sm:text-base">
              Point SectionForge at any URL. It detects every section, scrapes the
              styles, and hands you a clean, editable component — React, Tailwind or
              plain HTML. No photoshop, no screenshots, no pixel-hunting.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
              <button
                type="button"
                onClick={start}
                disabled={phase === 'running'}
                className="group inline-flex items-center gap-2 rounded-full bg-ember px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-ember-hot hover:shadow-[0_14px_44px_-10px_rgba(255,107,44,0.8)] disabled:pointer-events-none disabled:opacity-70"
              >
                {phase === 'running' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Cloning…
                  </>
                ) : (
                  <>
                    <Scan size={16} />
                    Clone a live site
                  </>
                )}
              </button>
              <a
                href="#how"
                className="inline-flex items-center gap-2 rounded-full border border-edge px-7 py-3.5 text-sm font-semibold text-paper transition-all duration-300 hover:border-fog/60 hover:bg-edge/50"
              >
                How it works
              </a>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <div className="mx-auto mt-7 grid max-w-lg grid-cols-3 gap-6 border-t border-edge/70 pt-6">
              {[
                { icon: Layers, k: <CountUp to={97} suffix="%" />, v: 'avg. style match' },
                { icon: Cpu, k: <CountUp to={4} suffix="s" />, v: 'to detect a section' },
                { icon: PenLine, k: <CountUp to={0} suffix="" />, v: 'manual CSS needed' },
              ].map((s) => (
                <div key={s.v}>
                  <s.icon size={16} className="mx-auto text-ember" strokeWidth={1.8} />
                  <p className="font-display mt-2 text-xl font-bold text-paper">{s.k}</p>
                  <p className="mt-0.5 text-[11px] text-fog">{s.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div ref={stageRef} className="relative mx-auto mt-16 max-w-4xl">
          <Reveal delay={150}>
            <div className="relative rounded-3xl border border-edge/80 bg-coal/90 p-7 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)] backdrop-blur sm:p-9">
              <div className="pointer-events-none absolute top-[-1px] left-8 h-px w-40 border-run"
                style={{
                  background: 'linear-gradient(90deg, transparent, var(--color-ember), transparent)',
                }}
              />

              <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                  <div className="flex items-center justify-between">
                    <p className="font-display text-sm font-semibold text-mist">Live target</p>
                    <span
                      className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                        result
                          ? 'bg-volt/10 text-volt'
                          : phase === 'running'
                            ? 'bg-ember/10 text-ember-hot'
                            : 'bg-edge text-fog'
                      }`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${result ? 'live-dot bg-volt' : 'bg-current'}`} />
                      {result ? 'CLONED' : phase === 'running' ? 'SCANNING' : 'READY'}
                    </span>
                  </div>

                  <div className="relative mt-4 overflow-hidden rounded-2xl border border-edge/70">
                    <div className="aspect-video">
                      <MockPage scanned={phase === 'running'} />
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    {checkmarks.map((c) => (
                      <p key={c} className="flex items-center gap-2 text-[12.5px] text-mist">
                        <Check size={14} className="text-volt" strokeWidth={2.4} />
                        {c}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-edge/70 bg-[#0b0d11]">
                  {result && (
                    <button
                      type="button"
                      onClick={copy}
                      className="absolute top-12 right-3 z-10 flex items-center gap-1.5 rounded-lg border border-edge bg-coal px-2.5 py-1.5 text-[11px] font-medium text-mist transition-colors hover:border-ember/60 hover:text-paper"
                    >
                      {copied ? (
                        <>
                          <Check size={13} className="text-volt" /> Copied
                        </>
                      ) : (
                        <>
                          <Copy size={13} /> Copy
                        </>
                      )}
                    </button>
                  )}
                  {result ? (
                    <Typewriter key="out" lines={codeLines} />
                  ) : (
                    <pre className="text-[12.5px] leading-[1.55] text-fog/80">
                      <div className="flex items-center justify-between border-b border-edge/70 px-4 py-2.5">
                        <span className="text-[11px] text-fog">waiting for target…</span>
                        <span className="flex items-center gap-2">
                          {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
                            <span key={c} className="h-2.5 w-2.5 rounded-full" style={{ background: c }} />
                          ))}
                        </span>
                      </div>
                      <code className="block p-4">
                        <span className="cursor-blink" />
                      </code>
                    </pre>
                  )}
                </div>
              </div>

              <div className="mt-7 flex items-center justify-between gap-4 border-t border-edge/60 pt-5">
                <p className="text-[11.5px] text-fog">
                  This ran on <span className="num text-mist">envato-remake.dev</span> —{' '}
                  <span className="num">14s</span> including model load.
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-[11.5px] text-fog">Export</span>
                  {['React', 'Tailwind', 'HTML'].map((t, i) => (
                    <span
                      key={t}
                      className={`rounded-md border px-2 py-1 text-[10.5px] font-semibold ${
                        i === 0 ? 'border-ember/50 bg-ember/10 text-ember-hot' : 'border-edge text-fog'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}