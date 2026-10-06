import { Boxes, GitBranch, Palette, Reflection, ScanSearch, Shuffle } from 'lucide-react'
import { Reveal } from './Motion.jsx'

const mainFeatures = [
  {
    icon: Palette,
    title: 'Style tokens, kept honest',
    text: 'Colors, fonts, radii and shadows are extracted as tokens — not frozen pixels. Change one token, restyle every clone.',
    span: true,
  },
  {
    icon: ScanSearch,
    title: 'Section-aware model',
    text: 'The model knows a hero from a footer. Naming, prop structure and class organisation follow your stack’s conventions.',
  },
  {
    icon: GitBranch,
    title: 'Diff before you accept',
    text: 'Compare the clone against the live render side by side. Toggle any element to see exactly what changed.',
  },
  {
    icon: Boxes,
    title: 'Works on private apps',
    text: 'Connect a Chrome session for auth’d pages. Forge clones inside your own product without touching user data.',
  },
  {
    icon: Reflection,
    title: 'Responsive-ready output',
    text: 'Breakpoints and fluid rules are carried over, so the component behaves like it did on the live site.',
  },
  {
    icon: Shuffle,
    title: 'Swap in your stack',
    text: 'React ↔ Vue ↔ Svelte ↔ plain HTML. One click. Your maintainers pick the target, not the source.',
  },
]

const mini = [
  'CSS nesting flattened',
  'Sprites → semantic alt text',
  'Inline SVG kept',
  'Latent layers re-export',
  'Zero runtime sniffing',
  'Tree-shake safe',
]

export default function Features() {
  return (
    <section id="features" className="relative scroll-mt-20 bg-ink py-24 sm:py-28">
      <div className="wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">Features</span>
          <h2 className="font-display mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold tracking-[-0.02em]">
            Built for the way you actually{' '}
            <span className="bg-gradient-to-r from-ember to-spark bg-clip-text text-transparent">
              rebuild things
            </span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-fog">
            Forge never gives you a wall of markup. It gives you the decisions a
            careful engineer would make.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {mainFeatures.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 90}
              className={`group relative overflow-hidden rounded-2xl border border-edge/70 bg-coal p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/50 hover:shadow-[0_24px_60px_-24px_rgba(255,107,44,0.3)] ${
                f.span ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-ember/0 via-ember/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="grid h-11 w-11 place-items-center rounded-xl border border-edge bg-slate-deep text-ember transition-colors duration-400 group-hover:border-ember/50 group-hover:text-ember-hot">
                <f.icon size={19} strokeWidth={1.8} />
              </div>
              <h3 className="font-display mt-5 text-[17px] font-semibold text-paper">{f.title}</h3>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-fog">{f.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-8">
          <div className="rounded-2xl border border-edge/70 bg-coal/60 px-7 py-5">
            <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
              <span className="text-[11px] font-semibold tracking-[0.16em] text-fog uppercase">
                + handles
              </span>
              {mini.map((m) => (
                <span key={m} className="flex items-center gap-2 text-[12.5px] text-mist">
                  <span className="text-ember">◆</span>
                  {m}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}