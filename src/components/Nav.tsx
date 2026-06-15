import { useEffect, useState } from 'react'
import { Menu, X } from '../icons'

const links = [
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Como chegar', href: '#local' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-neon/20 bg-night/90 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#" className="flex items-center">
          <img
            src="/ChatGPT%20Image%2014%20de%20jun.%20de%202026%2C%2022_34_59.png"
            alt="Hookah Kinss"
            className="h-12 w-auto animate-neon-pulse"
          />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm font-medium text-ash transition-colors duration-200 hover:text-neon"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center text-ash transition hover:text-neon md:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-neon/15 bg-night/95 px-5 pb-6 pt-5 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-lg font-medium text-cream transition hover:text-neon"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
