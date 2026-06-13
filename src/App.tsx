import { useState } from 'react'
import AgeGate from './components/AgeGate'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Experiencia from './components/Experiencia'
import Galeria from './components/Galeria'
import Cardapio from './components/Cardapio'
import Local from './components/Local'
import Footer from './components/Footer'

export default function App() {
  const [confirmed, setConfirmed] = useState(false)
  const [denied, setDenied] = useState(false)

  if (!confirmed) {
    return (
      <div className="grain min-h-screen">
        <AgeGate
          onConfirm={() => setConfirmed(true)}
          denied={denied}
          onDeny={() => setDenied(true)}
        />
      </div>
    )
  }

  return (
    <div className="grain">
      <Nav />
      <main>
        <Hero />
        <Experiencia />
        <Galeria />
        <Cardapio />
        <Local />
      </main>
      <Footer />
    </div>
  )
}
