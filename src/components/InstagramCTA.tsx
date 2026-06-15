import { ig, config } from '../config'
import { Insta } from '../icons'

export default function InstagramCTA() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <a
          href={ig}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col items-center gap-6 overflow-hidden rounded-3xl px-8 py-14 text-center sm:py-20"
          style={{ background: 'linear-gradient(135deg, #1a0533 0%, #2d0a1a 50%, #1a1000 100%)' }}
        >
          {/* glow de fundo */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
            style={{ background: 'radial-gradient(circle, rgba(253,29,29,0.25) 0%, rgba(131,58,180,0.15) 60%, transparent 100%)' }}
          />

          {/* ícone */}
          <span
            className="relative grid h-20 w-20 place-items-center rounded-2xl text-white shadow-lg"
            style={{ background: 'linear-gradient(135deg, #833AB4, #FD1D1D 50%, #FCAF45)' }}
          >
            <Insta className="h-10 w-10" />
          </span>

          {/* texto */}
          <div className="relative">
            <p className="font-display text-3xl leading-tight text-white sm:text-5xl lg:text-6xl">
              Nos siga no Instagram
            </p>
            <p className="mt-3 text-lg text-white/60 sm:text-xl">@{config.instagram}</p>
          </div>

          {/* botão */}
          <span
            className="relative inline-flex items-center gap-2.5 rounded-full px-8 py-4 font-semibold text-white shadow-lg transition-transform group-hover:scale-105"
            style={{ background: 'linear-gradient(90deg, #833AB4, #FD1D1D, #FCAF45)' }}
          >
            <Insta className="h-5 w-5" />
            Seguir @{config.instagram}
          </span>
        </a>
      </div>
    </section>
  )
}
