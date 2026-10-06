import { Anvil } from 'lucide-react'
import { Logo } from './Nav.jsx'

const explore = [
  { label: 'How it works', href: '#how' },
  { label: 'Workbench', href: '#workbench' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

const community = [
  { label: 'Vote on targets', href: '#top' },
  { label: 'Changelog', href: '#top' },
  { label: 'Craft the model', href: '#top' },
  { label: 'Status', href: '#top' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-edge/70 bg-ink">
      <div className="wrap py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-[13.5px] leading-relaxed text-fog">
              The forge is a corner of the internet where someone else already made
              this section traceable.
            </p>
            <p className="mt-6 font-display text-xs tracking-[0.16em] text-fog uppercase">
              <span className="text-ember">✦</span> Fired up in 2026
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.18em] text-mist uppercase">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {explore.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[13.5px] text-fog transition-colors duration-300 hover:text-ember-hot">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.18em] text-mist uppercase">
              Community
            </h3>
            <ul className="mt-4 space-y-2.5">
              {community.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[13.5px] text-fog transition-colors duration-300 hover:text-ember-hot">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.18em] text-mist uppercase">
              The fine print
            </h3>
            <ul className="mt-4 space-y-2.5">
              {['Terms', 'Privacy', 'Licence guard policy', 'Security'].map((l) => (
                <li key={l}>
                  <span className="text-[13.5px] text-fog transition-colors duration-300 cursor-pointer hover:text-ember-hot">
                    {l}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-edge/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-fog">
            © {new Date().getFullYear()} SectionForge. A fictional product demo.
          </p>
          <p className="flex items-center gap-2 text-[12px] text-fog">
            Built at keyboard temperature
            <Anvil size={13} className="text-ember" />
          </p>
        </div>
      </div>
    </footer>
  )
}