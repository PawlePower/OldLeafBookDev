import React from 'react'
// import Slider from 'react-touch-drag-slider'
// import images from './images'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './CarouselSlider.css'
import first from '../assets/booksone.jpg'
import second from '../assets/bookstwo1.jpg'
import third from '../assets/booksthree1.jpg'



function CarouselSlider() {
  return (
    <div className="container-md">

        <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} showStatus={false} showArrows={true}>
                <div>
                    <img className="img_slide" src={first}></img>
                </div>
                <div>
                    <img className="img_slide" src={second} />
                </div>
                <div>
                    <img className="img_slide" src={third} />
                </div>
            </Carousel>
        </div>
    
    </div>
  )
}

export default CarouselSlider
