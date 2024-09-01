import React from 'react'
import AboutUsImage from "../../assets/home-page-team-img.jpg"
import "./AboutUsSection.css"

function AboutUsSection() {
    return (
      <section className='AboutUs'>
        <div className='AboutUs-content'>
          <h1>About Ajinkya Infra</h1>
          <p>Ajinkya Infra is your trusted partner for solar installations in Kolhapur. We provide sustainable, reliable energy solutions for homes and businesses. With a focus on quality and customer satisfaction, our expert team ensures every project is completed with precision.
          </p>
        </div>
        <div className='AboutUs-image'>
          <img src={AboutUsImage} alt='about Ajinkya Infra solar installation in kolhapur' />
        </div>
      </section>
    );
  }
  
  
export default AboutUsSection
