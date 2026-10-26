import { ArrowUpRight, ArrowUp } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import { usePrefs } from '../prefs'
import { githubProjects } from '../data/projects'
import { contact } from '../data/content'
import { SectionHead, Reveal } from './Section'
import Cover from './Cover'

function ProjectCard({ p, i, tr, lang }) {
  const title = typeof p.title === 'string' ? p.title : p.title[lang]
  const desc = typeof p.desc === 'string' ? p.desc : p.desc?.[lang]
  return (
    <Reveal delay={(i % 3) * 0.08} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-[0_24px_50px_-28px_var(--accent)]">
        <div className="relative overflow-hidden">
          {p.image ? (
            <img src={`./${p.image}`} alt={title} loading="lazy" className="aspect-[16/10] w-full object-cover object-top transition duration-500 group-hover:scale-105" />
          ) : (
            <div className="transition duration-500 group-hover:scale-105"><Cover title={title} kind={p.kind} tags={p.tags} seed={i} /></div>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <h3 className="text-lg font-bold tracking-tight">{title}</h3>
          {desc && <p className="text-sm text-muted">{desc}</p>}
          {p.tags?.length > 0 && (
            <ul className="flex flex-wrap gap-1.5" dir="ltr">
              {p.tags.map((tag) => <li key={tag} className="rounded-full bg-surface-2 px-2.5 py-0.5 text-[11px] font-bold text-muted">{tag}</li>)}
            </ul>
          )}
          <div className="mt-auto flex flex-wrap gap-2 pt-3">
            <a href={p.repo} target="_blank" rel="noopener noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm font-bold transition hover:border-fg">
              <FaGithub size={16} /> {tr.projects.browse}
            </a>
            {p.live && (
              <a href={p.live} target="_blank" rel="noopener noreferrer" className="group/live inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-bold text-on-accent transition hover:brightness-110">
                {tr.projects.live}
                <ArrowUpRight size={16} className="transition group-hover/live:-translate-y-0.5 group-hover/live:translate-x-0.5 rtl:-scale-x-100" />
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function Projects() {
  const { tr, lang } = usePrefs()
  return (
    <section id="projects" className="gutter py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow={tr.projects.eyebrow}
          title={tr.projects.title}
          sub={tr.projects.sub}
          action={
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline">
              <FaGithub size={18} /> github.com/Taghreed103 <ArrowUp size={14} className="rotate-45 rtl:-rotate-45" />
            </a>
          }
        />
        {githubProjects.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {githubProjects.map((p, i) => <ProjectCard key={p.repo} p={p} i={i} tr={tr} lang={lang} />)}
          </div>
        ) : (
          <p className="rounded-3xl border border-dashed border-line p-10 text-center text-muted">{tr.projects.empty}</p>
        )}
      </div>
    </section>
  )
}
