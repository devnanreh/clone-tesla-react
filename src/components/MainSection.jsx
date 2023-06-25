import videoHome from '../assets/videoHome.webm'

const MainSection = () => {
  return (
    <>
      <div className="relative z-20 flex h-screen w-full flex-col items-center">
        <h1 className="mt- mt-36 text-4xl font-medium text-white">Disfrute de Tesla</h1>
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
      <div className="absolute bottom-0 top-0 z-10 min-h-screen w-screen">
        <video src={videoHome} autoPlay loop muted></video>
      </div>
    </>
  )
}

export default MainSection
