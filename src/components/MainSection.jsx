import homeVideo from '../assets/home-intro.webm'
import homeVideoMobile from '../assets/home-intro-mobile.webm'

const MainSection = () => {
  return (
    <>
      <section id="home-intro" className="h-screen w-full">
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 h-full w-full overflow-hidden object-cover object-center"
          src={window.innerWidth >= 768 ? homeVideo : homeVideoMobile}
        />

        <div className="relative z-40 flex h-screen w-full flex-col items-center">
          <h1 className="mt-28 text-4xl font-semibold text-white lg:mt-48">Disfrute de Tesla</h1>
          <p className="mx-6 mb-4 mt-2 text-center text-sm text-white">
            Programe una prueba de conducción hoy mismo
          </p>
          <div className="flex flex-grow flex-col justify-end pb-12 lg:flex-grow lg:pb-20">
            <div className="mx-auto flex flex-col text-center lg:flex-row">
              <button className="h-10 w-80 rounded border-[3px] border-white bg-white/5 px-12 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black lg:w-72">
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
