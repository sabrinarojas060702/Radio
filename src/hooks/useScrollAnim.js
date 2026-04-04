import { useEffect } from 'react'

const directions = {
  'anim-fade-left':  { x: '-70px', y: '0' },
  'anim-fade-right': { x: '70px',  y: '0' },
  'anim-fade-down':  { x: '0',     y: '-50px' },
  'anim-fade-up':    { x: '0',     y: '60px' },
  'anim-zoom':       { scale: '0.75' },
}

function applyInitial(el, cls) {
  el.style.opacity = '0'
  el.style.transition = 'none'
  const d = directions[cls]
  if (!d) return
  el.style.transform = d.scale ? `scale(${d.scale})` : `translate(${d.x}, ${d.y})`
}

function animateIn(el, delay = 0) {
  setTimeout(() => {
    el.style.transition = `opacity 1s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 1s cubic-bezier(0.22,1,0.36,1) ${delay}ms`
    el.style.opacity = '1'
    el.style.transform = 'none'
  }, 20)
}

export function useScrollAnim() {
  useEffect(() => {
    const animTargets = [
      { sel: '.nav-principal a',               cls: 'anim-fade-down',  stagger: true,  hero: true },
      { sel: '.hero-texto h1',                 cls: 'anim-fade-left',                  hero: true },
      { sel: '.hero-texto .hero-sub',          cls: 'anim-fade-left',                  hero: true },
      { sel: '.hero-texto .btn-sintoniza',     cls: 'anim-fade-up',                    hero: true },
      { sel: '.card',                          cls: 'anim-fade-right', stagger: true,  hero: true },
      { sel: '.nosotros-texto h2',             cls: 'anim-fade-left' },
      { sel: '.nosotros-texto .nosotros-desc', cls: 'anim-fade-left' },
      { sel: '.timeline-item',                 cls: 'anim-fade-left',  stagger: true },
      { sel: '.nosotros-img',                  cls: 'anim-fade-right' },
      { sel: '.programa-card',                 cls: 'anim-zoom',       stagger: true },
      { sel: '.sobre-texto h2',                cls: 'anim-fade-right' },
      { sel: '.sobre-texto p',                 cls: 'anim-fade-right' },
      { sel: '.sobre-texto .btn-descargar',    cls: 'anim-fade-up' },
      { sel: '.aliados-track-wrapper',         cls: 'anim-fade-up' },
      { sel: '.clasicos-texto h2',             cls: 'anim-fade-left' },
      { sel: '.clasicos-texto > p',            cls: 'anim-fade-left' },
      { sel: '.artista-card',                  cls: 'anim-zoom',       stagger: true },
      { sel: '.musica-card',                   cls: 'anim-fade-right', stagger: true },
      { sel: '.footer-brand',                  cls: 'anim-fade-up' },
      { sel: '.footer-links',                  cls: 'anim-fade-up',    stagger: true },
      { sel: '.footer-contact',                cls: 'anim-fade-up' },
      { sel: '.footer-bottom',                 cls: 'anim-fade-up' },
    ]

    const heroSelectors = animTargets.filter(t => t.hero).map(t => t.sel)
    const scrollMap = new Map()

    animTargets.forEach(({ sel, cls, stagger, hero }, idx) => {
      document.querySelectorAll(sel).forEach((el, i) => {
        applyInitial(el, cls)
        const delay = stagger ? i * 120 : 0
        if (hero) {
          const baseDelay = heroSelectors.indexOf(sel) * 150
          setTimeout(() => animateIn(el, delay), baseDelay + 100)
        } else {
          scrollMap.set(el, delay)
        }
      })
    })

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateIn(entry.target, scrollMap.get(entry.target) || 0)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' })

    scrollMap.forEach((_, el) => observer.observe(el))

    // Aliados titulo shallow observer
    const titulo = document.querySelector('.aliados-titulo')
    if (titulo) {
      applyInitial(titulo, 'anim-fade-down')
      const shallow = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { animateIn(e.target); shallow.unobserve(e.target) } })
      }, { threshold: 0.05 })
      shallow.observe(titulo)
    }

    return () => { observer.disconnect() }
  }, [])
}
