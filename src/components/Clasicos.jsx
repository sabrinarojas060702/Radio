import MusicPlayBtn from './MusicPlayBtn'

export default function Clasicos() {
  return (
    <section id="clasic" className="Clasicos">
      <div className="clasicos-texto">
        <h2>Disfruta de tus <span className="clasicos-highlight">clasicas</span> favoritas</h2>
        <p>Celebra con nosotros de tus inolvidables y celebres clasicos.</p>
        <div className="clasicos-artistas">
          <div className="artista-card artista-card--1">
            <div className="artista-thumb" style={{ backgroundImage: "url('./Img/andy montañez.jpeg')", backgroundSize: 'cover' }} />
            <div className="artista-info">
              <p className="artista-nombre">Andy Montañez</p>
              <span className="artista-genero">Salsa</span>
            </div>
          </div>
          <div className="artista-card artista-card--2">
            <div className="artista-thumb" style={{ backgroundImage: "url('./Img/Eddy-Herrera-1-1.jpg')", backgroundSize: 'cover' }} />
            <div className="artista-info">
              <p className="artista-nombre">Eddy Herrera</p>
              <span className="artista-genero">Merengue</span>
            </div>
          </div>
        </div>
      </div>

      <div className="clasicos-musica">
        <div className="musica-col">
          <div className="musica-card">
            <div className="musica-thumb" style={{ backgroundImage: "url('./Img/captura-dimension-latina.png')", backgroundSize: 'cover' }} />
            <p className="musica-titulo">Suena el Cuero</p>
            <span className="musica-artista">La Dimension Latina</span>
            <MusicPlayBtn src="./music/Suena el Cuero.mp3" label="Reproducir Suena el Cuero" />
          </div>
          <div className="musica-card">
            <div className="musica-thumb" style={{ backgroundImage: "url('./Img/idiota.jpg')", backgroundSize: 'cover' }} />
            <p className="musica-titulo">El Idiota</p>
            <span className="musica-artista">Eddy Herrera</span>
            <MusicPlayBtn src="./music/El Idiota - Eddy Herrera  Letra.mp3" label="Reproducir El Idiota" />
          </div>
        </div>
        <div className="musica-col musica-col--offset">
          <div className="musica-card musica-card--lg">
            <div className="musica-thumb" style={{ backgroundImage: "url('./Img/dun.jpeg')", backgroundSize: 'cover' }} />
            <p className="musica-titulo">Dun Dun</p>
            <span className="musica-artista">Sonora Tropicana</span>
            <MusicPlayBtn src="./music/Sonora Tropicana - Dun Dun.mp3" label="Reproducir Dun Dun" />
          </div>
        </div>
      </div>
    </section>
  )
}
