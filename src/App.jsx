import { MotionConfig } from 'framer-motion'
import ScrollProgress from './components/animation/ScrollProgress'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Stats from './components/sections/Stats'
import Sports from './components/sections/Sports'
import Rankings from './components/sections/Rankings'
import Personalities from './components/sections/Personalities'
import Reviews from './components/sections/Reviews'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Sports />
        <Rankings />
        <Personalities />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}