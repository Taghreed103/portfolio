import { GraduationCap } from 'lucide-react'
import { usePrefs } from '../prefs'
import { courses } from '../data/content'

function Item({ c, ...rest }) {
  return (
    <li {...rest} className="marquee-item flex shrink-0 items-center gap-10 px-8">
      {c.logo ? (
        <img src={`./${c.logo}`} alt={c.name} className={`logo-mono w-auto ${c.h}`} loading="lazy" />
      ) : (
        <span className="logo-mono font-logo text-xl font-extrabold tracking-tight">
          KARIM<span className="font-medium"> STUDIO</span>
        </span>
      )}
      <span className="text-accent-2" aria-hidden="true">✦</span>
    </li>
  )
}

export default function Marquee() {
  const { tr } = usePrefs()
  const row = [...courses, ...courses, ...courses]
  return (
    <section aria-label={tr.marquee} className="border-y border-line bg-surface/60 py-7">
      <p className="gutter mb-5 flex items-center justify-center gap-2 text-center text-xs font-bold uppercase tracking-[0.16em] text-muted">
        <GraduationCap size={16} className="text-accent" /> {tr.marquee}
      </p>
      <div className="marquee overflow-hidden" dir="ltr">
        <ul className="marquee-track flex items-center">
          {row.map((c, i) => <Item key={`a${i}`} c={c} />)}
          {row.map((c, i) => <Item key={`b${i}`} c={c} aria-hidden="true" />)}
        </ul>
      </div>
    </section>
  )
}
