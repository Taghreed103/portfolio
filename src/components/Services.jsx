import { useRef } from 'react'
import { ArrowUpRight, Layers, Smartphone, MonitorSmartphone, Search, MessagesSquare, Code2, Sparkles, GraduationCap } from 'lucide-react'
import { usePrefs } from '../prefs'
import { services } from '../data/services'
import { SectionHead, Reveal } from './Section'

const icons = {
  ds: Layers, mobile: Smartphone, web: MonitorSmartphone, research: Search,
  consult: MessagesSquare, frontend: Code2, ai: Sparkles, mentor: GraduationCap,
}

// Each skill chip gets its own brand color so the front-end stack stands out.
const techColors = {
  HTML: '#e34f26',
  CSS: '#2f7df6',
  JavaScript: '#f0c419',
  React: '#22d3ee',
}

// Card that tilts toward the pointer, with a cursor spotlight and a glow bar that sweeps in on hover.
function ServiceCard({ s, i, lang, tr }) {
  const ref = useRef(null)
  const Icon = icons[s.key]
  const isLink = Boolean(s.href)
  const Tag = isLink ? 'a' : 'article'

  const onMove = (e) => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    el.style.setProperty('--rx', `${(0.5 - y) * 10}deg`)
    el.style.setProperty('--ry', `${(x - 0.5) * 12}deg`)
    el.style.setProperty('--mx', `${x * 100}%`)
    el.style.setProperty('--my', `${y * 100}%`)
  }
  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return (
    <Reveal delay={(i % 4) * 0.07} className="h-full [perspective:900px]">
      <Tag
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        {...(isLink ? { href: s.href, target: '_blank', rel: 'noopener noreferrer' } : {})}
        className={`svc-card group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-surface p-6 ${s.thumb ? 'svc-featured border-accent/60' : 'border-line'} ${isLink ? 'cursor-pointer' : ''}`}
      >
        <span className="svc-spot pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative flex items-start justify-between gap-3">
          <span className="grid size-11 place-items-center rounded-2xl bg-surface-2 text-accent transition duration-300 group-hover:bg-accent group-hover:text-on-accent">
            <Icon size={20} strokeWidth={2} />
          </span>
          <span dir="ltr" className="font-logo text-[11px] tracking-[0.25em] text-muted">( {String(i + 1).padStart(2, '0')} )</span>
        </div>
        {s.thumb && (
          <div className="relative mt-4">
            <img
              src={`./${s.thumb}`}
              alt={tr.services.thumbAlt}
              width="640"
              height="409"
              loading="lazy"
              className="svc-thumb w-full rounded-2xl border border-line bg-white shadow-[0_18px_40px_-22px_var(--accent)] transition duration-500 group-hover:-translate-y-1 group-hover:scale-[1.03]"
            />
            <span dir="ltr" className="absolute -top-2.5 end-3 rounded-full bg-[#4338ca] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">Monsters Gate</span>
          </div>
        )}
        <h3 className="relative mt-5 text-lg font-bold leading-snug tracking-tight">{s.title[lang]}</h3>
        {s.badge && (
          <span className="relative mt-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-[11px] font-bold text-accent">
            <span className="size-1.5 rounded-full bg-accent" /> {s.badge[lang]}
          </span>
        )}
        <p className="relative mt-3 text-sm text-muted">{s.text[lang]}</p>
        {s.tech && (
          <ul className="relative mt-4 flex flex-wrap gap-2" dir="ltr">
            {s.tech.map((t) => (
              <li
                key={t}
                className="tech-chip rounded-full px-3 py-1 text-xs font-extrabold"
                style={{ '--c': techColors[t] }}
              >
                {t}
              </li>
            ))}
          </ul>
        )}
        {isLink && (
          <span className="relative mt-auto pt-5">
            <span className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-accent px-4 py-2.5 text-sm font-bold text-on-accent transition group-hover:brightness-110">
              {tr.services.book}
              <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100" />
            </span>
          </span>
        )}
        <span className="svc-bar absolute bottom-0 h-[3px] rounded-full" aria-hidden="true" />
      </Tag>
    </Reveal>
  )
}

export default function Services() {
  const { tr, lang } = usePrefs()
  return (
    <section id="services" className="gutter py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHead eyebrow={tr.services.eyebrow} title={tr.services.title} sub={tr.services.sub} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => <ServiceCard key={s.key} s={s} i={i} lang={lang} tr={tr} />)}
        </div>
      </div>
    </section>
  )
}
