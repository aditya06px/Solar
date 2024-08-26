import React from 'react'
import ServiceImage from "../../assets/service/solar-on-ground.jpg"
import "./ServiceHeroSection.css"

function ServiceHeroSection() {
  return (
    <div className='service-hero-section'>
            <div className='service-hero-section-content'> 
                <h1> OurCompany Services</h1>
                <p> 
                Ajinkya Infra is your trusted partner for solar installations in Kolhapur. We provide sustainable, reliable energy solutions for homes and businesses.
                </p>
            </div>

            <div> 
                <img src={ServiceImage}  alt='service section hero image'/> 
                 {/*  lamb advi image */ }

            </div>
    </div>
  )
}

export default ServiceHeroSection
