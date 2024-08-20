import React from 'react'
import AboutUsImage from "../../assets/about-us.png"
import "./AboutUs.css"

function AboutUsSection() {
    return (
      <section className='AboutUs'>
        <div className='AboutUs-content'>
          <h2>About Ajinkya Infra</h2>
          <p>Ajinkya Infra is your trusted partner for solar installations in Kolhapur. We provide sustainable, reliable energy solutions for homes and businesses. With a focus on quality and customer satisfaction, our expert team ensures every project is completed with precision.
          </p>
        </div>
        <div className='AboutUs-image'>
          <img src={AboutUsImage} alt='Ajinkya Infra' />
        </div>
      </section>
    );
  }
  
  
export default AboutUsSection
