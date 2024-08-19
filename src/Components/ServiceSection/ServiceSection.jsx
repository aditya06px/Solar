import React from 'react'
import HomeIcon from "../../assets/service/home.svg"
import BuildingIcon from "../../assets/service/apartment.svg"
import MaintenanceIcon from "../../assets/service/maintenance.svg"
import "./ServiceSection.css"


function ServiceSection() {
    return (
        <div className='service-section-container'>
            <div class="circle-section item-yellow">
                <img class="circle-section-icon" src={HomeIcon} />
                <h4 class="circle-section-title"> Rooftop Solar Installation</h4>
                <div class="circle-section-content">
                    Get rooftop solar installed under PM Surya Yojna with Subsidy
                </div>
            </div>

            <div class="circle-section item-yellow">
                <img class="circle-section-icon" src={BuildingIcon} />
                <h4 class="circle-section-title"> Commercial Solar Solutions</h4>
                <div class="circle-section-content">
                Install Solar, Cut Your Bills, and Go Green Today – It's That Simple!
                </div>
            </div>

            <div class="circle-section item-yellow">
                <img class="circle-section-icon" src={MaintenanceIcon} />
                <h4 class="circle-section-title">Reliable Solar Maintenance Services</h4>
                <div class="circle-section-content">
                Expert Solar Maintenance for Lasting Performance </div>
            </div>
        </div>
    )
}

export default ServiceSection
