import React from 'react'
import "./AddressComponent.css"
import Call  from "../../assets/footer-icons/call.png"
import Deskphone from "../../assets/footer-icons/deskphone.png"
import Location from "../../assets/footer-icons/location-on.png"
import Mail from "../../assets/footer-icons/mail.png"
import Schedule from "../../assets/footer-icons/schedule.png"

function AddressComponent() {
  return (
    <div className='address-details'>
    
    <h3> Corporate Office </h3>
    <ul>
        <li>
            <img className='address-icon' src={Location} alt='Company Logo' />
            <p className='first-para'> 303 Modern Apartments, Mali Colony, Rajarampuri, Kolhapur 416008 Maharashtra </p>
        </li>

        <li>
            <img className='address-icon' src={Deskphone} alt='Company Logo' />
            <p>0231- 4050473</p>
        </li>

        <li>
            <img className='address-icon' src={Call} alt='Company Logo' />
            <p>+91 9373979779</p>
        </li>

        <li>
            <img className='address-icon' src={Mail} alt='Company Logo' />
            <p>office@ajinkyainfra.in</p>
        </li>
        <li>
            <img className='address-icon '  src={Schedule} alt='Company Logo' />
            <p className='last-para'>9.00 am - 6.00 pm  <br />Mon - Sat</p>
        </li>

    </ul>
</div>
  )
}

export default AddressComponent
