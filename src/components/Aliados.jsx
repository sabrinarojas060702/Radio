const aliados = [
  '/Img/rio_supermarket_logo.jpeg',
  '/Img/images.png',
  '/Img/clean.jpg',
  '/Img/garaje.jpg',
]

export default function Aliados() {
  return (
    <section id="ali" className="Aliados">
      <h3 className="aliados-titulo">Tiendas aliadas a Radio Bahia</h3>
      <div className="aliados-track-wrapper">
        <div className="aliados-track">
          {aliados.map((src, i) => (
            <div key={i} className="aliado-item" style={{ backgroundImage: `url(${src})` }} />
          ))}
        </div>
      </div>
    </section>
  )
}
