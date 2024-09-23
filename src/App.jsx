import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import Navbar from "./Components/Navbar/Navbar.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import Home from "./pages/Home.jsx"
import AboutUs from "./pages/AboutUs.jsx"
import ContactUs from "./pages/ContactUs.jsx"
import OurServices from "./pages/OurServices.jsx"
import SolarCalculator from "./Components/SolarCalculator/SolarCalculator.jsx"
import './App.css'
import Sitemap from "./pages/Sitemap.jsx"


function App() {

  const [activePage, setActivePage] = useState('Home');

  const handleItemClick = (page) => {
    setActivePage(page);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar activePage={activePage} handleItemClick={handleItemClick} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/service" element={<OurServices />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/calculator" element={<SolarCalculator />} />
        </Routes>
        <Footer activePage={activePage} handleItemClick={handleItemClick} />
      </BrowserRouter>
    </>
  )
}

export default App
