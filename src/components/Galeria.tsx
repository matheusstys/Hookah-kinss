import { useReveal } from '../hooks/useReveal'
import Carousel from './Carousel'

const shots = [
  { src: '/lado%20de%20dentro.jpeg', label: 'Por dentro' },
  { src: '/luz%20baixa.jpeg',        label: 'O clima' },
  { src: '/lado%20de%20fora.jpeg',   label: 'A fachada' },
]

function Tile({ src, label }: { src: string; label: string }) {
  return (
    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-line">
      <img src={src} alt={label} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
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
      <Carousel label="Galeria" slides={shots.map((s) => <Tile key={s.src} {...s} />)} />
    </section>
  )
}
