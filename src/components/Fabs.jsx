import { useEffect, useState } from 'react'

export default function Fabs({ minimized, onMsgClick }) {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const check = () => setShowTop(window.scrollY > 100)
    window.addEventListener('scroll', check, { passive: true })
    check()
    return () => window.removeEventListener('scroll', check)
  }, [])

  const msgBottom = minimized ? '82px' : '290px'
  const topBottom = minimized ? '140px' : '348px'

  return (
    <>
      <button className="msg-fab" style={{ bottom: msgBottom }} onClick={onMsgClick} aria-label="Enviar mensaje">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
      </button>
      <button
        className={`top-fab${showTop ? ' visible' : ''}`}
        style={{ bottom: topBottom }}
        onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Volver arriba"
      >
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>
      </button>
    </>
  )
}
