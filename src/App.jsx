import { useState } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Portfolio from './components/Portfolio'
import FirstPage from './components/FirstPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <FirstPage />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
