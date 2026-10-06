import { MousePointerClick, ScanSearch, PackageCheck, ArrowRight } from 'lucide-react'
import { Reveal } from './Motion.jsx'

const steps = [
  {
    icon: MousePointerClick,
    step: '01',
    title: 'Drop a URL',
    text: 'Paste any public page. Forge loads it headlessly — even behind logins via your Chrome session.',
  },
  {
    icon: ScanSearch,
    step: '02',
    title: 'Pick a section',
    text: 'Every block is outlined live. Click the hero, the pricing grid — or let model match the whole layout.',
  },
  {
    icon: PackageCheck,
    step: '03',
    title: 'Export the component',
    text: 'Out comes one file, cleanly named, with tokens, responsive rules and no framework lock-in.',
  },
]

const tags = ['React', 'Next.js', 'Vue', 'Svelte', 'Astro', 'Tailwind', 'CSS', 'HTML']

export default function HowItWorks() {
  return (
    <section id="how" className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">How it works</span>
          <h2 className="font-display mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold tracking-[-0.02em]">
            Three clicks from URL to{' '}
            <span className="bg-gradient-to-r from-ember to-spark bg-clip-text text-transparent">
              pull request
            </span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-fog">
            No sitemaps, no design files, no meetings with "the person who built it".
          </p>
        </Reveal>

        <div className="relative mt-16 grid gap-5 md:grid-cols-3">
          <div className="pointer-events-none absolute top-16 right-[16%] left-[16%] hidden h-px bg-gradient-to-r from-ember/0 via-ember/50 to-ember/0 md:block" />
          {steps.map((s, i) => (
            <Reveal
              key={s.step}
              delay={i * 130}
              className="group relative overflow-hidden rounded-2xl border border-edge/70 bg-coal p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/50 hover:shadow-[0_24px_60px_-24px_rgba(255,107,44,0.35)]"
            >
              <div className="absolute top-0 right-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full bg-ember/10 blur-2xl transition-opacity duration-500 group-hover:opacity-120" />
              <span className="num font-display text-5xl font-bold text-transparent [background:linear-gradient(180deg,#fff,#fff)] opacity-[0.06] [-webkit-background-clip:text]">
                {s.step}
              </span>
              <div className="mt-4 grid h-11 w-11 place-items-center rounded-xl border border-edge bg-slate-deep text-ember transition-all duration-500 group-hover:border-ember/60 group-hover:text-ember-hot">
                <s.icon size={19} strokeWidth={1.8} />
              </div>
              <h3 className="font-display mt-5 text-lg font-semibold text-paper">{s.title}</h3>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-fog">{s.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-8">
          <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-edge/70 bg-coal/60 px-7 py-5 sm:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="text-[11px] font-semibold tracking-[0.14em] text-fog uppercase">
                Outputs to
              </span>
              {tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-edge bg-slate-deep px-2.5 py-1 text-[11.5px] font-medium text-mist transition-colors hover:border-ember/50 hover:text-ember-hot"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href="#workbench"
              className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-ember-hot transition-colors hover:text-spark"
            >
              Open the workbench
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}