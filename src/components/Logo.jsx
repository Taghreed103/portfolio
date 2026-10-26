// Logo: round avatar with a cyan ring, next to "TAGHREED" / "SAID" stacked and centered.
export default function Logo({ size = 'md' }) {
  const big = size === 'lg'
  const av = big ? 'size-16' : 'size-10'
  return (
    <span dir="ltr" className="inline-flex select-none items-center gap-3" aria-label="Taghreed Said">
      <span className="relative shrink-0">
        <img
          src="./img/avatar.webp"
          alt=""
          width="128"
          height="128"
          className={`${av} rounded-full object-cover ring-2 ring-accent ring-offset-2 ring-offset-bg`}
        />
      </span>
      <span className="inline-flex flex-col items-start leading-none">
        <span className={`font-logo font-bold uppercase tracking-tight ${big ? 'text-2xl' : 'text-[15px]'}`}>Taghreed</span>
        <span className={`font-logo font-medium uppercase text-muted ${big ? 'mt-2 text-xs tracking-[0.5em]' : 'mt-1.5 text-[9px] tracking-[0.45em]'}`}>Said</span>
      </span>
    </span>
  )
}
