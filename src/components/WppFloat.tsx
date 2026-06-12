import { wa } from '../config'
import { Whats } from '../icons'

export default function WppFloat() {
  return (
    <a
      href={wa('Olá! Quero reservar uma mesa na Hookah Kinss.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reservar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.6)] transition hover:scale-105"
      style={{ bottom: 'calc(1.25rem + env(safe-area-inset-bottom))' }}
    >
      <Whats className="h-7 w-7" />
    </a>
  )
}
