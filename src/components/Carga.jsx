const Carga = () => {
  return (
    <>
      <div
        className="lastSection flex h-screen w-full flex-col bg-cover bg-center"
        style={{ backgroundImage: "url('/public/charge.avif')" }}
      >
        <h1 className="mt-48 flex justify-center px-6 text-4xl font-semibold leading-10 tracking-tighter">
          Accesorios
        </h1>

        <div className="flex flex-grow flex-col justify-end pb-16">
          <div className="mx-auto flex gap-x-6 gap-y-4 py-4 text-center">
            <a
              className="h-10 w-64 rounded bg-zinc-900/75 py-2 text-sm font-medium text-slate-100 transition-colors duration-500 hover:bg-white hover:text-black"
              href="http://"
            >
              <span className="align-middle">Comprar ahora</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Carga
