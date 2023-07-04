const Carga = () => {
  return (
    <>
      <div className="lastSection flex h-screen w-screen flex-col overflow-hidden bg-[url('/public/charge.avif')] bg-cover bg-center lg:bg-[url('/public/charge.avif')]">
        <div>
          <h1 className="mt-48 flex justify-center px-6 text-4xl font-semibold leading-10 tracking-tighter">
            Accesorios
          </h1>
        </div>
        <div className="flex flex-grow flex-col justify-end pb-6 lg:flex-grow lg:pb-20">
          <div className="mx-auto flex flex-col gap-x-6 gap-y-2 py-4 text-center lg:flex-row">
            <button className="h-10 w-96 rounded bg-zinc-900/75 py-2 text-sm font-medium text-slate-100 transition-colors duration-500 hover:bg-white hover:text-black lg:w-64">
              <span className="align-middle">Comprar ahora</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Carga
