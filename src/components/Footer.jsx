export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo"></div>
          <p>La radio que te acompaña en cada momento. Música, noticias y entretenimiento para toda la familia.</p>
          <div className="footer-socials">
            {['f','in','yt','ig'].map(s => <a key={s} href="#" className="social-btn">{s}</a>)}
          </div>
        </div>
        <div className="footer-links">
          <h4>Navegación</h4>
          <ul>{['Inicio','Quienes Somos','Programación','Clásicos','Aliados'].map(l => <li key={l}><a href="#">{l}</a></li>)}</ul>
        </div>
        <div className="footer-links">
          <h4>Programas</h4>
          <ul>{['Que viva la fiesta','La mañana alegre y feliz','Lo nuestro es lo mejor','Melao y Canela'].map(l => <li key={l}><a href="#">{l}</a></li>)}</ul>
        </div>
        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>📍 Juen Griego</p>
          <p>✉️ Bahia90.03@gmail.com</p>
          <div className="footer-app">
            <span>Disponible en</span>
            <button className="btn-app">Android</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Radio Bahía. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
