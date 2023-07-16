const ModelY = () => {
  return (
    <>
      <div className="flex h-screen w-screen flex-col overflow-hidden bg-[url('assets/modelY-Mobile.avif')] bg-cover bg-center lg:bg-[url('assets/modelY.avif')]">
        <div>
          <h1 className="mt-28 flex justify-center px-6 text-4xl font-semibold leading-10 tracking-wide lg:mt-48">
            Model Y
          </h1>
          <p className="flex justify-center px-6 pb-3.5 pt-1 text-sm font-normal leading-5 underline underline-offset-4">
            Concertar una prueba de conducción
          </p>
        </div>
        <div className="flex flex-grow flex-col justify-end pb-4 lg:flex-grow lg:pb-8">
          <div className="mx-auto flex flex-col gap-x-6 gap-y-4 text-center lg:flex-row">
            <button className="h-10 w-80 rounded bg-zinc-900/75 text-sm font-medium text-slate-100 transition-colors duration-500 hover:bg-white hover:text-black lg:w-64">
              <span className="align-middle">Explorar inventario</span>
            </button>
            <button className="h-10 w-80 rounded bg-white/50 text-sm font-medium text-gray-600 transition-colors duration-500 hover:bg-white hover:text-black lg:w-64">
              <span className="align-middle">Pedido personalizado</span>
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <p className="pb-2 text-xs underline underline-offset-4 lg:pb-4">
            Disponible con Moves III
          </p>
        </div>
      </div>
    </>
  )
}

export default ModelY
