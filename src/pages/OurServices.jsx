import React from 'react'
import "./OurServices.css"
import ServiceHeroSection from "../Components/ServiceHeroSection/ServiceHeroSection.jsx"
import MainServiceSection from "../Components/MainServiceSection/MainServiceSection.jsx"
import ServiceMaintenanceCard from "../Components/AboutUsCard/ServiceMaintenanceCard.jsx"

function OurServices() {
  return (
    <div className='our-service-page'>
      <ServiceHeroSection />
      <MainServiceSection />
      <ServiceMaintenanceCard id="maintenance-section" />
    </div>
  )
}

export default OurServices
