import React from 'react'
import  CarouselComponent  from "../Components/Carousel/CarouselComponent"
import ServiceSection from "../Components/ServiceSection/ServiceSection"
import AboutUsSection from "../Components/AboutUsSection/AboutUsSection"

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
