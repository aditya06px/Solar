import React, { useState, useRef } from 'react';
import './CarouselComponent.css';
import Solar1 from "../../assets/solar1.svg"
import Solar2 from "../../assets/solar2.svg"
import Solar3 from "../../assets/solar3.svg"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

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
                <img src={Solar1} />
            </div>
            <div>
                <img src={Solar2} />
            </div>
            <div>
                <img src={Solar3} />
            </div>
        </Carousel>
    );
}

export default CarouselComponent;