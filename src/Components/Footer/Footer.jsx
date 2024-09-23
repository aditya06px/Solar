import React from 'react'
import './Footer.css'
import { NavLink} from 'react-router-dom';
import Call  from "../../assets/footer-icons/call.png"
import Deskphone from "../../assets/footer-icons/deskphone.png"
import Location from "../../assets/footer-icons/location-on.png"
import Mail from "../../assets/footer-icons/mail.png"
import Schedule from "../../assets/footer-icons/schedule.png"
import LogoMobile from "../../assets/footer-logo/logo-mobile-footer.png"
import LogoDesktop from "../../assets/footer-logo/logo-pc-footer.png"

function Footer() {

    return (
        <footer className='footer'>
            <div className='footer-container'>

                <div className='footer-logo-container'>
                    <img
                        className='footer-logo'
                        src={LogoDesktop}
                        srcSet={`${LogoMobile} 480w, ${LogoDesktop} 768w`}
                        sizes="(max-width: 480px) 100vw"
                        alt='Ajinkya Infra company logo'
                    />
                    <p style={{textAlign: 'end' , fontSize: '15px'}}> by Ajinkya Enterprises </p>
                </div>

                 <div className='office-details'>
    
                    <h3> Office </h3>
                    <ul>
                        <li>
                            <img className='footer-icon flex-start' src={Location} alt='Ajinkya Infra address in Kolhapur' />
                            <span> 
                            <a href="https://www.google.com/maps/search/?api=1&query=303+Modern+Apartments,+Mali+Colony,+Rajarampuri,+Kolhapur+416008+Maharashtra" target="_blank">
                                303 Modern Apartments, Mali Colony, Rajarampuri, Kolhapur 416008 Maharashtra 
                            </a>
                                </span>
                        </li>

                        <li>
                            <img className='footer-icon' src={Deskphone} alt='Ajinkya Infra telephone number' />
                            <span> <a href="tel:+0231- 4050473" >0231- 4050473 </a></span>
                        </li>

                        <li>
                            <img className='footer-icon' src={Call} alt='Call Ajinkya Infra' />
                            <span><a href="tel:+91 9373979779">+91 9373979779 ,</a>
                            <a href="tel:+91 9359945490">+91 9359945490</a>
                            </span>
                        </li>

                        <li>
                            <img className='footer-icon' src={Mail} alt='Contact Ajinkya Infra via email' />
                            <span>
                            <a href="mailto:info@ajinkyainfra.in?subject=Enquiry%20about%20solar%20System&body=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services.">
                                info@ajinkyainfra.in
                              </a>  
                                </span>
                        </li>
                        <li>
                            <img className='footer-icon flex-start'  src={Schedule} alt='Ajinkya Infra operating hours icon' />
                            <span>9.00 am - 6.00 pm  <br />Mon - Sat</span>
                        </li>

                    </ul>
                </div>

              
                <div className='footer-quick-links'>
                    <h3> Quick Links </h3>
                    <ul>
                    <NavLink to="/calculator"> 
                        <li>Solar Calculator</li>
                     </NavLink>
                        <li>Client Titles</li>
                       <NavLink to="/contact"> 
                                <li> Contact</li>
                       </NavLink> 

                       <NavLink to="/sitemap"> 
                                <li> Site Map</li>
                       </NavLink>  
                            

                    </ul>
                </div>
                
            
            </div>

            <p className='footer-copyright-txt'> © 2024 Ajinkya Infra – All Rights Reserved </p>
        </footer>
    )
}

export default Footer
