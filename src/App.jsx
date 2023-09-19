import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, HashRouter } from "react-router-dom";
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Portfolio from './components/Portfolio'
import FirstPage from './components/FirstPage'

function App() {
  const [count, setCount] = useState(0)

  const aboutRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();

  return (
    <div className="App">
      <HashRouter>
      <Header refs={{aboutRef, portfolioRef, contactRef}}/>
      <FirstPage />
      <About ref={aboutRef}/>
      <Portfolio ref={portfolioRef}/>
      <Contact ref={contactRef}/>
      </HashRouter>
      <Footer />
    </div>
  )
}

export default App
