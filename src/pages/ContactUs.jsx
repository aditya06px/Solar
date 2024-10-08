import React, {useEffect} from 'react'
import AddressComponent from "../Components/AddressComponent/AddressComponent.jsx"
import ContactUsForm from "../Components/ContactUsForm/ContactUsForm.jsx"
import ContactUsHeroSection from "../Components/ContactUsHeroSection/ContactUsHeroSection.jsx"
import "./ContactUs.css"

function ContactUs() {

  useEffect(() => {
    window.scrollTo(0, 0);  
}, []);


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
