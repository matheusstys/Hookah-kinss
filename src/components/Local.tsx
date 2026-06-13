import { config, mapsUrl } from '../config'
import { useReveal } from '../hooks/useReveal'
import { Arrow, Clock, Pin } from '../icons'

export default function Local() {
  const r = useReveal()
  return (
    <section id="local" className="py-20 sm:py-28">
      <div
        ref={r.ref}
        className={`reveal ${r.visible ? 'in' : ''} mx-auto max-w-6xl px-5 sm:px-8`}
      >
        <div className="flex flex-col justify-between rounded-3xl border border-line bg-night-2/60 p-8 sm:p-10 lg:flex-row lg:items-end lg:gap-12">
          <div>
            <p className="eyebrow mb-3 text-xs text-ember">onde estamos</p>
            <h2 className="font-display text-4xl leading-tight text-cream sm:text-5xl">
              Te esperamos em Osasco.
            </h2>
            <div className="mt-7 space-y-4 text-ash">
              <p className="flex items-start gap-3">
                <Pin className="mt-0.5 h-5 w-5 shrink-0 text-ember" />
                {config.address} — {config.city}
              </p>
              <p className="flex items-center gap-3">
                <Clock className="h-5 w-5 shrink-0 text-ember" />
                {config.hours}
              </p>
            </div>
          </div>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 self-start rounded-full bg-neon px-7 py-4 font-semibold text-night transition hover:bg-neon-deep lg:mt-0 lg:shrink-0"
          >
            Abrir no Google Maps
            <Arrow className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
