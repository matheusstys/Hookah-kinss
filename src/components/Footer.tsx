import { config, ig, mapsUrl, wa } from '../config'
import { Flame, Insta, Pin, Whats } from '../icons'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-night-2/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <a href="#" className="flex items-center gap-2.5">
            <Flame className="h-5 w-5 text-ember" />
            <span className="font-display text-2xl text-cream">{config.name}</span>
          </a>
          <p className="mt-3 text-sm leading-relaxed text-ash">
            {config.tagline} · {config.city}. {config.hours}.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cream transition hover:text-ember">
            <Pin className="h-4 w-4" /> {config.address}
          </a>
          <a href={wa('Olá!')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cream transition hover:text-ember">
            <Whats className="h-4 w-4" /> {config.phoneDisplay}
          </a>
          <a href={ig} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cream transition hover:text-ember">
            <Insta className="h-4 w-4" /> @{config.instagram}
          </a>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-5 sm:px-8">
          <p className="text-xs leading-relaxed text-ash/70">
            Entrada e consumo permitidos apenas para maiores de 18 anos. O consumo de bebidas
            alcoólicas e de produtos com tabaco é prejudicial à saúde. Beba com moderação; se for dirigir, não beba.
          </p>
          <p className="mt-2 text-xs text-ash/60">
            © {new Date().getFullYear()} {config.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
