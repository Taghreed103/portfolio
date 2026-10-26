// Designed cover used when a project has no screenshot: a browser or phone frame with the project's initials.
export default function Cover({ title, kind = 'web', tags = [], seed = 0 }) {
  const initials = title.replace(/[^A-Za-z0-9؀-ۿ ]/g, '').split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase()
  const hue = [190, 178, 200, 186, 172, 196][seed % 6]
  const tint = `oklch(0.78 0.12 ${hue})`
  return (
    <div className="card-cover relative aspect-[16/10] overflow-hidden bg-grid" aria-hidden="true">
      <div className="absolute -end-10 -top-10 size-44 rounded-full blur-2xl" style={{ background: tint, opacity: 0.45 }} />
      {kind === 'mobile' ? (
        <div className="absolute bottom-[-18%] start-1/2 h-[96%] w-[34%] -translate-x-1/2 rounded-[22px] border-[5px] border-fg/80 bg-surface shadow-xl rtl:translate-x-1/2">
          <div className="mx-auto mt-1.5 h-1.5 w-10 rounded-full bg-fg/70" />
          <div className="mx-3 mt-4 h-14 rounded-xl" style={{ background: tint }} />
          <div className="mx-3 mt-3 space-y-2">
            <div className="h-2 w-3/4 rounded bg-line" /><div className="h-2 w-1/2 rounded bg-line" />
            <div className="grid grid-cols-2 gap-2 pt-1"><div className="h-10 rounded-lg bg-surface-2" /><div className="h-10 rounded-lg bg-surface-2" /></div>
          </div>
        </div>
      ) : (
        <div className="absolute inset-x-[9%] bottom-[-10%] top-[16%] rounded-t-xl border border-line bg-surface shadow-xl">
          <div className="flex gap-1.5 border-b border-line px-3 py-2"><i className="size-2 rounded-full bg-line" /><i className="size-2 rounded-full bg-line" /><i className="size-2 rounded-full bg-line" /></div>
          <div className="grid grid-cols-[1.3fr_1fr] gap-3 p-4">
            <div className="space-y-2"><div className="h-3 w-4/5 rounded bg-fg/70" /><div className="h-2 w-full rounded bg-line" /><div className="h-2 w-2/3 rounded bg-line" /><div className="mt-3 h-5 w-16 rounded-full" style={{ background: tint }} /></div>
            <div className="rounded-lg" style={{ background: `linear-gradient(135deg, ${tint}, transparent)` }} />
          </div>
        </div>
      )}
      <span dir="ltr" className="absolute start-4 top-3 font-logo text-3xl font-extrabold tracking-tight text-fg/85">{initials}</span>
      {tags[0] && <span className="absolute end-3 top-3 rounded-full bg-bg/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted">{tags[0]}</span>}
    </div>
  )
}
