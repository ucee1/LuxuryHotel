import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Components/Home';
import About from './Components/About';
import Destination from './Components/Destination';
import Contact from './Components/Contact';
import Services from './Components/Services';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <NavBar></NavBar> */}
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      </div>
    </>
  )
}

export default App
