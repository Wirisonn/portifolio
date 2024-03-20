import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { About, Contact, Home, Portifolio } from './pages'
import { Nav } from "./components";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portifolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Nav />
    </Router>
    
    </>
  )
}

export default App
