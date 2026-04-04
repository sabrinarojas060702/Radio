import { useRef, useState, useCallback } from 'react'

// Global registry so all cards share the same "stop others" logic
const audioRegistry = []

export function useAudioCard() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const register = useCallback((el) => {
    audioRef.current = el
    if (el && !audioRegistry.includes(el)) audioRegistry.push(el)
  }, [])

  const toggle = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      // Stop all others
      audioRegistry.forEach(a => { if (a !== audio) { a.pause(); a._setPlaying?.(false) } })
      audio.play().catch(() => {})
      setPlaying(true)
    } else {
      audio.pause()
      setPlaying(false)
    }
  }, [])

  const onEnded = useCallback(() => setPlaying(false), [])

  // Expose setter so other cards can reset this one
  if (audioRef.current) audioRef.current._setPlaying = setPlaying

  return { register, toggle, playing, onEnded }
}
