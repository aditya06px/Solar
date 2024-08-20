import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import OurServices from "./pages/OurServices"
import './App.css'
import  CarouselComponent  from "../src/Components/Carousel/CarouselComponent"
import ServiceSection from "./Components/ServiceSection/ServiceSection"
import AboutUsSection from "./Components/AboutUsSection/AboutUsSection"
import ContactUsForm from "./Components/ContactUsForm/ContactUsForm"

function App() {

  const [activePage, setActivePage] = useState('Home');

  const handleItemClick = (page) => {
    setActivePage(page);
};
  return (
    <>
    <BrowserRouter>
      <Navbar activePage={activePage} handleItemClick={handleItemClick} />
      <CarouselComponent />
      <ServiceSection />
      <AboutUsSection />
      <ContactUsForm />
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/contact" element={<ContactUs />} /> 
        <Route path="/service" element={<OurServices />} /> 
      </Routes>
      <Footer activePage={activePage} handleItemClick={handleItemClick} />
    </BrowserRouter>
    </>
  )
}

export default App
