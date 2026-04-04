import { useRef, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Nosotros from './components/Nosotros'
import Sobre from './components/Sobre'
import Aliados from './components/Aliados'
import Clasicos from './components/Clasicos'
import Footer from './components/Footer'
import RadioPlayer from './components/RadioPlayer'
import MsgModal from './components/MsgModal'
import Fabs from './components/Fabs'
import { useScrollAnim } from './hooks/useScrollAnim'

export default function App() {
  const [minimized, setMinimized] = useState(false)
  const [msgOpen, setMsgOpen] = useState(false)
  const sintonizaRef = useRef(null)

  useScrollAnim()

  const handleSintoniza = () => {
    const player = sintonizaRef.current
    if (!player) return
    if (player.playing()) {
      document.getElementById('radioPlayer')?.classList.remove('shake')
      void document.getElementById('radioPlayer')?.offsetWidth
      document.getElementById('radioPlayer')?.classList.add('shake')
    } else {
      player.start()
    }
  }

  return (
    <>
      <Hero onSintoniza={handleSintoniza} />
      <Nosotros />
      <Sobre />
      <Aliados />
      <Clasicos />
      <Footer />
      <RadioPlayer onMinimize={setMinimized} onSintonizaRef={sintonizaRef} />
      <Fabs minimized={minimized} onMsgClick={() => setMsgOpen(true)} />
      <MsgModal open={msgOpen} onClose={() => setMsgOpen(false)} />
    </>
  )
}
