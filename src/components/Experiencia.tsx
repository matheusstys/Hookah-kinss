import { useReveal } from '../hooks/useReveal'
import { Cocktail, Music, Sparkle, Users } from '../icons'

const features = [
  { icon: <Cocktail className="h-6 w-6" />, title: 'Bebidas geladas', desc: 'Drinks, doses, cervejas e o que você precisar pra acompanhar a noite.' },
  { icon: <Music className="h-6 w-6" />, title: 'Som no talo', desc: 'Trilha boa, volume certo — pra conversar, fumar e curtir sem estresse.' },
  { icon: <Sparkle className="h-6 w-6" />, title: 'Clima de tabacaria', desc: 'Ambiente escuro, aconchegante e com aquela vibe que só quem foi entende.' },
  { icon: <Users className="h-6 w-6" />, title: 'Vem com a galera', desc: 'Aniversário, happy hour ou só um rolê sem compromisso — tá tudo certo aqui.' },
]

export default function Experiencia() {
  const head = useReveal()
  return (
    <section id="experiencia" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div ref={head.ref} className={`reveal ${head.visible ? 'in' : ''} mb-12 max-w-2xl`}>
          <p className="eyebrow mb-3 text-xs text-ember">o que tem aqui</p>
          <h2 className="font-display text-3xl leading-tight text-cream sm:text-5xl">
            Tudo que você precisa pra uma noite boa.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-line bg-night-2/60 p-6 transition hover:border-neon/50"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full border border-line text-neon transition group-hover:border-neon/60">
                {f.icon}
              </span>
              <h3 className="mt-5 font-display text-2xl text-cream">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ash">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
