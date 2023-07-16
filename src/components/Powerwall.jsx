const Powerwall = () => {
  return (
    <>
      <div className="flex h-screen w-screen flex-col overflow-hidden bg-[url('assets/solar-Mobile.avif')] bg-cover bg-center lg:bg-[url('assets/solar.avif')]">
        <div>
          <h1 className="mt-28 flex justify-center px-4 text-4xl font-semibold leading-10 tracking-wide lg:mt-48">
            Solar y Powerwall
          </h1>
          <p className="flex justify-center px-6 pb-3.5 pt-1 text-sm font-normal leading-5">
            Energía para todos
          </p>
        </div>
        <div className="flex flex-grow flex-col justify-end pb-12 lg:flex-grow lg:pb-20">
          <div className="text-center">
            <button className="h-10 w-80 rounded bg-zinc-900/75 text-sm font-medium text-slate-100 transition-colors duration-500 hover:bg-white hover:text-black lg:w-64">
              <span className="align-middle">Saber más</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Powerwall
