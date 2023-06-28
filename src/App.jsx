import LandingHeader from './components/LandingHeader'
import MainSection from './components/MainSection'
import ModelS from './components/ModelS'

function App() {
  return (
    <>
      <LandingHeader />
      <div className="relative h-screen w-full snap-y snap-mandatory overflow-y-auto overflow-x-hidden scroll-smooth">
        <div className="snap-center">
          <MainSection />
        </div>
        <div className="snap-center">
          <ModelS />
        </div>
      </div>
    </>
  )
}

export default App
