import { useAudioCard } from '../hooks/useAudioCards'

export default function MusicCard({ src, playing: externalPlaying, onPlay }) {
  const { register, toggle, playing, onEnded } = useAudioCard()

  return (
    <>
      <button
        className={`card-play-btn${playing ? ' playing' : ''}`}
        onClick={toggle}
        aria-label="Reproducir"
      >
        {playing
          ? <svg className="icon-pause-c" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
          : <svg className="icon-play-c" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        }
      </button>
      <audio ref={register} src={src} preload="none" onEnded={onEnded} />
    </>
  )
}
