import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Reveal } from './Motion.jsx'

const faqs = [
  {
    q: 'Is a clone legally usable for production?',
    a: 'You can only export sections you have the right to reuse — your own sites, client sites you are contracted for, or openly licensed pages. Forge ships with a licence guard that flags questionable sources and keeps an audit trail of every URL you clone.',
  },
  {
    q: 'How clean is the generated code really?',
    a: 'The model outputs semantic components with your naming convention, extracted tokens and responsive rules. It is not a one-to-one transcription — it is a faithful reinterpretation. Cleaner than most "save-as-html" exporters; occasionally you may still tidy one prop.',
  },
  {
    q: 'Does it work on sites behind a login?',
    a: 'Yes. Connect your own Chrome profile via the Workbench. Forge drives that session headlessly and clones inside your authenticated app without exposing user data to our servers.',
  },
  {
    q: 'What counts as one clone?',
    a: 'One detected section exported as a single component. Re-exporting the same section to another framework in the same session does not cost extra. Full-page mode counts as five sections.',
  },
  {
    q: 'Which frameworks can it output?',
    a: 'React (JSX or TSX), Tailwind, Vue, Svelte and plain HTML + CSS. More targets are added from user votes every quarter.',
  },
  {
    q: 'Can I try it without a credit card?',
    a: 'The Starter plan is free for life — ten clones a month, no card required. The Pro trial unlocks unlimited clones and private-page mode for fourteen days.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="relative scroll-mt-20 bg-ink py-24 sm:py-28">
      <div className="wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">FAQ</span>
          <h2 className="font-display mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold tracking-[-0.02em]">
            Straight <span className="bg-gradient-to-r from-ember to-spark bg-clip-text text-transparent">answers</span>
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <Reveal key={f.q} delay={i * 70}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-all duration-400 ${
                    isOpen ? 'border-ember/50 bg-coal' : 'border-edge/70 bg-coal/50 hover:border-fog/40'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4.5 text-left"
                  >
                    <span className={`text-[15px] font-semibold ${isOpen ? 'text-paper' : 'text-mist'}`}>
                      {f.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-ember' : 'text-fog'
                      }`}
                    />
                  </button>
                  <div
                    className="grid transition-all duration-400"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-edge/60 px-6 pt-4 pb-5 text-[14px] leading-relaxed text-fog">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}