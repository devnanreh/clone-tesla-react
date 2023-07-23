import { useEffect, useState } from 'react'
import logo from '../assets/logo.svg'

const LandingHeader = () => {
  useEffect(() => {
    // Intersection Observer
    const headerElement = document.querySelector('#landing-header')
    const sectionHome = document.querySelector('#home-intro')

    const observerOptions = {
      root: null, // default to the viewport
      rootMargin: '0px', // as soon as the element is visible
      threshold: 0.9, // visibility ratio
    }

    const sectionHomeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          headerElement.classList.add('invert')
        } else {
          headerElement.classList.remove('invert')
        }
      })
    }, observerOptions)

    sectionHomeObserver.observe(sectionHome)
  }, [])

  // Backdrop
  const listItem = document.querySelectorAll('#landing-header li')
  const menuBackDrop = document.querySelector('#menu-backdrop')

  listItem.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      const { left, top, width, height } = item.getBoundingClientRect()
      menuBackDrop.style.setProperty('--left', `${left}px`)
      menuBackDrop.style.setProperty('--top', `${top}px`)
      menuBackDrop.style.setProperty('--width', `${width}px`)
      menuBackDrop.style.setProperty('--height', `${height}px`)
      menuBackDrop.style.opacity = '1'
      menuBackDrop.style.visibility = 'visible'

      item.addEventListener('mouseleave', () => {
        menuBackDrop.style.opacity = '0'
        menuBackDrop.style.visibility = 'hidden'
      })
    })
  })

  // Menu navbar
  const [menuNav, setMenuNav] = useState(false)

  const handleMenuNav = () => {
    setMenuNav(!menuNav)
  }

  return (
    <header
      id="landing-header"
      className="absolute z-50 grid h-14 w-full grid-cols-2 justify-between text-black transition duration-500 lg:grid lg:grid-cols-3"
    >
      <div className="flex justify-start lg:ps-8">
        <img className="m-4 flex w-32" src={logo} alt="Tesla Logo" />
      </div>

      <div className="hidden justify-center lg:inline-flex">
        <ul className="flex items-center justify-center text-sm hover:cursor-pointer [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 [&>li>a]:font-semibold [&>li>a]:text-current">
          <li>
            <a href="https://tesla.com/models">Model S</a>
          </li>
          <li>
            <a href="https://tesla.com/model3">Model 3</a>
          </li>
          <li>
            <a href="https://tesla.com/modelx">Model X</a>
          </li>
          <li>
            <a href="https://tesla.com/modely">Model Y</a>
          </li>
          <li>
            <a href="https://tesla.com/solarroof">Powerwall</a>
          </li>
          <li>
            <a href="https://tesla.com/solarpanels">Carga</a>
          </li>
        </ul>
      </div>

      <div className="hidden justify-end pe-8 lg:inline-flex">
        <ul className="flex items-center justify-center text-sm hover:cursor-pointer [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 [&>li>a]:font-semibold [&>li>a]:text-current">
          <li>
            <a href="">Soporte</a>
          </li>
          <li>
            <a href="">Tienda</a>
          </li>
          <li>
            <a href="">Cuenta</a>
          </li>
          <li onClick={handleMenuNav}>
            <a href="#">Menú</a>
          </li>
        </ul>
      </div>

      <div className="flex justify-end py-3 pe-2 lg:hidden lg:pe-8">
        <button
          onClick={handleMenuNav}
          className="items-center rounded bg-black/5 px-4 text-sm font-semibold shadow-sm hover:bg-black/10"
        >
          Menú
        </button>
      </div>

      <div
        className={
          menuNav
            ? 'absolute right-0 top-0 h-screen w-80 overflow-scroll bg-white'
            : 'fixed right-full'
        }
      >
        <div onClick={handleMenuNav} className=" flex justify-end px-8 py-8 text-xl">
          X
        </div>
        <ul className="text-sm [&>li>a]:cursor-pointer [&>li]:px-8 [&>li]:pb-6">
          <li>
            <a href="">Model S</a>
          </li>
          <li>
            <a href="">Model 3</a>
          </li>
          <li>
            <a href="">Model X</a>
          </li>
          <li>
            <a href="">Model Y</a>
          </li>
          <li>
            <a href="">Inventario disponible</a>
          </li>
          <li>
            <a href="">Inventario usados</a>
          </li>
          <li>
            <a href="">Tasación</a>
          </li>
          <li>
            <a href="">Prueba de conducción</a>
          </li>
          <li>
            <a href="">Coches de empresa</a>
          </li>
          <li>
            <a href="">Powerwall</a>
          </li>
          <li>
            <a href="">Energia</a>
          </li>
          <li>
            <a href="">Energia para uso comercial</a>
          </li>
          <li>
            <a href="">Utilities</a>
          </li>
          <li>
            <a href="">Carga</a>
          </li>
          <li>
            <a href="">Empleo</a>
          </li>
          <li>
            <a href="">Donde estamos</a>
          </li>
          <li>
            <a href="">Eventos</a>
          </li>
          <li>
            <a href="">Soporte</a>
          </li>
          <li>
            <a href="">Relaciones con los inversores</a>
          </li>
          <li>
            <a href="">Tienda</a>
          </li>
          <li>
            <a href="">Cuenta</a>
          </li>
        </ul>
      </div>

      {/* BackDrop */}
      <div
        id="menu-backdrop"
        className="absolute left-0 top-0 -z-10 h-[var(--height)] w-[var(--width)] translate-x-[var(--left)] translate-y-[var(--top)] rounded bg-black/5 opacity-0 backdrop-blur-lg transition-all delay-75 duration-500 ease-in-out"
      ></div>
    </header>
  )
}

export default LandingHeader
