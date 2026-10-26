import { motion } from 'motion/react'
import { ArrowDownRight, MessageCircle, Sparkles, MousePointer2, Code2 } from 'lucide-react'
import { FaFigma } from 'react-icons/fa6'
import { usePrefs } from '../prefs'

const icons = {
  figma: <FaFigma size={18} />,
  ux: <MousePointer2 size={18} strokeWidth={2.2} />,
  ai: <Sparkles size={18} strokeWidth={2.2} />,
  code: <Code2 size={18} strokeWidth={2.2} />,
}

// Card positions around the portrait (logical: start/end flip in Arabic) and the offset they fly out from.
const spots = {
  figma: { cls: 'top-[10%] start-[-20%] float-a', from: { x: 90, y: 120 } },
  ux: { cls: 'top-[24%] end-[-18%] float-b', from: { x: -120, y: 20 } },
  ai: { cls: 'bottom-[16%] start-[-22%] float-c', from: { x: 120, y: -60 } },
  code: { cls: '-bottom-4 end-[-6%] float-a', from: { x: -80, y: -120 } },
}

function FeatureCard({ card, className = '', style }) {
  return (
    <div className={`glass flex max-w-[230px] items-start gap-3 rounded-2xl border border-line p-3 shadow-[0_18px_40px_-20px_var(--glow)] ${className}`} style={style}>
      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-accent text-on-accent">{icons[card.key]}</span>
      <span className="min-w-0">
        <span className="block text-sm font-bold leading-tight">{card.title}</span>
        <span className="mt-1 block text-xs leading-snug text-muted">{card.text}</span>
      </span>
    </div>
  )
}

function Portrait({ cards, rtl }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]">
      <div className="portrait-halo absolute -inset-[12%] rounded-full" aria-hidden="true" />
      <div className="portrait-ring-dash absolute -inset-[6%] rounded-full" aria-hidden="true" />
      <div className="portrait-ring absolute -inset-[2%] rounded-full" aria-hidden="true" />

      <motion.div
        initial={{ scale: 0.86, opacity: 0, filter: 'blur(12px)' }}
        animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
        className="absolute inset-[3%] overflow-hidden rounded-full border border-line bg-grid"
        style={{ background: 'radial-gradient(circle at 50% 35%, color-mix(in oklab, var(--accent-2) 30%, var(--surface-2)), var(--surface-2) 70%)' }}
      >
        <img
          src="./img/taghreed-720.webp"
          srcSet="./img/taghreed-440.webp 440w, ./img/taghreed-720.webp 720w"
          sizes="(max-width: 768px) 80vw, 440px"
          width="720"
          height="707"
          alt="Taghreed Said"
          fetchPriority="high"
          className="absolute inset-x-0 bottom-0 mx-auto w-[92%] select-none"
          draggable="false"
        />
        <div className="portrait-lines pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="portrait-scan pointer-events-none absolute inset-x-0" aria-hidden="true" />
        {/* HUD corner ticks */}
        <svg className="pointer-events-none absolute inset-[14%] text-accent-2/70" viewBox="0 0 100 100" fill="none" aria-hidden="true">
          <path d="M2 16V2h14M84 2h14v14M98 84v14H84M16 98H2V84" stroke="currentColor" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
        </svg>
      </motion.div>

      {/* AI badge on the ring */}
      <motion.span
        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
        dir="ltr"
        className="absolute left-1/2 top-[1%] -translate-x-1/2 rounded-full border border-accent/50 bg-bg px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent"
      >
        <span className="blink">▮</span> AI · UX · UI
      </motion.span>

      {/* Floating cards pop out of the portrait (md and up) */}
      <div className="absolute inset-0 hidden md:block">
        {cards.map((c, i) => {
          const s = spots[c.key]
          const fx = rtl ? -s.from.x : s.from.x
          return (
            <motion.div
              key={c.key}
              className={`absolute ${s.cls.replace(/float-\w/, '')}`}
              initial={{ opacity: 0, scale: 0.3, x: fx, y: s.from.y }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ delay: 0.55 + i * 0.14, type: 'spring', stiffness: 140, damping: 16 }}
            >
              <FeatureCard card={c} className={s.cls.match(/float-\w/)[0]} />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default function Hero() {
  const { tr, lang } = usePrefs()
  const h = tr.hero
  const up = (d) => ({ initial: { opacity: 0, y: 22 }, animate: { opacity: 1, y: 0 }, transition: { delay: d, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] } })

  return (
    <section id="about" className="relative overflow-hidden gutter pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_30%,#000,transparent)]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.05fr_1fr] md:gap-10">
        <div className="min-w-0">
          <motion.span {...up(0)} className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-bold text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-2 opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {h.status}
          </motion.span>

          <motion.p {...up(0.08)} className="mt-6 font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {h.role}
          </motion.p>
          <motion.h1 {...up(0.16)} className="mt-3 text-[clamp(2.6rem,7vw,4.9rem)] font-extrabold tracking-[-0.035em]">
            {h.name}
            <span className="text-accent-2">.</span>
          </motion.h1>

          <motion.div {...up(0.26)} className="mt-6 max-w-[62ch] space-y-4 text-[1.02rem] text-muted">
            <p className="text-fg">{h.p1}</p>
            <p>{h.p2}</p>
            <p>{h.p3}</p>
          </motion.div>

          <motion.div {...up(0.36)} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-on-accent shadow-[0_14px_30px_-12px_var(--accent)] transition hover:-translate-y-0.5">
              {h.ctaWork}
              <ArrowDownRight size={18} className="transition group-hover:rotate-[-45deg] rtl:-scale-x-100" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3 font-bold transition hover:border-accent hover:text-accent">
              <MessageCircle size={18} /> {h.ctaTalk}
            </a>
          </motion.div>
        </div>

        <div className="min-w-0 px-6 md:px-10">
          <Portrait cards={tr.cards} rtl={lang === 'ar'} />
          {/* Mobile: cards in a grid under the portrait */}
          <div className="mt-12 grid grid-cols-2 gap-3 md:hidden">
            {tr.cards.map((c, i) => (
              <motion.div key={c.key} initial={{ opacity: 0, y: -30, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.5 + i * 0.1, type: 'spring', stiffness: 160, damping: 18 }}>
                <FeatureCard card={c} className="max-w-none h-full flex-col" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
