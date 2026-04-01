import Header from './components/layout/Header'
import Nav from './components/layout/Nav'
import About from './components/layout/About'
import Projects from './components/layout/Projects'
import Pricing from './components/layout/Pricing'
import Contact from './components/layout/Contact'
import Footer from './components/layout/Footer'
import HomePage from './components/layout/HomePage'
import './css/styles.css';


function App() {

  return (
    <>
      <Header />
      <HomePage />
      <Nav />
      <body>
        <About />
        <Projects />
        <Pricing />
        <Contact />
        <Footer />
      </body>
    </>
  )
}

export default App
