import { useReveal } from '../hooks/useReveal'

const cols = [
  {
    title: 'Drinks & Coquetéis',
    items: [
      ['Caipirinhas & autorais', 'da casa'],
      ['Gin tônicas especiais', '—'],
      ['Doses & combos', '—'],
      ['Sem álcool / mocktails', '—'],
    ],
  },
  {
    title: 'Narguilé',
    items: [
      ['Essências variadas', '18+'],
      ['Atendimento de mesa', '—'],
      ['Carvão incluso', '—'],
    ],
  },
]

export default function Cardapio() {
  const head = useReveal()
  return (
    <section id="cardapio" className="border-y border-neon/15 bg-night-2/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div ref={head.ref} className={`reveal ${head.visible ? 'in' : ''} mb-12 max-w-2xl`}>
          <p className="eyebrow mb-3 text-xs text-ember">no cardápio</p>
          <h2 className="font-display text-4xl leading-tight text-cream sm:text-5xl">
            Fumaça, gole e drink.
          </h2>
          <p className="mt-3 text-sm text-ash">
            Uma prévia do que tem aqui. Cardápio completo você vê na hora que chegar.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="mb-4 font-display text-2xl text-ember">{c.title}</h3>
              <ul className="space-y-3">
                {c.items.map(([name, tag]) => (
                  <li key={name} className="flex items-baseline justify-between gap-3 border-b border-line/60 pb-3">
                    <span className="text-cream">{name}</span>
                    <span className="shrink-0 font-body text-xs uppercase tracking-wider text-ash">{tag}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs leading-relaxed text-ash/70">
          Proibido vender bebida alcoólica e tabaco pra menor de 18 anos. Se for dirigir, não beba.
        </p>
      </div>
    </section>
  )
}
