import { useEffect } from 'react'

const Footer = () => {
  useEffect(() => {
    const footerElement = document.querySelector('#landing-footer')
    const lastSection = document.querySelector('.lastSection')

    const observerOptions = {
      root: null, // default to the viewport
      rootMargin: '0px', // as soon as the element is visible
      threshold: 0.9, // visibility ratio
    }

    const lastSectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          footerElement.classList.remove('invisible')
        } else {
          footerElement.classList.add('invisible')
        }
      })
    }, observerOptions)
    lastSectionObserver.observe(lastSection)
  }, [])

  return (
    <footer
      id="landing-footer"
      className="fixed bottom-0 z-50 mt-auto flex h-12 w-full flex-col items-center justify-center"
    >
      <ol className="flex h-4 flex-col items-center text-xs lg:flex-row [&>li>a]:inline-block [&>li>a]:px-2 [&>li>a]:pb-6 [&>li>a]:text-slate-100">
        <li>
          <a href="">Tesla © 2023</a>
        </li>
        <li>
          <a href="">Privacidad y legal</a>
        </li>
        <li>
          <a href="">Contacto</a>
        </li>
        <li>
          <a href="">Noticias</a>
        </li>
        <li>
          <a href="">Seguir informado</a>
        </li>
        <li>
          <a href="">Localización de tiendas</a>
        </li>
      </ol>
    </footer>
  )
}
export default Footer
