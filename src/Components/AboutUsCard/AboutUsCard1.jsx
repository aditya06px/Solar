import React from 'react'
import AboutUsImage from "../../assets/about-us/about-us2.jpg"
import "./AboutUsCard1.css"

function AboutUsCard1() {
  return (
    <div className='about-us-card1'>
      <div className='our-mission-img-container'> 
      <img className='our-mission-img' src={AboutUsImage} alt='Our mission for solar installations in Kolhapur'/>
      </div>

      <div className='about-us-card1-content'> 
      <h2>Our Mission and Values </h2>
      <p> At Ajinkya Infra, our mission is to empower communities and businesses with sustainable energy solutions. We strive to lead the way in providing safe, efficient, and eco-friendly services through innovation and attention to detail. Our core values revolve around customer satisfaction, quality craftsmanship, and a commitment to environmentally responsible practices. </p>
      </div>

    </div>
  )
}

export default AboutUsCard1
