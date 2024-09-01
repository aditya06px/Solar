import React, {useEffect} from 'react'
import { NavLink} from 'react-router-dom';
import '../App.css'

function Sitemap() {

  useEffect(() => {
    window.scrollTo(0, 0);  
}, []);


  return (
    <div className="sitemap-container">
    <h1 className="sitemap-title">Site Map</h1>
    <ul className="sitemap-list">
      <li>
        <NavLink 
          to="/" 
          className="sitemap-link" 
          activeClassName="sitemap-link-active"
        >
          Home
        </NavLink>
        <p className="sitemap-description">Your gateway to Ajinkya Infra's services and offerings.</p>
      </li>
      <li>
        <NavLink 
          to="/about" 
          className="sitemap-link" 
          activeClassName="sitemap-link-active"
        >
          About Us
        </NavLink>
        <p className="sitemap-description">Learn more about our company, our history, and our values.</p>
      </li>
      <li>
        <NavLink 
          to="/service" 
          className="sitemap-link" 
          activeClassName="sitemap-link-active"
        >
          Services
        </NavLink>
        <p className="sitemap-description">Discover the range of services we offer, including gas pipe and solar installations.</p>
      </li>
      <li>
        <NavLink 
          to="/contact" 
          className="sitemap-link" 
          activeClassName="sitemap-link-active"
        >
          Contact Us
        </NavLink>
        <p className="sitemap-description">Get in touch with us for any inquiries or support.</p>
      </li>
    </ul>
  </div>
  )
}

export default Sitemap
