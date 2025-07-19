import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Fleet from './components/Fleet'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Hero setCurrentPage={setCurrentPage}/>
      case 'layanan':
        return <Services />
      case 'armada':
        return <Fleet />
      case 'tentang':
        return <About />
      case 'testimoni':
        return <Testimonials />
      case 'kontak':
        return <Contact />
      default:
        return <Hero />
    }
  }

  return (
    <div className="bg-light min-vh-100">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App