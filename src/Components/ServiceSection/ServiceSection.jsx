import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import HomeIcon from "../../assets/service/home.svg"
import BuildingIcon from "../../assets/service/apartment.svg"
import MaintenanceIcon from "../../assets/service/maintenance.svg"
import "./ServiceSection.css"


function ServiceSection() {
    return (
        <div className='service-section-container'>
            <Link to='/service#service-section'>
                <div className="circle-section item-yellow">
                    <img className="circle-section-icon" src={HomeIcon} />
                    <h2 className="circle-section-title"> Rooftop Solar Installation</h2>
                    <div className="circle-section-content">
                        Get rooftop solar installed under PM Surya Yojna with Subsidy
                    </div>
                </div>
            </Link>

            <Link to='/service#service-section'>
                <div className="circle-section item-yellow">
                    <img className="circle-section-icon" src={BuildingIcon} />
                    <h2 className="circle-section-title"> Commercial Solar Solutions</h2>
                    <div className="circle-section-content">
                        Install Solar, Cut Your Bills, and Go Green Today – It's That Simple!
                    </div>
                </div>
            </Link>

            <Link to='/service#maintenance-section'>
                <div className="circle-section item-yellow">
                    <img className="circle-section-icon" src={MaintenanceIcon} />
                    <h2 className="circle-section-title">Reliable Solar Maintenance Services</h2>
                    <div className="circle-section-content">
                        Expert Solar Maintenance for Lasting Performance </div>
                </div>
            </Link>
        </div>
    )
}

export default ServiceSection
