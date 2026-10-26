// Wordmark: "taghreed" in a heavy wide face with "SAID" tracked out beneath.
export default function Logo({ size = 'md' }) {
  const big = size === 'lg'
  return (
    <span dir="ltr" className="inline-flex flex-col leading-none select-none" aria-label="Taghreed Said">
      <span className={`font-logo font-extrabold tracking-[-0.04em] ${big ? 'text-4xl sm:text-5xl' : 'text-xl'}`}>
        taghreed
      </span>
      <span
        className={`font-logo font-medium uppercase text-muted ${big ? 'mt-2 text-sm tracking-[0.9em]' : 'mt-1 text-[9px] tracking-[0.72em]'}`}
      >
        said
      </span>
    </span>
  )
}
