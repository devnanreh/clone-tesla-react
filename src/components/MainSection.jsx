const MainSection = () => {
  return (
    <>
      <section id="home-intro" className="h-screen w-full">
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 h-full w-full overflow-hidden object-cover object-center"
          src="/public/videoHome.webm"
        />
        <div className="relative z-40 flex h-screen w-full flex-col items-center">
          <h1 className="mt- mt-48 text-4xl font-semibold text-white">Disfrute de Tesla</h1>
          <p className="mx-6 mb-4 mt-2 text-sm text-white">
            Programe una prueba de conducción hoy mismo
          </p>
          <div className="flex flex-grow flex-col justify-end pb-6 lg:flex-grow lg:pb-16">
            <div className="mx-auto flex flex-col gap-x-6 gap-y-2 py-4 text-center lg:flex-row">
              <button className="h-10 w-96 rounded border-[3px] border-white bg-white/5 px-12 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black lg:w-72">
                <span className="align-middle">Prueba de conducción</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainSection
