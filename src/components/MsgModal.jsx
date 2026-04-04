import { useState } from 'react'

export default function MsgModal({ open, onClose }) {
  const [text, setText] = useState('')

  const send = () => {
    if (!text.trim()) return
    window.open(`https://wa.me/584267378893?text=${encodeURIComponent(text)}`, '_blank')
    onClose()
    setText('')
  }

  return (
    <div className={`msg-overlay${open ? ' active' : ''}`} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="msg-modal">
        <button className="msg-close" onClick={onClose}>&times;</button>
        <h3>Enviar mensaje</h3>
        <p className="msg-to">Para: <span>Radio Bahia</span></p>
        <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Escribe tu mensaje aquí..." rows={5} />
        <button className="msg-send" onClick={send}>
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>
          Enviar por WhatsApp
        </button>
      </div>
    </div>
  )
}
