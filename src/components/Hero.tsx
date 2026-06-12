import { config, mapsUrl, wa } from '../config'
import { Arrow, Clock, Pin } from '../icons'

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      {/* drifting ambient glows */}
      <div className="animate-drift pointer-events-none absolute -left-20 top-10 h-[26rem] w-[26rem] rounded-full bg-ember/20 blur-[110px]" />
      <div className="animate-drift-slow pointer-events-none absolute right-0 top-40 h-[22rem] w-[22rem] rounded-full bg-glow/20 blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-night to-transparent" />

      <div className="relative mx-auto max-w-6xl px-5 pt-36 pb-20 sm:px-8 sm:pt-44 sm:pb-28">
        <p className="eyebrow text-xs text-ember">{config.tagline} · {config.city}</p>
        <h1 className="mt-5 max-w-4xl font-display text-[3.4rem] leading-[0.95] text-cream sm:text-[6rem]">
          A noite fica melhor
          <br />
          <span className="italic text-ember">na luz baixa.</span>
        </h1>
        <p className="mt-7 max-w-lg text-lg leading-relaxed text-ash">
          Um cantinho em Osasco para encontrar quem importa: drinks autorais, som
          na medida e um ambiente pensado pra você ficar até tarde sem ver a hora passar.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={wa('Olá! Quero reservar uma mesa na Hookah Kinss.')}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-ember px-7 py-4 font-semibold text-night transition hover:bg-ember-deep"
          >
            Reservar minha mesa
            <Arrow className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-4 font-semibold text-cream transition hover:border-ember"
          >
            <Pin className="h-5 w-5 text-ember" />
            Como chegar
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ash">
          <span className="flex items-center gap-2">
            <Pin className="h-4 w-4 text-ember" /> {config.address} — {config.city}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-ember" /> {config.hours}
          </span>
        </div>
      </div>
    </header>
  )
}
