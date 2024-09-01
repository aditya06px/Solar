import React from 'react'
import MaintenanceGuy from "../../assets/service/maintenance-guy1.jpg"
import "./AboutUsCard1.css"

function ServiceMaintenanceCard() {
  return (
    <div className='about-us-card1 service-maintenance-card'>
    <div className='our-mission-img-container'> 
    <img className='our-mission-img maintenance-guy-img' src={MaintenanceGuy} alt='maintenance for solar installation in kolhapur'/>
    </div>

    <div className='about-us-card1-content'> 
    <h2>Reliable Solar Maintenance Services </h2>
    <p>Ensure the longevity and efficiency of your solar installations with Ajinkya Infra's reliable solar maintenance services. Our expert technicians provide regular inspections, cleaning, and repairs to keep your solar systems performing at their best, year after year. </p>
    </div>

  </div>
  )
}

export default ServiceMaintenanceCard
