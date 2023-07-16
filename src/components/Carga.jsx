const Carga = () => {
  return (
    <>
      <div className="lastSection flex h-screen w-screen flex-col overflow-hidden bg-[url('assets/charge-Mobile.avif')] bg-cover bg-center shadow-[inset_0px_-200px_35px_-40px_rgba(0,0,0,0.2)] lg:bg-[url('assets/charge.avif')]">
        <div>
          <h1 className="mt-28 flex justify-center px-6 text-4xl font-semibold leading-10 tracking-wide lg:mt-48">
            Accesorios
          </h1>
        </div>
        <div className="flex flex-grow flex-col justify-end pb-10 lg:flex-grow lg:pb-24">
          <div className="text-center">
            <button className="h-10 w-80 rounded bg-white text-sm font-medium text-black transition-colors duration-500 hover:bg-zinc-900/75 hover:text-white lg:w-64">
              <span className="align-middle">Comprar ahora</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Carga
