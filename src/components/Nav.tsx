import { useEffect, useState } from 'react'
import { config, wa } from '../config'
import { Flame } from '../icons'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-line bg-night/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <Flame className="h-5 w-5 text-ember" />
          <span className="font-display text-2xl leading-none text-cream">{config.name}</span>
        </a>
        <a
          href={wa('Olá! Quero reservar uma mesa na Hookah Kinss.')}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-ember/40 px-5 py-2 text-sm font-semibold text-ember transition hover:bg-ember hover:text-night"
        >
          Reservar
        </a>
      </div>
    </nav>
  )
}
