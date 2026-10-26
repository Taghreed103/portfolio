import { useState } from 'react'
import { Send, Mail, Phone, Copy, Check, LoaderCircle, CircleCheck, CircleAlert } from 'lucide-react'
import { FaWhatsapp, FaLinkedinIn, FaBehance, FaGithub } from 'react-icons/fa6'
import { usePrefs } from '../prefs'
import { contact, WEB3FORMS_KEY } from '../data/content'
import { SectionHead, Reveal } from './Section'

function CopyRow({ icon, label, value, href, tr }) {
  const [done, setDone] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(value); setDone(true); setTimeout(() => setDone(false), 1800) } catch { /* clipboard blocked */ }
  }
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-3">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-surface-2 text-accent">{icon}</span>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-bold uppercase tracking-wider text-muted">{label}</p>
        <a href={href} dir="ltr" className="block break-all text-[15px] font-semibold leading-snug hover:text-accent">{value}</a>
      </div>
      <button type="button" onClick={copy} className="inline-flex items-center gap-1 rounded-full border border-line px-3 py-1.5 text-xs font-bold transition hover:border-accent hover:text-accent">
        {done ? <Check size={14} /> : <Copy size={14} />} {done ? tr.contact.copied : tr.contact.copy}
      </button>
    </div>
  )
}

const field = 'w-full rounded-2xl border border-line bg-bg px-4 py-3 text-fg placeholder:text-muted/70 outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/15'

export default function Contact() {
  const { tr } = usePrefs()
  const c = tr.contact
  const [status, setStatus] = useState('idle') // idle | sending | sent | failed

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    if (data.botcheck) return
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: 'Portfolio — ' + data.name,
          subject: `[Portfolio] ${data.subject || 'New message'}`,
          name: data.name,
          email: data.email,
          replyto: data.email,
          message: data.message,
        }),
      })
      const json = await res.json()
      if (json.success) { setStatus('sent'); form.reset() } else setStatus('failed')
    } catch { setStatus('failed') }
  }

  const wa = `${contact.whatsapp}?text=${encodeURIComponent(c.whatsappMsg)}`

  return (
    <section id="contact" className="relative gutter py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHead eyebrow={c.eyebrow} title={c.title} sub={c.sub} />
        <div className="grid gap-8 lg:grid-cols-[1fr_1.25fr]">
          <Reveal className="flex min-w-0 flex-col gap-3">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-3xl bg-[#25D366] p-5 text-[#06281a] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-20px_#25D366]">
              <span className="grid size-12 place-items-center rounded-2xl bg-white/30"><FaWhatsapp size={26} /></span>
              <span className="min-w-0">
                <span className="block text-lg font-extrabold">{c.whatsapp}</span>
                <span dir="ltr" className="block text-sm font-semibold opacity-80">{contact.phoneIntl}</span>
              </span>
            </a>
            <CopyRow icon={<Mail size={18} />} label={c.emailLabel} value={contact.email} href={`mailto:${contact.email}`} tr={tr} />
            <CopyRow icon={<Phone size={18} />} label={c.phoneLabel} value={contact.phoneDisplay} href={`tel:${contact.phoneIntl}`} tr={tr} />
            <div className="mt-2 flex gap-2">
              {[
                [contact.linkedin, <FaLinkedinIn size={18} />, 'LinkedIn'],
                [contact.behance, <FaBehance size={18} />, 'Behance'],
                [contact.github, <FaGithub size={18} />, 'GitHub'],
              ].map(([href, icon, label]) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid size-12 place-items-center rounded-2xl border border-line bg-surface transition hover:-translate-y-0.5 hover:border-accent hover:text-accent">
                  {icon}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="min-w-0">
            <form onSubmit={onSubmit} className="grid gap-4 rounded-3xl border border-line bg-surface p-5 sm:grid-cols-2 sm:p-7">
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
              <label className="grid gap-1.5 text-sm font-bold" htmlFor="c-name">{c.name}
                <input id="c-name" name="name" required minLength={2} autoComplete="name" placeholder={c.namePh} className={field} />
              </label>
              <label className="grid gap-1.5 text-sm font-bold" htmlFor="c-email">{c.email}
                <input id="c-email" name="email" type="email" required autoComplete="email" dir="ltr" placeholder={c.emailPh} className={field} />
              </label>
              <label className="grid gap-1.5 text-sm font-bold sm:col-span-2" htmlFor="c-subject">{c.subject}
                <input id="c-subject" name="subject" placeholder={c.subjectPh} className={field} />
              </label>
              <label className="grid gap-1.5 text-sm font-bold sm:col-span-2" htmlFor="c-message">{c.message}
                <textarea id="c-message" name="message" required minLength={10} rows={5} placeholder={c.messagePh} className={`${field} resize-y`} />
              </label>
              <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
                <button type="submit" disabled={status === 'sending'} className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 font-bold text-on-accent transition hover:brightness-110 disabled:opacity-60">
                  {status === 'sending' ? <LoaderCircle size={18} className="animate-spin" /> : <Send size={18} className="rtl:-scale-x-100" />}
                  {status === 'sending' ? c.sending : c.send}
                </button>
                <p role="status" aria-live="polite" className="min-w-0 flex-1 text-sm">
                  {status === 'sent' && <span className="inline-flex items-start gap-2 font-semibold text-accent"><CircleCheck size={18} className="shrink-0" />{c.sent}</span>}
                  {status === 'failed' && <span className="inline-flex items-start gap-2 font-semibold text-[#e5484d]"><CircleAlert size={18} className="shrink-0" />{c.failed}</span>}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
