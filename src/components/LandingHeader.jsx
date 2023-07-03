const LandingHeader = () => {
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

  // Intersection Observer
  const headerElement = document.querySelector('#landing-header')
  const sectionOne = document.querySelector('.home-intro')

  const observerOptions = {
    root: null, // default to the viewport
    rootMargin: '0px', // as soon as the element is visible
    threshold: 0.9, // visibility ratio
  }

  const sectionOneObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        headerElement.classList.add('invert')
      } else {
        headerElement.classList.remove('invert')
      }
    })
  }, observerOptions)

  sectionOneObserver.observe(sectionOne)

  return (
    <header
      id="landing-header"
      className="absolute z-50 flex h-14 w-full text-black transition duration-500"
    >
      <div className="flex w-2/6 ps-8">
        <img className="m-4 flex w-32" src="/public/teslaLogo.svg" alt="Tesla Logo" />
      </div>
      <div className="flex w-2/6 items-center justify-center">
        <ol className="flex text-sm [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 [&>li>a]:text-current">
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
            <a href="">Powerwall</a>
          </li>
          <li>
            <a href="">Carga</a>
          </li>
        </ol>
      </div>
      <div className="flex w-2/6 items-center justify-end pe-8">
        <ul className="flex text-sm [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 [&>li>a]:text-current">
          <li>
            <a href="">Soporte</a>
          </li>
          <li>
            <a href="">Tienda</a>
          </li>
          <li>
            <a href="">Cuenta</a>
          </li>
          <li>
            <a href="">Menu</a>
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
