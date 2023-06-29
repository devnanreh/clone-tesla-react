const ModelY = () => {
  return (
    <>
      <div
        className="flex h-screen min-h-full w-screen flex-col overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/public/modelY.avif')" }}
      >
        <h1 className="mt-48 flex justify-center px-6 text-4xl font-semibold leading-10 tracking-tighter">
          Model Y
        </h1>
        <p className="flex justify-center px-6 pb-3.5 pt-1 text-sm font-normal leading-5 underline underline-offset-4">
          Concertar una prueba de conducción
        </p>
        <div className="flex flex-grow flex-col justify-end pb-4">
          <div className="mx-auto flex gap-x-6 gap-y-4 py-4 text-center">
            <a
              className="h-10 w-64 rounded bg-zinc-900/75 py-2 text-sm font-medium text-slate-100 transition-colors duration-500 hover:bg-white hover:text-black"
              href="http://"
            >
              <span className="align-middle">Explorar inventario</span>
            </a>
            <a
              className="h-10 w-64 rounded bg-white/50 py-2 text-sm font-medium text-gray-600 transition-colors duration-500 hover:bg-white hover:text-black"
              href="http://"
            >
              <span className="align-middle">Pedido personalizado</span>
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="pb-4 text-xs underline underline-offset-4">Disponible con Moves III</p>
        </div>
      </div>
    </>
  )
}

export default ModelY
