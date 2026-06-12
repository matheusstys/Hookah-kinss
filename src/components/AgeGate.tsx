import { config } from '../config'
import { Flame } from '../icons'

export default function AgeGate({
  onConfirm,
  denied,
  onDeny,
}: {
  onConfirm: () => void
  denied: boolean
  onDeny: () => void
}) {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-night px-6">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-ember/20 blur-[90px]" />
      <div className="relative w-full max-w-md text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-line text-ember">
          <Flame className="h-7 w-7" />
        </span>
        <p className="eyebrow mt-6 text-[0.7rem] text-ember">{config.tagline}</p>
        <h1 className="mt-2 font-display text-4xl text-cream">{config.name}</h1>

        {!denied ? (
          <>
            <p className="mt-6 text-ash">
              Este é um ambiente para maiores de idade. Você tem 18 anos ou mais?
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                onClick={onConfirm}
                className="rounded-full bg-ember px-7 py-3.5 font-semibold text-night transition hover:bg-ember-deep"
              >
                Sim, tenho 18+
              </button>
              <button
                onClick={onDeny}
                className="rounded-full border border-line px-7 py-3.5 font-semibold text-ash transition hover:text-cream"
              >
                Sou menor de 18
              </button>
            </div>
            <p className="mt-6 text-xs text-ash/60">
              O consumo de produtos com tabaco é prejudicial à saúde. Venda proibida para menores de 18 anos.
            </p>
          </>
        ) : (
          <p className="mt-8 leading-relaxed text-ash">
            Tudo bem — este espaço é exclusivo para maiores de 18 anos.
            Volte quando completar a maioridade. Te esperamos! 🌙
          </p>
        )}
      </div>
    </div>
  )
}
