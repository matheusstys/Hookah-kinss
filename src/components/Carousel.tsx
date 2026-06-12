import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Arrow } from '../icons'

type Props = {
  label: string
  slides: ReactNode[]
  slideClass?: string
}

export default function Carousel({ label, slides, slideClass = 'w-[78%] sm:w-[48%] lg:w-[32%]' }: Props) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const scrollToIndex = (i: number) => {
    const track = trackRef.current
    if (!track) return
    const child = track.children[i] as HTMLElement | undefined
    if (child) track.scrollTo({ left: child.offsetLeft - track.offsetLeft, behavior: 'smooth' })
  }
  const nudge = (dir: 1 | -1) =>
    scrollToIndex(Math.min(Math.max(active + dir, 0), slides.length - 1))

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const items = Array.from(track.children) as HTMLElement[]
        const mid = track.scrollLeft + track.clientWidth / 2
        let nearest = 0
        let best = Infinity
        items.forEach((el, i) => {
          const c = el.offsetLeft - track.offsetLeft + el.clientWidth / 2
          const d = Math.abs(c - mid)
          if (d < best) { best = d; nearest = i }
        })
        setActive(nearest)
      })
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [slides.length])

  return (
    <div className="relative" role="group" aria-label={label}>
      <div
        ref={trackRef}
        className="no-bar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:px-8"
      >
        {slides.map((slide, i) => (
          <div key={i} className={`${slideClass} shrink-0 snap-center`}>
            {slide}
          </div>
        ))}
      </div>

      <div className="mt-7 flex items-center justify-between px-5 sm:px-8">
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir para o slide ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? 'w-7 bg-ember' : 'w-2 bg-line hover:bg-ash'
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => nudge(-1)}
            disabled={active === 0}
            aria-label="Anterior"
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-cream transition hover:border-ember disabled:opacity-30"
          >
            <Arrow className="h-5 w-5 rotate-180" />
          </button>
          <button
            onClick={() => nudge(1)}
            disabled={active === slides.length - 1}
            aria-label="Próximo"
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-cream transition hover:border-ember disabled:opacity-30"
          >
            <Arrow className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
