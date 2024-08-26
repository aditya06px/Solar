import React from 'react'
import AboutUs from "../../assets/about-us/team-meet.jpg"
import "./AboutUsHeroSection.css"

function AboutUsHeroSection() {
  return (
    <div className='about-us-hero-section'>
      <section className='about-us-hero-section-container'>
        <div className='about-us-hero-section-content'>
          <h1> About Us</h1>
          <p>Ajinkya Infra is a Kolhapur-based company specializing in solar energy solutions. With years of experience in the energy sector, we aim to provide reliable and safe services</p>
        </div>

        <div className='about-us-company-img-container'>
          <img src={AboutUs} alt='Company photo' />
        </div>

      </section>
    </div>
  )
}

export default AboutUsHeroSection
