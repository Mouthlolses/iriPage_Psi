import Footer from "./components/layout/Footer"
import About from "./components/sections/About"
import CTA from "./components/sections/CTA"
import FAQ from "./components/sections/FAQ"
import Hero from "./components/sections/Hero"
import Process from "./components/sections/Process"
import Specialties from "./components/sections/Specialties"


function App() {

  return (
     <main className="min-h-screen bg-slate-950 text-white">

      <Hero/>

      <About/>

      <Specialties/>

      <Process/>

       <FAQ/>

       <CTA/>

      <Footer/>
    </main>
  )
}

export default App
