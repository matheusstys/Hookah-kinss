import { config } from '../config'

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
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-80 w-80 -translate-x-1/2 rounded-full bg-neon/10 blur-[100px]" />
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-ember/10 blur-[100px]" />
      <div className="relative w-full max-w-md text-center">
        <img src="/logo.png" alt={config.name} className="mx-auto h-28 w-auto animate-neon-pulse" />
        <p className="eyebrow mt-6 text-[0.7rem] text-ash">{config.tagline}</p>

        {!denied ? (
          <>
            <p className="mt-6 text-ash">
              Este é um ambiente para maiores de idade. Você tem 18 anos ou mais?
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                onClick={onConfirm}
                className="rounded-full bg-neon px-7 py-3.5 font-semibold text-night transition hover:bg-neon-deep"
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
