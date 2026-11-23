// Small illustrative mockups, one per service card. All drawn with theme tokens so they work in light and dark.
import { FaFigma, FaGithub } from 'react-icons/fa6'
import { Check, Star, Sparkles, Search, Quote } from 'lucide-react'

const Frame = ({ children, className = '' }) => (
  <div className={`relative h-full overflow-hidden rounded-2xl border border-line bg-surface-2 bg-grid ${className}`}>{children}</div>
)
const Bar = ({ w, c = 'bg-line', h = 'h-1.5' }) => <div className={`${h} rounded-full ${c}`} style={{ width: w }} />
const Dots = () => (
  <div className="flex gap-1"><i className="size-1.5 rounded-full bg-[#ff5f57]" /><i className="size-1.5 rounded-full bg-[#febc2e]" /><i className="size-1.5 rounded-full bg-[#28c840]" /></div>
)

function FrontEnd() {
  const line = (n, parts) => (
    <div className="flex gap-2"><span className="w-3 text-end text-muted/60">{n}</span><span>{parts}</span></div>
  )
  return (
    <Frame>
      <div dir="ltr" className="absolute inset-x-3 top-3 bottom-3 rounded-xl border border-line bg-bg/90 p-2.5 font-mono text-[9.5px] leading-[1.55] shadow-lg">
        <div className="mb-1.5 flex items-center justify-between"><Dots /><span className="text-[8px] text-muted">App.jsx</span></div>
        {line(1, <><span className="text-[#c792ea]">export default</span> <span className="text-[#82aaff]">function</span> <span className="text-[#ffcb6b]">App</span>() {'{'}</>)}
        {line(2, <>&nbsp;&nbsp;<span className="text-[#c792ea]">return</span> (</>)}
        {line(3, <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#e34f26]">&lt;main</span> <span className="text-[#22d3ee]">className</span>=<span className="text-[#c3e88d]">"hero"</span><span className="text-[#e34f26]">&gt;</span></>)}
        {line(4, <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#22d3ee]">&lt;Portfolio</span> <span className="text-[#f0c419]">live</span> <span className="text-[#22d3ee]">/&gt;</span></>)}
        {line(5, <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#e34f26]">&lt;/main&gt;</span></>)}
        {line(6, <>&nbsp;&nbsp;)</>)}
      </div>
      <span className="absolute bottom-2 end-2 rounded-full bg-[#28c840] px-2 py-0.5 text-[9px] font-extrabold text-[#06281a] shadow">● Live on Vercel</span>
    </Frame>
  )
}

function DesignSystem() {
  return (
    <Frame className="p-3">
      <div dir="ltr" className="grid h-full grid-cols-[1fr_1.2fr] gap-2.5">
        <div className="flex flex-col justify-between rounded-xl border border-line bg-surface p-2">
          <span className="font-logo text-2xl font-extrabold leading-none">Aa</span>
          <div className="flex gap-1">
            {['#0891b2', '#22d3ee', '#67e8f9', '#06222b', '#e8f6f9'].map((c) => <i key={c} className="size-4 rounded-full border border-line" style={{ background: c }} />)}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-1.5">
          <span className="rounded-lg bg-accent px-2 py-1 text-center text-[9px] font-bold text-on-accent">Primary</span>
          <span className="rounded-lg border border-accent px-2 py-1 text-center text-[9px] font-bold text-accent">Secondary</span>
          <div className="flex items-center justify-between rounded-lg border border-line bg-surface px-2 py-1">
            <span className="text-[9px] font-bold">RTL / LTR</span>
            <span className="relative h-3.5 w-6 rounded-full bg-accent"><i className="absolute end-0.5 top-0.5 size-2.5 rounded-full bg-white" /></span>
          </div>
          <span className="text-[8px] font-bold uppercase tracking-wider text-muted">336 components</span>
        </div>
      </div>
    </Frame>
  )
}

function Mobile() {
  return (
    <Frame>
      <div className="absolute bottom-[-14px] start-1/2 h-[150px] w-[86px] -translate-x-1/2 rounded-[18px] border-[4px] border-fg/85 bg-surface p-1.5 shadow-xl rtl:translate-x-1/2">
        <div className="mx-auto mb-1.5 h-1 w-7 rounded-full bg-fg/70" />
        <div className="mb-1.5 h-9 rounded-lg bg-gradient-to-br from-accent to-accent-2" />
        {[0, 1, 2].map((i) => (
          <div key={i} className="mb-1 flex items-center gap-1"><i className="size-3.5 rounded-md bg-surface-2" /><div className="flex-1 space-y-0.5"><Bar w="80%" h="h-1" /><Bar w="50%" h="h-1" /></div></div>
        ))}
      </div>
      <div className="absolute start-3 top-4 rounded-lg border border-line bg-surface px-2 py-1 text-[9px] font-bold shadow">iOS</div>
      <div className="absolute end-3 top-10 rounded-lg border border-line bg-surface px-2 py-1 text-[9px] font-bold shadow">Android</div>
    </Frame>
  )
}

function Website() {
  return (
    <Frame>
      <div className="absolute inset-x-3 bottom-[-8px] top-3 rounded-t-xl border border-line bg-surface shadow-lg">
        <div className="flex items-center gap-2 border-b border-line px-2 py-1.5"><Dots /><div className="h-2.5 flex-1 rounded bg-surface-2" /></div>
        <div className="grid grid-cols-[1.2fr_1fr] gap-2 p-2.5">
          <div className="space-y-1.5"><Bar w="90%" c="bg-fg/80" h="h-2" /><Bar w="70%" c="bg-fg/80" h="h-2" /><Bar w="100%" /><Bar w="80%" /><span className="mt-1 inline-block rounded-full bg-accent px-2 py-0.5 text-[8px] font-bold text-on-accent">Get started</span></div>
          <div className="rounded-lg bg-gradient-to-br from-accent-2/70 to-accent/40" />
        </div>
      </div>
    </Frame>
  )
}

function Research() {
  return (
    <Frame className="p-3">
      <div dir="ltr" className="grid h-full grid-cols-2 gap-2">
        <div className="-rotate-2 rounded-lg bg-[#fde68a] p-2 text-[9px] font-semibold leading-snug text-[#5c4300] shadow">
          <Quote size={10} className="mb-0.5" />"I couldn't find the checkout button."
        </div>
        <div className="rotate-2 rounded-lg bg-[#a5f3fc] p-2 text-[9px] font-semibold leading-snug text-[#0e4d5c] shadow">
          <Quote size={10} className="mb-0.5" />"Too many steps to book."
        </div>
        <div className="col-span-2 flex items-end gap-1.5 rounded-lg border border-line bg-surface px-2 pb-1.5 pt-2">
          {[45, 70, 35, 90, 60].map((h, i) => <i key={i} className="flex-1 rounded-t bg-accent/80" style={{ height: `${h * 0.32}px` }} />)}
          <Search size={14} className="mb-0.5 text-accent" />
        </div>
      </div>
    </Frame>
  )
}

function Consult() {
  return (
    <Frame className="p-3">
      <div dir="ltr" className="flex h-full gap-2.5">
        <div className="flex-1 space-y-1.5 rounded-xl border border-line bg-surface p-2">
          {['Navigation', 'Accessibility', 'Checkout flow'].map((t, i) => (
            <div key={t} className="flex items-center gap-1.5 text-[9px] font-bold">
              <span className={`grid size-3.5 place-items-center rounded ${i < 2 ? 'bg-accent text-on-accent' : 'border border-line'}`}>{i < 2 && <Check size={9} strokeWidth={3} />}</span>{t}
            </div>
          ))}
        </div>
        <div className="grid w-[74px] place-items-center rounded-xl border border-line bg-surface">
          <div className="relative grid size-14 place-items-center rounded-full" style={{ background: 'conic-gradient(var(--accent) 0 86%, var(--line) 86% 100%)' }}>
            <span className="grid size-11 place-items-center rounded-full bg-surface text-sm font-extrabold">86</span>
          </div>
          <span className="text-[8px] font-bold uppercase tracking-wider text-muted">UX score</span>
        </div>
      </div>
    </Frame>
  )
}

function AI() {
  return (
    <Frame>
      <svg className="absolute inset-0 h-full w-full text-accent/60" viewBox="0 0 240 150" preserveAspectRatio="none" aria-hidden="true">
        <path d="M120 75 L50 35 M120 75 L190 35 M120 75 L120 128" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
      </svg>
      <div className="absolute start-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-gradient-to-br from-[#d97757] to-[#c15f3c] text-white shadow-lg rtl:translate-x-1/2">
        <Sparkles size={22} />
      </div>
      <span className="absolute start-1/2 top-[calc(50%+34px)] -translate-x-1/2 rounded-full bg-surface px-2 py-0.5 text-[9px] font-extrabold shadow rtl:translate-x-1/2">Claude · MCP</span>
      <span className="absolute left-[14%] top-[14%] grid size-9 place-items-center rounded-xl border border-line bg-surface shadow"><FaFigma size={16} /></span>
      <span className="absolute right-[14%] top-[14%] grid size-9 place-items-center rounded-xl border border-line bg-surface shadow"><FaGithub size={16} /></span>
    </Frame>
  )
}

function Mentor({ src, alt }) {
  return (
    <Frame className="grid place-items-center p-2.5">
      <img src={src} alt={alt} width="640" height="409" loading="lazy" className="max-h-full w-full rounded-xl border border-line bg-white object-contain shadow-[0_18px_40px_-22px_var(--accent)] transition duration-500 group-hover:scale-[1.04]" />
      <span dir="ltr" className="absolute end-3 top-1.5 rounded-full bg-[#4338ca] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">Monsters Gate</span>
      <span className="absolute bottom-1.5 start-3 inline-flex items-center gap-1 rounded-full bg-surface px-2 py-0.5 text-[9px] font-bold shadow"><Star size={9} className="fill-[#f0c419] text-[#f0c419]" /> Mentor</span>
    </Frame>
  )
}

export default function ServiceVisual({ s, alt }) {
  const map = { frontend: FrontEnd, ds: DesignSystem, mobile: Mobile, web: Website, research: Research, consult: Consult, ai: AI }
  if (s.key === 'mentor') return <Mentor src={`./${s.thumb}`} alt={alt} />
  const V = map[s.key]
  return V ? <V /> : null
}
