const ModelS = () => {
  return (
    <>
      <div className="flex h-screen flex-col overflow-hidden bg-[url('assets/modelS-Mobile.avif')] bg-cover bg-center lg:bg-[url('assets/modelS.avif')]">
        <div>
          <h1 className="mt-28 flex justify-center px-6 text-4xl font-semibold leading-10 tracking-wide lg:mt-48">
            Model S
          </h1>
          <p className="flex justify-center px-6 pb-3.5 pt-1 text-sm font-normal leading-5 underline underline-offset-4">
            Programe una consulta virtual
          </p>
        </div>
        <div className="flex flex-grow flex-col justify-end pb-12 lg:flex-grow lg:pb-20">
          <div className="mx-auto flex flex-col gap-x-6 gap-y-4 text-center lg:flex-row">
            <button className="h-10 w-80 rounded bg-zinc-900/75 text-sm font-medium text-slate-100 transition-colors duration-500 hover:bg-white hover:text-black lg:w-64">
              <span className="align-middle">Pedido personalizado</span>
            </button>
            <button className="h-10 w-80 rounded bg-white/50  text-sm font-medium text-gray-600 transition-colors duration-500 hover:bg-white hover:text-black lg:w-64">
              <span className="align-middle">Saber más</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModelS
