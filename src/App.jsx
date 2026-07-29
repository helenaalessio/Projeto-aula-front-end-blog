import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Trivia from './components/Trivia'
import Characters from './components/Characters'
import Quotes from './components/Quotes'
import BehindTheScenes from './components/BehindTheScenes'
import Critique from './components/Critique'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Trivia />
        <Characters />
        <Quotes />
        <BehindTheScenes />
        <Critique />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
