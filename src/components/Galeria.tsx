import { useReveal } from '../hooks/useReveal'
import Carousel from './Carousel'

const shots = [
  { label: 'O salão', tint: 'from-ember/30' },
  { label: 'Balcão & drinks', tint: 'from-neon/30' },
  { label: 'O narguilé', tint: 'from-ember/25' },
  { label: 'Noites de DJ', tint: 'from-neon/25' },
  { label: 'Área externa', tint: 'from-ember/30' },
]

function Tile({ label, tint }: { label: string; tint: string }) {
  return (
    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-line">
      <div className={`absolute inset-0 bg-gradient-to-t ${tint} via-night-2 to-night`} />
      <div className="absolute inset-0 grid place-items-center">
        <span className="font-display text-xl italic text-cream/40">foto</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night to-transparent p-5">
        <p className="font-display text-xl text-cream">{label}</p>
      </div>
    </div>
  )
}

export default function Galeria() {
  const head = useReveal()
  return (
    <section id="galeria" className="py-20 sm:py-28">
      <div ref={head.ref} className={`reveal ${head.visible ? 'in' : ''} mx-auto mb-12 max-w-6xl px-5 sm:px-8`}>
        <p className="eyebrow mb-3 text-xs text-ember">o clima</p>
        <h2 className="max-w-2xl font-display text-4xl leading-tight text-cream sm:text-5xl">
          Dá uma espiadinha antes de chegar.
        </h2>
        <p className="mt-3 text-sm text-ash">
          Arrasta pro lado e vê como é o point.
        </p>
      </div>
      <Carousel label="Galeria" slides={shots.map((s) => <Tile key={s.label} {...s} />)} />
    </section>
  )
}
