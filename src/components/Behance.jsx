import { ArrowUpRight } from 'lucide-react'
import { FaBehance } from 'react-icons/fa6'
import { usePrefs } from '../prefs'
import { behanceProjects } from '../data/projects'
import { contact } from '../data/content'
import { SectionHead, Reveal } from './Section'
import Cover from './Cover'

export default function Behance() {
  const { tr, lang } = usePrefs()
  return (
    <section className="gutter bg-surface-2/50 py-20 md:py-28" aria-labelledby="behance-title">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow={tr.behance.eyebrow}
          title={<span id="behance-title">{tr.behance.title}</span>}
          sub={tr.behance.sub}
          action={
            <a href={contact.behance} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-bold transition hover:border-accent hover:text-accent">
              <FaBehance size={18} /> {tr.behance.all}
            </a>
          }
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {behanceProjects.map((p, i) => (
            <Reveal key={p.url} delay={(i % 3) * 0.08} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-[0_24px_50px_-28px_var(--accent)]">
                <div className="relative overflow-hidden">
                  {p.image ? (
                    <img src={`./${p.image}`} alt={p.title[lang]} loading="lazy" className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="transition duration-500 group-hover:scale-105"><Cover title={p.title.en} kind={p.kind} tags={p.tags} seed={i + 2} /></div>
                  )}
                  <span className="absolute bottom-3 end-3 grid size-9 place-items-center rounded-full bg-[#1769ff] text-white shadow-lg"><FaBehance size={18} /></span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="text-lg font-bold tracking-tight">{p.title[lang]}</h3>
                  <p className="text-sm text-muted">{p.desc[lang]}</p>
                  <ul className="flex flex-wrap gap-1.5" dir="ltr">
                    {p.tags.map((tag) => <li key={tag} className="rounded-full bg-surface-2 px-2.5 py-0.5 text-[11px] font-bold text-muted">{tag}</li>)}
                  </ul>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="group/b mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm font-bold transition hover:border-accent hover:bg-accent hover:text-on-accent">
                    {tr.behance.open}
                    <ArrowUpRight size={16} className="transition group-hover/b:-translate-y-0.5 rtl:-scale-x-100" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
