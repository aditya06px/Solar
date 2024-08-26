import React from 'react'
import AboutUsImage from "../../assets/about-us/graph-img.jpg"
import "./AboutUsCard1.css"

function AboutUsCard2() {
  return (
    <div className='about-us-card1 about-us-card2'>
      <div className='our-mission-img-container'> 
      <img className='our-mission-img our-mission-img-card2' src={AboutUsImage} alt='our-mission-img'/>
      </div>

      <div className='about-us-card1-content'> 
      <h2>Why Choose Us </h2>
      <p> Choosing Ajinkya Infra means choosing peace of mind. Our certified
 team is known for its professionalism 
 and dedication to delivering precise and reliable installations.
  We go above and beyond to meet industry standards and exceed customer expectations, ensuring that every project we undertake is done with care, safety, and a focus on long-term sustainability. </p>
      </div>

    </div>
  )
}

export default AboutUsCard2
