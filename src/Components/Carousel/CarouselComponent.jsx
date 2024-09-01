import React, { useState, useRef } from 'react';
import Solar1 from "../../assets/carousel/carousel2.jpg"
import Solar2 from "../../assets/carousel/carousel1.jpg"
import Solar3 from "../../assets/carousel/carousel3.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import './CarouselComponent.css';

function CarouselComponent() {
    return (

        <Carousel className='carousel-container'
        autoPlay           
        interval={3000}    
        infiniteLoop       
        showThumbs={false} 
        showStatus={false} 
        stopOnHover={true} 
        >
            
            <div>
                <img src={Solar1} alt='Ajinkya Infra solar installation in Kolhapur - system view 1' />
            </div>
            <div>
                <img src={Solar2}  alt='Ajinkya Infra solar installation in Kolhapur - system view 2'/>
            </div>
            <div>
                <img src={Solar3}  alt='Ajinkya Infra solar installation in Kolhapur - system view 3'/>
            </div>
        </Carousel>
    );
}

export default CarouselComponent;