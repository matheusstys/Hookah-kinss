import { config, mapsUrl, wa } from '../config'
import { useReveal } from '../hooks/useReveal'
import { Arrow, Clock, Pin } from '../icons'

export default function Local() {
  const r = useReveal()
  return (
    <section id="local" className="py-20 sm:py-28">
      <div
        ref={r.ref}
        className={`reveal ${r.visible ? 'in' : ''} mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-2`}
      >
        <div className="flex flex-col justify-between rounded-3xl border border-line bg-night-2/60 p-8 sm:p-10">
          <div>
            <p className="eyebrow mb-3 text-xs text-ember">onde estamos</p>
            <h2 className="font-display text-4xl leading-tight text-cream sm:text-5xl">
              Te esperamos em Osasco.
            </h2>
            <div className="mt-7 space-y-4 text-ash">
              <p className="flex items-start gap-3">
                <Pin className="mt-0.5 h-5 w-5 shrink-0 text-ember" />
                {config.address}
                <br />
                {config.city}
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
            className="group mt-8 inline-flex items-center gap-2 self-start rounded-full border border-line px-6 py-3 font-semibold text-cream transition hover:border-ember"
          >
            Abrir no Google Maps
            <Arrow className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="flex flex-col justify-center rounded-3xl border border-ember/30 bg-gradient-to-br from-ember/15 via-night-2 to-night p-8 text-center sm:p-10">
          <h3 className="font-display text-3xl text-cream">Bora marcar?</h3>
          <p className="mt-3 text-ash">
            Reserve sua mesa pelo WhatsApp e chegue só pra aproveitar.
          </p>
          <a
            href={wa('Olá! Quero reservar uma mesa na Hookah Kinss.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-7 inline-flex items-center gap-2 rounded-full bg-ember px-7 py-4 font-semibold text-night transition hover:bg-ember-deep"
          >
            Reservar pelo WhatsApp
          </a>
          <p className="mt-4 text-sm text-ash">{config.phoneDisplay}</p>
        </div>
      </div>
    </section>
  )
}
