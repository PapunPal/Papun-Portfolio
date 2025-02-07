
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skill from './components/Skill'
import Certificates from './components/Certificate'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
