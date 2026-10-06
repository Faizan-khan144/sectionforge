import { useState } from 'react'
import { Check, Zap } from 'lucide-react'
import { Reveal } from './Motion.jsx'

const plans = [
  {
    name: 'Starter',
    price: '0',
    cadence: '/mo',
    blurb: 'For peeking under the hood and prototype evenings.',
    features: [
      '10 clones / month',
      'React + HTTP exports',
      'Unlimited public pages',
      'Community support',
    ],
    cta: 'Start free',
    ctaStyle: 'ghost',
  },
  {
    name: 'Pro',
    price: '19',
    cadence: '/mo',
    blurb: 'For teams shipping real products on real deadlines.',
    features: [
      'Unlimited clones',
      'React, Tailwind, Vue, Svelte',
      'Private-page mode via Chrome',
      'Diff & responsive preview',
      'Design-token isolation',
      'Priority support',
    ],
    cta: 'Start 14-day trial',
    ctaStyle: 'solid',
    popular: true,
  },
  {
    name: 'Studio',
    price: '49',
    cadence: '/mo',
    blurb: 'For agencies rebuilding other people’s reputation.',
    features: [
      'Everything in Pro',
      '5 seats included',
      'Brand kits & shared tokens',
      'Full-page export',
      'API access',
      'SSO & audit log',
    ],
    cta: 'Talk to sales',
    ctaStyle: 'ghost',
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="relative scroll-mt-20 bg-coal py-24 sm:py-28">
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div className="wrap relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">Pricing</span>
          <h2 className="font-display mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold tracking-[-0.02em]">
            Cheaper than the hour you would{' '}
            <span className="bg-gradient-to-r from-ember to-spark bg-clip-text text-transparent">
              spend cloning by hand
            </span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-fog">
            Cancel anytime. Every plan ships with the full workbench.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-edge bg-ink p-1">
            <button
              type="button"
              onClick={() => setYearly(false)}
              className={`rounded-full px-4.5 py-2 text-[12.5px] font-semibold transition-colors ${
                !yearly ? 'bg-ember text-ink' : 'text-fog hover:text-mist'
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              className={`flex items-center gap-1.5 rounded-full px-4.5 py-2 text-[12.5px] font-semibold transition-colors ${
                yearly ? 'bg-ember text-ink' : 'text-fog hover:text-mist'
              }`}
            >
              Yearly
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                  yearly ? 'bg-ink/15 text-ink' : 'bg-ember/15 text-ember-hot'
                }`}
              >
                −20%
              </span>
            </button>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => {
            const shown = yearly ? Math.round(Number(p.price) * 0.8) : p.price
            return (
              <Reveal
                key={p.name}
                delay={i * 120}
                className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-1.5 ${
                  p.popular
                    ? 'glow-ember border-ember/60 bg-slate-deep'
                    : 'border-edge/70 bg-ink hover:border-fog/40'
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-ember px-3.5 py-1 text-[10.5px] font-bold tracking-[0.1em] text-ink uppercase">
                    <Zap size={11} /> Most popular
                  </span>
                )}

                <h3 className="font-display text-lg font-semibold text-paper">{p.name}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-fog">{p.blurb}</p>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="font-display text-5xl font-bold tracking-[-0.02em] text-paper">
                    {p.price === '0' ? '0' : `$${shown}`}
                  </span>
                  <span className="text-sm text-fog">{p.cadence}</span>
                </div>

                <ul className="mt-7 flex-1 space-y-3 border-t border-edge/60 pt-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-mist">
                      <Check
                        size={15}
                        strokeWidth={2.6}
                        className={`mt-0.5 shrink-0 ${p.popular ? 'text-ember' : 'text-volt'}`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#workbench"
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
                    p.popular
                      ? 'bg-ember text-ink hover:-translate-y-0.5 hover:bg-ember-hot hover:shadow-[0_12px_40px_-10px_rgba(255,107,44,0.8)]'
                      : 'border border-edge text-paper hover:border-fog/60 hover:bg-slate-deep'
                  }`}
                >
                  {p.cta}
                </a>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={200} className="mt-8 text-center">
          <p className="text-[12.5px] text-fog">
            Student plan: <span className="text-mist">50% off Pro</span> with a `.edu` email.
            Open source: free on a case-by-case.
          </p>
        </Reveal>
      </div>
    </section>
  )
}