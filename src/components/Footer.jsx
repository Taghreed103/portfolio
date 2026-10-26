import { ArrowUp, Phone, Mail } from 'lucide-react'
import { FaWhatsapp, FaLinkedinIn, FaBehance, FaGithub } from 'react-icons/fa6'
import { usePrefs } from '../prefs'
import { contact } from '../data/content'
import Logo from './Logo'

export default function Footer() {
  const { tr } = usePrefs()
  const social = [
    [contact.whatsapp, <FaWhatsapp size={18} />, 'WhatsApp'],
    [contact.linkedin, <FaLinkedinIn size={18} />, 'LinkedIn'],
    [contact.behance, <FaBehance size={18} />, 'Behance'],
    [contact.github, <FaGithub size={18} />, 'GitHub'],
  ]
  return (
    <footer className="gutter border-t border-line bg-surface pt-14" style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 28px)' }}>
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_1fr_auto] md:items-end">
        <div>
          <div className="flex items-center gap-5">
            <Logo size="lg" ring="var(--surface)" />
            <div className="min-w-0">
              <p className="font-display text-xl font-extrabold tracking-tight">{tr.hero.name}</p>
              <p className="mt-1 max-w-sm text-sm text-muted">{tr.hero.role}</p>
            </div>
          </div>
        </div>
        <div className="grid gap-2 text-sm">
          <a href={`tel:${contact.phoneIntl}`} className="inline-flex items-center gap-2 font-semibold hover:text-accent"><Phone size={16} className="text-accent" /><span dir="ltr">{contact.phoneDisplay}</span></a>
          <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 font-semibold hover:text-accent"><Mail size={16} className="text-accent" /><span dir="ltr" className="break-all">{contact.email}</span></a>
        </div>
        <div className="flex gap-2">
          {social.map(([href, icon, label]) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid size-11 place-items-center rounded-full border border-line transition hover:border-accent hover:bg-accent hover:text-on-accent">{icon}</a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-line pt-6 text-xs text-muted">
        <p>© {new Date().getFullYear()} Taghreed Said. {tr.footer.rights}</p>
        <a href="#about" className="inline-flex items-center gap-1.5 font-bold hover:text-accent">{tr.footer.top} <ArrowUp size={14} /></a>
      </div>
    </footer>
  )
}
