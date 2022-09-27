import './App.scss'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/home/Home'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Sidebar from './sidebar/Sidebar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"

function App() {
  return (
    <div className="App">
      <Router>
          <AnimatePresence exitBeforeEnter>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/portfolio" element={<Portfolio />} />
              <Route exact path="/experience" element={<Experience />} />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>

          </AnimatePresence>
          <Sidebar />
      </Router>
      
    </div>
  )
}

export default App
