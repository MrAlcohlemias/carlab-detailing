import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Hero from "./sections/Hero"
import Services from "./sections/Services"
import Booking from "./sections/Booking"
import Gallery from "./sections/Gallery"
import Contact from "./sections/Contact"
import WhatsAppButton from "./components/WhatsAppButton"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Booking />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </>
  )
}

export default App