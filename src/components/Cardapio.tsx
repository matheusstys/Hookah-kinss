import { useReveal } from '../hooks/useReveal'

const cols = [
  {
    title: 'Caipirinhas 700ml',
    items: [
      ['Ballena com Crok', 'R$ 60'],
      ['Caju c/ limão', 'R$ 35'],
      ['Frutas verdes', 'R$ 35'],
      ['Kiwi', 'R$ 35'],
      ['Limão', 'R$ 35'],
      ['Maracujá', 'R$ 35'],
      ['Melancia', 'R$ 35'],
      ['Morango', 'R$ 35'],
      ['Morango c/ abacaxi', 'R$ 35'],
      ['Morango c/ limão', 'R$ 35'],
      ['Morango com kiwi', 'R$ 35'],
    ],
  },
  {
    title: 'Cervejas',
    items: [
      ['Brahma Duplo Malte 269ml', 'R$ 7'],
      ['Budweiser Long Neck 330ml', 'R$ 11'],
      ['Budweiser Lata 269ml', 'R$ 6'],
      ['Heineken Lata 269ml', 'R$ 7'],
      ['Heineken Zero Long Neck 330ml', 'R$ 13'],
      ['Amstel Lata 269ml', 'R$ 6'],
    ],
  },
  {
    title: 'Refrigerantes & Sucos',
    items: [
      ['Coca-Cola Lata 350ml', 'R$ 7'],
      ['Coca-Cola Zero Lata 350ml', 'R$ 7'],
      ['Fanta Laranja Lata 350ml', 'R$ 7'],
      ['Fanta Uva Lata 350ml', 'R$ 7'],
      ['Guaraná Antarctica Lata 350ml', 'R$ 7'],
      ['Schweppes Citrus Lata 350ml', 'R$ 8'],
      ['Del Valle Manga 290ml', 'R$ 7'],
      ['Del Valle Uva 290ml', 'R$ 6'],
      ['Del Valle Maracujá 290ml', 'R$ 6'],
      ['Fanta Laranja 2l', 'R$ 18'],
      ['Fanta Uva 2l', 'R$ 18'],
      ['Coca-Cola 2l (pack 4un)', 'R$ 20'],
      ['Água Crystal Sem Gás 500ml', 'R$ 5'],
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
    <section id="cardapio" className="relative overflow-hidden border-y border-black/20 bg-white py-20 sm:py-28">
      {/* logo watermark — cobre toda a seção, cresce com o conteúdo */}
      <img
        src="/logo.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-contain opacity-[0.07]"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div ref={head.ref} className={`reveal ${head.visible ? 'in' : ''} mb-12 max-w-2xl`}>
          <p className="eyebrow mb-3 text-xs text-ember">no cardápio</p>
          <h2 className="font-display text-4xl leading-tight text-black sm:text-5xl">
            Fumaça, gole e drink.
          </h2>
          <p className="mt-3 text-sm text-black/60">
            Uma prévia do que tem aqui. Cardápio completo você vê na hora que chegar.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="mb-4 font-display text-2xl text-ember">{c.title}</h3>
              <ul className="space-y-3">
                {c.items.map(([name, tag]) => (
                  <li key={name} className="flex items-baseline justify-between gap-3 border-b border-black pb-3">
                    <span className="text-black">{name}</span>
                    <span className="shrink-0 font-body text-xs uppercase tracking-wider text-black/50">{tag}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs leading-relaxed text-black/40">
          Proibido vender bebida alcoólica e tabaco pra menor de 18 anos. Se for dirigir, não beba.
        </p>
      </div>
    </section>
  )
}
