import { motion } from 'motion/react'

export function SectionHead({ eyebrow, title, sub, action }) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
      <div className="min-w-0 max-w-2xl">
        <p className="mb-3 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          <span className="h-px w-8 bg-accent" aria-hidden="true" /> {eyebrow}
        </p>
        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em]">{title}</h2>
        {sub && <p className="mt-3 text-muted">{sub}</p>}
      </div>
      {action}
    </div>
  )
}

// Reveal without hiding content: elements stay visible and only slide/sharpen in.
export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ y: 28, filter: 'blur(6px)' }}
      whileInView={{ y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}
