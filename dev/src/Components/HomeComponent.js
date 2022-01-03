import React from 'react'
import BestSellingComponent from './BestSellingComponent';
import CarouselSlider from "./CarouselSlider";
import Footer from './Footer';
import Newsletter from './Newsletter';
import OwlCarouselComponent from './OwlCarouselComponent';
import ThreeCardComponent from './ThreeCardComponent';

function HomeComponent() {
    return (
        <div>
            {/* <CarouselSlider></CarouselSlider> */}
            {/* <ThreeCardComponent></ThreeCardComponent> */}
            
            <OwlCarouselComponent/>
            <BestSellingComponent title="Best Selling"></BestSellingComponent>
            <BestSellingComponent title="Featured Books"></BestSellingComponent>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    )
}

export default HomeComponent
