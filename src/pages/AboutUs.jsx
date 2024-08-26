import React from 'react'
import AboutUsHeroSection from "../Components/AboutUsHeroSection/AboutUsHeroSection"
import AboutUsCard1 from "../Components/AboutUsCard/AboutUsCard1"
import AboutUsCard2 from "../Components/AboutUsCard/AboutUsCard2"

import "./AboutUs.css"

function AboutUs() {
  return (
    <div className='about-us-page'>
       <AboutUsHeroSection />
       <AboutUsCard1 />
       <AboutUsCard2 />
    </div>
  )
}

export default AboutUs
