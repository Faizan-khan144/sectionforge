import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './Motion.jsx'

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-coal py-24 sm:py-28">
      <div className="grid-bg absolute inset-0" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[24rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember/[0.12] blur-[110px]" />

      <div className="wrap relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">Start cloning</span>
          <h2 className="font-display mt-5 text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05] font-bold tracking-[-0.03em]">
            Stop rebuilding the same hero{' '}
            <span className="bg-gradient-to-r from-ember via-ember-hot to-spark bg-clip-text text-transparent">
              a third time
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-fog">
            Drop a URL into Forge and get back the component your codebase has been
            missing. Free to try, no card.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="#workbench"
              className="group inline-flex items-center gap-2 rounded-full bg-ember px-8 py-4 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-ember-hot hover:shadow-[0_16px_48px_-12px_rgba(255,107,44,0.85)]"
            >
              Open the workbench
              <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full border border-edge px-8 py-4 text-sm font-semibold text-paper transition-all duration-300 hover:border-fog/60 hover:bg-slate-deep"
            >
              Compare plans
            </a>
          </div>
          <p className="mt-6 text-[11.5px] text-fog">
            <span className="text-volt">●</span> 2,104 teams already forged a component today
          </p>
        </Reveal>
      </div>
    </section>
  )
}