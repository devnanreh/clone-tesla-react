const Carga = () => {
  return (
    <>
      <div className="lastSection flex h-screen w-screen flex-col overflow-hidden bg-[url('assets/charge-Mobile.avif')] bg-cover bg-center shadow-[inset_0px_-138px_107px_10px_rgba(0,0,0,0.4)] lg:bg-[url('assets/charge.avif')]">
        <div>
          <h1 className="mt-48 flex justify-center px-6 text-4xl font-semibold leading-10 tracking-wide">
            Accesorios
          </h1>
        </div>
        <div className="flex flex-grow flex-col justify-end pb-6 lg:flex-grow lg:pb-20">
          <div className="mx-auto flex flex-col gap-x-6 gap-y-2 py-4 text-center lg:flex-row">
            <button className="h-10 w-96 rounded bg-white py-2 text-sm font-medium text-black transition-colors duration-500 hover:bg-zinc-900/75 hover:text-white lg:w-64">
              <span className="align-middle">Comprar ahora</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Carga
