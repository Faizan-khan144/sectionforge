import { useEffect, useState } from 'react'
import { Anvil, ArrowRight, Menu, X } from 'lucide-react'

const links = [
  { label: 'How it works', href: '#how' },
  { label: 'Workbench', href: '#workbench' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
]

export function Logo({ size = 30 }) {
  return (
    <a href="#top" className="group flex items-center gap-2.5">
      <span
        className="grid place-items-center rounded-lg bg-ember text-ink transition-transform duration-300 group-hover:rotate-6"
        style={{ width: size, height: size }}
      >
        <Anvil size={size * 0.56} strokeWidth={2.2} />
      </span>
      <span className="font-display text-[17px] font-semibold tracking-[-0.01em] text-paper">
        Section<span className="text-ember">Forge</span>
      </span>
    </a>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-edge/70 bg-ink/85 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-[13.5px] font-medium text-fog transition-colors duration-300 hover:bg-edge/60 hover:text-paper"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href="#pricing"
            className="hidden text-[13.5px] font-medium text-fog transition-colors duration-300 hover:text-paper sm:block"
          >
            Sign in
          </a>
          <a
            href="#workbench"
            className="group hidden items-center gap-1.5 rounded-full bg-ember px-4.5 py-2.5 text-[13.5px] font-semibold text-ink transition-all duration-300 hover:bg-ember-hot hover:shadow-[0_8px_28px_-8px_rgba(255,107,44,0.7)] sm:inline-flex"
          >
            Try the forge
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-lg border border-edge text-paper md:hidden"
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-edge bg-ink/97 backdrop-blur-xl md:hidden">
          <nav className="wrap flex flex-col gap-1 py-4" aria-label="Mobile">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-mist transition-colors hover:bg-edge/60 hover:text-paper"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#workbench"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-1.5 rounded-full bg-ember px-4 py-3 text-sm font-semibold text-ink"
            >
              Try the forge <ArrowRight size={15} />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}