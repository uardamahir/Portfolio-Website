import { LangProvider } from './hooks/useLang.jsx'
import Loader     from './components/Loader.jsx'
import Cursor     from './components/Cursor.jsx'
import Navbar     from './components/Navbar.jsx'
import Hero       from './components/Hero.jsx'
import About      from './components/About.jsx'
import Education  from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Projects   from './components/Projects.jsx'
import Skills     from './components/Skills.jsx'
import Contact    from './components/Contact.jsx'
import Footer     from './components/Footer.jsx'

export default function App() {
  return (
    <LangProvider>
      <Loader />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  )
}
