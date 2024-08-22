import React from 'react'
import AddressComponent from "../Components/AddressComponent/AddressComponent"
import ContactUsForm from "../Components/ContactUsForm/ContactUsForm"
import ContactUsHeroSection from "../Components/ContactUsHeroSection/ContactUsHeroSection"
import "./ContactUs.css"

function ContactUs() {
  return (
    <div className='contact-us-page'>
      <ContactUsHeroSection />
      <div>

        <div className='address-form-section'>
          <AddressComponent />
          <ContactUsForm  />
        </div>

      </div>
    </div>
  )
}

export default ContactUs
