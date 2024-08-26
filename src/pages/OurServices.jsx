import React from 'react'
import "./OurServices.css"
import ServiceHeroSection from "../Components/ServiceHeroSection/ServiceHeroSection"
import MainServiceSection from "../Components/MainServiceSection/MainServiceSection"
import ServiceMaintenanceCard from "../Components/AboutUsCard/ServiceMaintenanceCard"

function OurServices() {
  return (
    <div className='our-service-page'>
      <ServiceHeroSection />
      <MainServiceSection />
      <ServiceMaintenanceCard />
    </div>
  )
}

export default OurServices
