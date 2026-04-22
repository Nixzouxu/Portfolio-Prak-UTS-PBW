import { useState } from 'react';
import Projects3tab from './components/Projects3tab';   
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import './index.css'
import Particlebackground from './components/Particlebackground'
import Customcursor       from './components/Customcursor'
import Terminalintro      from './components/Terminalintro'
import Easteregg          from './components/Easteregg'
import RPGAbout from './components/RPGAbout'             
import MusicPlayer from './components/MusicPlayer'

function App() {
  const [introDone, setIntroDone] = useState(false)
  if (!introDone) return <Terminalintro onDone={() => setIntroDone(true)} />

  return (
    <div className="min-h-screen bg-[#050A0E] text-white">
      <Particlebackground />
      <Customcursor />
      <Easteregg />
      <MusicPlayer />          {/* kiri bawah */}
      <ThemeToggle />          {/* kanan atas */}
      <div className="scan-line" />
      <Navbar />
      <Hero />
      <RPGAbout />
      <Skills />
      <Projects3tab />
      <Contact />
      <Footer />
    </div>
  )
}

export default App