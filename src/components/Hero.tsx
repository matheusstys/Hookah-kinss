import { config, mapsUrl, ifoodUrl } from '../config'
import { Clock, Pin, IFood } from '../icons'

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      {/* drifting ambient glows */}
      <div className="hidden sm:block sm:animate-drift pointer-events-none absolute -left-20 top-10 h-[26rem] w-[26rem] rounded-full bg-ember/15 blur-[110px]" />
      <div className="hidden sm:block sm:animate-drift-slow pointer-events-none absolute right-0 top-40 h-[22rem] w-[22rem] rounded-full bg-neon/15 blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-night to-transparent" />

      <div className="relative mx-auto max-w-6xl px-5 pt-24 pb-14 sm:px-8 sm:pt-44 sm:pb-28">
        <div className="flex items-center justify-between gap-8">
          {/* left: copy */}
          <div className="flex-1">
            <p className="eyebrow text-xs text-ember">{config.tagline} · {config.city}</p>
            <h1 className="mt-5 max-w-4xl font-display text-[2rem] leading-tight text-cream sm:text-[3.4rem] lg:text-[6rem]">
              Fuma, bebe
              <br />
              <span className="italic text-ember">e relaxa.</span>
            </h1>
            <p className="mt-7 max-w-lg text-sm leading-relaxed text-ash sm:text-base lg:text-lg">
              A Hookah Kinss é o point de Osasco pra fumar um bom narguilé, tomar uma gelada
              e curtir a noite sem pressa. Cola com a galera e deixa a noite rolar.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-neon px-7 py-4 font-semibold text-night transition hover:bg-neon-deep sm:w-auto sm:justify-start"
              >
                <Pin className="h-5 w-5" />
                Como chegar
              </a>
              <a
                href={ifoodUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#EA1D2C] px-7 py-4 font-semibold text-white transition hover:bg-[#c8101e] sm:w-auto sm:justify-start"
              >
                <IFood className="h-5 w-5" />
                Peça no iFood
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

          {/* right: logo grande */}
          <div className="hidden lg:block shrink-0">
            <img
              src="/ChatGPT%20Image%2014%20de%20jun.%20de%202026%2C%2022_34_59.png"
              alt={config.name}
              className="w-[340px] sm:animate-neon-pulse drop-shadow-[0_0_40px_#00C2FF60]"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
