import Nav from './Nav'
import MusicCard from './MusicCard'

const heroCards = [
  { img: '/Img/ajena.jpeg',  title: 'Tu Eres AJENA',      artist: 'Eddy Herrera',   src: '/music/Tu Eres AJENA  - Eddy Herrera [Video Oficial].mp3' },
  { img: '/Img/elvis.jpeg',  title: 'Pegadito Suavecito', artist: 'Elvis Crespo',   src: '/music/Pegadito Suavecito.mp3' },
  { img: '/Img/vale.jpg',    title: 'Vale la Pena',       artist: 'Juan Luis Guerra', src: '/music/Juan Luis Guerra 4.40 - Vale la Pena (Live) (Video Oficial).mp3' },
]

export default function Hero({ onSintoniza }) {
  return (
    <section id="inicio" className="Pageprincipal">
      <Nav />
      <div className="hero-body">
        <div className="hero-texto">
          <h1>Disfruta de la <span className="highlight">sintonía</span></h1>
          <p className="hero-sub">de <span className="logo-box"></span></p>
          <button className="btn-sintoniza" onClick={onSintoniza}>Sintoniza</button>
        </div>

        <div className="cards-container">
          {heroCards.map((c, i) => (
            <div className="card" key={i}>
              <div className="card-icon" style={{ backgroundImage: `url(${c.img})` }}>
                <MusicCard src={c.src} />
              </div>
              <div>
                <p className="card-titulo">{c.title}</p>
                <p className="card-num">{c.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
