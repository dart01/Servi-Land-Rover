import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Gallery from './components/Gallery.jsx'
import Testimonials from './components/Testimonials.jsx'
import AppointmentCTA from './components/AppointmentCTA.jsx'
import Footer from './components/Footer.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <AppointmentCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

export default App

