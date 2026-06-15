import { config, ig, mapsUrl, ifoodUrl } from '../config'
import { IFood, Insta, Pin } from '../icons'

export default function Footer() {
  return (
    <footer className="border-t border-neon/20 bg-night-2/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <a href="#" className="flex items-center">
            <img src="/ChatGPT%20Image%2014%20de%20jun.%20de%202026%2C%2022_34_59.png" alt={config.name} className="h-14 w-auto" />
          </a>
          <p className="mt-3 text-sm leading-relaxed text-ash">
            O point de Osasco pra fumar, beber e curtir.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cream transition hover:text-ember">
            <Pin className="h-4 w-4" /> {config.address}
          </a>
          <a href={ig} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cream transition hover:text-ember">
            <Insta className="h-4 w-4" /> @{config.instagram}
          </a>
          <a href={ifoodUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cream transition hover:text-[#EA1D2C]">
            <IFood className="h-4 w-4" /> iFood
          </a>
        </div>
      </div>
      <div className="border-t border-neon/10">
        <div className="mx-auto max-w-6xl px-5 py-5 sm:px-8">
          <p className="text-xs leading-relaxed text-ash/70">
            Ambiente exclusivo para maiores de 18 anos. Proibido vender bebida alcoólica e tabaco para menor. Se for dirigir, não beba.
          </p>
          <p className="mt-2 text-xs text-ash/60">
            © {new Date().getFullYear()} {config.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
