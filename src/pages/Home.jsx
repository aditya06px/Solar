import React from 'react'
import  CarouselComponent  from "../Components/Carousel/CarouselComponent.jsx"
import ServiceSection from "../Components/ServiceSection/ServiceSection.jsx"
import AboutUsSection from "../Components/AboutUsSection/AboutUsSection.jsx"

function Home() {
  return (
    <div className='home-container'>
      <CarouselComponent />
      <AboutUsSection />
      <ServiceSection />
    </div>
  )
}

export default Home
