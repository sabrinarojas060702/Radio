import { useState } from 'react'

const programas = [
  {
    title: 'Que viva la fiesta',
    expandTitle: 'Que Viva la Fiesta',
    desc: 'El programa más animado de Radio Bahía. Música tropical, salsa y merengue para encender tu día con la mejor energía caribeña.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M312-240q-51 0-97.5-18T131-311q-48-45-69.5-106.5T40-545q0-78 38-126.5T189-720q14 0 26.5 2.5T241-710l239 89 239-89q13-5 25.5-7.5T771-720q73 0 111 48.5T920-545q0 66-21.5 127.5T829-311q-37 35-83.5 53T648-240Z"/></svg>,
  },
  {
    title: 'La mañana alegre y feliz',
    expandTitle: 'La Mañana Alegre y Feliz',
    desc: 'Comienza tu mañana con buena vibra. Noticias, música y entretenimiento para arrancar el día con una sonrisa desde las 6am.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-28 346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Z"/></svg>,
  },
  {
    title: 'Lo nuestro es lo mejor',
    expandTitle: 'Lo Nuestro es lo Mejor',
    desc: 'Un homenaje a la música latinoamericana. Los mejores éxitos de ayer y hoy que nos identifican como pueblo y cultura.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M287-167q-47-47-47-113t47-113q47-47 113-47 23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47q-66 0-113-47Z"/></svg>,
  },
  {
    title: 'Melao y Canela',
    expandTitle: 'Melao y Canela',
    desc: 'Romanticismo puro. Baladas, boleros y música de amor para los corazones que vibran con las melodías más dulces de nuestra radio.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-520q-68-62-111-104.5T302-698q-24-31-33-54.5t-9-47.5q0-50 35-85t86-35q28 0 54 12.5t45 33.5q19-21 45-33.5t54-12.5q51 0 86 35t35 85q0 24-9 47.5T658-698q-24 31-67 73.5T480-520Z"/></svg>,
  },
]

export default function Sobre() {
  const [expanded, setExpanded] = useState(null)

  const toggle = (i) => setExpanded(expanded === i ? null : i)

  return (
    <section id="sobre" className="Sobre">
      <div className="sobre-programas">
        {programas.map((p, i) => (
          <div className={`programa-card${expanded === i ? ' expanded' : ''}`} key={i}>
            <div className="programa-icon">{p.icon}</div>
            <p>{p.title}</p>
            <button className="Descripcion" onClick={() => toggle(i)}>
              {expanded === i ? 'Cerrar' : 'Descripcion'}
            </button>
            <div className="programa-desc-panel">
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="sobre-texto">
        <h2>Disfruta de la <span className="sobre-highlight">programación</span> diaria</h2>
        <p>No te pierdas de nuestra programación, ahora tambien en android.</p>
        <button className="btn-descargar">
          <span className="btn-icon"></span>
          Descargar Aquí
        </button>
      </div>
    </section>
  )
}
