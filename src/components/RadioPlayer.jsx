import { useRef, useState, useEffect, useCallback } from 'react'

const STREAM = 'https://server6.globalhostla.com:9124/stream'
const BAR_COUNT = 20

export default function RadioPlayer({ onMinimize, onSintonizaRef }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [minimized, setMinimized] = useState(false)
  const [volume, setVolume] = useState(0.8)
  const [bars, setBars] = useState(Array(BAR_COUNT).fill(4))
  const analyserRef = useRef(null)
  const dataRef = useRef(null)
  const frameRef = useRef(null)
  const ctxRef = useRef(null)

  const animateBars = useCallback(() => {
    frameRef.current = requestAnimationFrame(animateBars)
    if (analyserRef.current) {
      analyserRef.current.getByteFrequencyData(dataRef.current)
      setBars(Array.from({ length: BAR_COUNT }, (_, i) => {
        const val = dataRef.current[i % dataRef.current.length] || 0
        return Math.max(4, (val / 255) * 56)
      }))
    } else {
      setBars(Array.from({ length: BAR_COUNT }, () => Math.random() * 50 + 6))
    }
  }, [])

  const start = useCallback(() => {
    const audio = audioRef.current
    if (!ctxRef.current) {
      ctxRef.current = new (window.AudioContext || window.webkitAudioContext)()
      const src = ctxRef.current.createMediaElementSource(audio)
      analyserRef.current = ctxRef.current.createAnalyser()
      analyserRef.current.fftSize = 64
      src.connect(analyserRef.current)
      analyserRef.current.connect(ctxRef.current.destination)
      dataRef.current = new Uint8Array(analyserRef.current.frequencyBinCount)
    }
    if (ctxRef.current.state === 'suspended') ctxRef.current.resume()
    audio.load()
    audio.play().catch(() => {})
    setPlaying(true)
    animateBars()
  }, [animateBars])

  const stop = useCallback(() => {
    const audio = audioRef.current
    audio.pause()
    audio.src = ''
    audio.src = STREAM
    setPlaying(false)
    cancelAnimationFrame(frameRef.current)
    setBars(Array(BAR_COUNT).fill(4))
  }, [])

  // Expose start to parent (for Sintoniza button)
  useEffect(() => {
    if (onSintonizaRef) onSintonizaRef.current = { start, playing: () => playing }
  }, [start, playing, onSintonizaRef])

  const toggleMinimize = (e) => {
    e.stopPropagation()
    const next = !minimized
    setMinimized(next)
    onMinimize?.(next)
  }

  const changeVol = (delta) => {
    const v = Math.min(1, Math.max(0, +(volume + delta).toFixed(1)))
    setVolume(v)
    if (audioRef.current) audioRef.current.volume = v
  }

  return (
    <div className={`radio-player${minimized ? ' minimized' : ''}`} id="radioPlayer">
      <button className="player-toggle" onClick={toggleMinimize} title={minimized ? 'Expandir' : 'Minimizar'}>
        {minimized ? '▲' : '–'}
      </button>
      <div className="player-glow"></div>

      <div className="player-visualizer">
        {bars.map((h, i) => <span key={i} style={{ height: h + 'px' }} />)}
      </div>

      <div className="player-info">
        <div className="player-logo"></div>
        <div>
          <p className="player-name">Radio Bahía 90.3 FM</p>
          <p className={`player-status${playing ? ' live' : ''}`}>{playing ? 'Reproduciendo...' : 'En vivo'}</p>
        </div>
      </div>

      <div className="player-controls">
        <button className="ctrl-btn" onClick={() => changeVol(-0.1)}>
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.5 12A4.5 4.5 0 0 0 14 7.5v9A4.5 4.5 0 0 0 18.5 12zM5 9v6h4l5 5V4L9 9H5z"/></svg>
        </button>
        <button className="ctrl-btn play-btn" onClick={playing ? stop : start}>
          {playing
            ? <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h12v12H6z"/></svg>
            : <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          }
        </button>
        <button className="ctrl-btn" onClick={() => changeVol(0.1)}>
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.5v9A4.5 4.5 0 0 0 16.5 12z"/></svg>
        </button>
      </div>

      <div className="player-volume">
        <span>🔈</span>
        <div className="vol-track"><div className="vol-fill" style={{ width: volume * 100 + '%' }}></div></div>
        <span>🔊</span>
      </div>

      <audio ref={audioRef} crossOrigin="anonymous" preload="none">
        <source src={STREAM} type="audio/mpeg" />
      </audio>
    </div>
  )
}
