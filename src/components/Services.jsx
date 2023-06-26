import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import img1 from "../assets/photo-1555066931-bf19f8fd1085.avif";
import img2 from "../assets/photo-1555066931-bf19f8fd1085.avif";
import img3 from "../assets/technology-networking-abstract-business-thumbnail.jpg";
import img4 from "../assets/photo-1510915228340-29c85a43dcfe.avif";

import  "react-responsive-carousel/lib/styles/carousel.min.css";

const Services = () => (
    <div className='services'>
        <Carousel infiniteLoop autoPlay showStatus={false}  interval={2000} showThumbs={false} >

        <div>
        <img src={img1} alt="Item1" />
        <p className='legend'>Full Stack</p>
        </div>
       
        <div>
        <img src={img3} alt="Item4" />
        <p className='legend'>Web devloper</p>
        </div>
        <div>
        <img src={img2} alt="Item3" />
        <p className='legend'>peer-to-peer Support</p>
        </div>
        <div>
        <img src={img4} alt="Item4" />
        <p className='legend'>Web devloper</p>
        </div>
        </Carousel>
    </div>
);

export default Services