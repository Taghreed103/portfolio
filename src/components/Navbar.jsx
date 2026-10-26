import { useEffect, useState } from 'react'
import { Languages, Moon, Sun, Menu, X } from 'lucide-react'
import { usePrefs } from '../prefs'
import Logo from './Logo'

export default function Navbar() {
  const { tr, isDark, toggleLang, toggleTheme } = usePrefs()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  const links = [
    ['about', tr.nav.about],
    ['projects', tr.nav.projects],
    ['contact', tr.nav.contact],
  ]
  const iconBtn = 'grid size-10 place-items-center rounded-full border border-line bg-surface/60 text-fg transition hover:border-accent hover:text-accent'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 gutter transition-all duration-300 ${scrolled ? 'glass border-b border-line py-2.5' : 'py-4'}`}
      style={{ paddingTop: `calc(env(safe-area-inset-top, 0px) + ${scrolled ? '10px' : '16px'})` }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <a href="#about" aria-label="Taghreed Said, home"><Logo /></a>

        <ul className="hidden items-center gap-1 rounded-full border border-line bg-surface/50 p-1 md:flex">
          {links.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className="block rounded-full px-4 py-1.5 text-sm font-semibold text-muted transition hover:bg-surface-2 hover:text-fg">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button type="button" onClick={toggleLang} className="inline-flex h-10 items-center gap-1.5 rounded-full border border-line bg-surface/60 px-3 text-fg transition hover:border-accent hover:text-accent" aria-label={tr.langAria}>
            <Languages size={18} strokeWidth={2} />
            <span className="text-xs font-bold">{tr.langLabel}</span>
          </button>
          <button type="button" onClick={toggleTheme} className={iconBtn} aria-label={tr.themeAria(isDark)}>
            {isDark ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
          </button>
          <button type="button" onClick={() => setOpen((o) => !o)} className={`${iconBtn} md:hidden`} aria-label="Menu" aria-expanded={open}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="glass mx-auto mt-3 grid max-w-6xl gap-1 rounded-2xl border border-line p-2 md:hidden">
          {links.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 font-semibold hover:bg-surface-2">
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
