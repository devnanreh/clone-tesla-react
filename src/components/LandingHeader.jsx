const LandingHeader = () => {
  return (
    <header className="fixed z-40 flex h-14 w-full text-white">
      <div className="flex w-2/6 px-12 py-4">
        <img className="w-32 invert" src="/public/teslaLogo.svg" alt="Tesla Logo" />
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
      <div className="flex w-2/6 items-center justify-end">
        <ul className="flex pe-8 text-sm [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-6 [&>li>a]:text-current">
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
    </header>
  )
}

export default LandingHeader
