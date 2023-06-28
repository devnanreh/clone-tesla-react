const MainSection = () => {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 h-screen min-h-full w-screen overflow-hidden object-cover object-center"
        src="/public/videoHome.webm"
      />
      <div className="relative z-40 flex h-screen w-full flex-col items-center">
        <h1 className="mt- mt-48 text-4xl font-semibold text-white">Disfrute de Tesla</h1>
        <p className="mx-6 mb-4 mt-2 text-sm text-white">
          Programe una prueba de conducción hoy mismo
        </p>
        <div className="flex flex-grow flex-col justify-end pb-20">
          <a
            className="rounded border-[3px] border-white bg-white/5 px-12 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black"
            href="#"
          >
            Prueba de conducción
          </a>
        </div>
      </div>
    </>
  )
}

export default MainSection
