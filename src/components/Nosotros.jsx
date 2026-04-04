export default function Nosotros() {
  return (
    <section id="nosotros" className="nosotros">
      <div className="nosotros-texto">
        <h2>Descubre<br /><span className="nosotros-highlight">quienes</span> Somos</h2>
        <p className="nosotros-desc">Somos una emisora de radio que ofrece programación en vivo, incluyendo una selección musical.</p>
        <div className="nosotros-timeline">
          <div className="timeline-item">
            <div className="timeline-dot">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m226-559 78 33q14-28 29-54t33-52l-56-11-84 84Zm142 83 114 113q42-16 90-49t90-75q70-70 109.5-155.5T806-800q-72-5-158 34.5T492-656q-42 42-75 90t-49 90Z"/></svg>
            </div>
            <div className="timeline-content">
              <p className="timeline-title">Misión</p>
              <p className="timeline-text">Somos una emisora de radio que ofrece programación en vivo, incluyendo una selección musical.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M607.5-372.5Q660-425 660-500t-52.5-127.5Q555-680 480-680t-127.5 52.5Q300-575 300-500t52.5 127.5Q405-320 480-320t127.5-52.5Z"/></svg>
            </div>
            <div className="timeline-content">
              <p className="timeline-title">Visión</p>
              <p className="timeline-text">Somos una emisora de radio que ofrece programación en vivo, incluyendo una selección musical.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="nosotros-visual">
        <div className="nosotros-img"></div>
        <div className="nosotros-card nosotros-card--top">
          <div className="ncard-icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M160-80q-33 0-56.5-23.5T80-160v-480q0-25 13.5-45t36.5-29l506-206 26 66-330 134h468q33 0 56.5 23.5T880-640v480q0 33-23.5 56.5T800-80H160Z"/></svg>
          </div>
          <div>
            <p className="ncard-title">Programación</p>
            <p className="ncard-sub">Para cada hora del día</p>
          </div>
        </div>
        <div className="nosotros-card nosotros-card--bottom">
          <div className="ncard-icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-480h400v-80H280v80Zm0-160h400v-80H280v80Z"/></svg>
          </div>
          <div>
            <p className="ncard-title">Noticias</p>
            <p className="ncard-sub">Para cada hora del día</p>
          </div>
        </div>
      </div>
    </section>
  )
}
