const Powerwall = () => {
  return (
    <>
      <div
        className="flex h-screen min-h-full w-screen flex-col overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/public/solar.avif')" }}
      >
        <h1 className="mt-48 flex justify-center px-6 text-4xl font-semibold leading-10 tracking-tighter">
          Solar y Powerwall
        </h1>
        <p className="flex justify-center px-6 pb-3.5 pt-1 text-sm font-normal leading-5">
          Energía para todos
        </p>
        <div className="flex flex-grow flex-col justify-end pb-16">
          <div className="mx-auto flex gap-x-6 gap-y-4 py-4 text-center">
            <a
              className="h-10 w-64 rounded bg-zinc-900/75 py-2 text-sm font-medium text-slate-100 transition-colors duration-500 hover:bg-white hover:text-black"
              href="http://"
            >
              <span className="align-middle">Saber más</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Powerwall
