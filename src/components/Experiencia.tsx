import { useReveal } from '../hooks/useReveal'
import { Cocktail, Music, Sparkle, Users } from '../icons'

const features = [
  { icon: <Cocktail className="h-6 w-6" />, title: 'Drinks autorais', desc: 'Coquetelaria pensada com calma, clássicos bem feitos e novidades da casa.' },
  { icon: <Music className="h-6 w-6" />, title: 'Som na medida', desc: 'A trilha certa pra conversar sem gritar — e dançar quando a noite pede.' },
  { icon: <Sparkle className="h-6 w-6" />, title: 'Ambiente', desc: 'Luz baixa, lugares confortáveis e aquele clima que faz a noite render.' },
  { icon: <Users className="h-6 w-6" />, title: 'Pra sua turma', desc: 'Espaço pra rolê em grupo, aniversário ou só um happy hour que vira madrugada.' },
]

export default function Experiencia() {
  const head = useReveal()
  return (
    <section id="experiencia" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div ref={head.ref} className={`reveal ${head.visible ? 'in' : ''} mb-12 max-w-2xl`}>
          <p className="eyebrow mb-3 text-xs text-ember">a experiência</p>
          <h2 className="font-display text-4xl leading-tight text-cream sm:text-5xl">
            Mais que sair — é o ponto de encontro da noite.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-line bg-night-2/60 p-6 transition hover:border-ember/50"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full border border-line text-ember transition group-hover:border-ember/60">
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
