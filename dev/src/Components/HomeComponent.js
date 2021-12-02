import React from 'react'
import BestSellingComponent from './BestSellingComponent';
import CarouselSlider from "./CarouselSlider";
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
        </div>
    )
}

export default HomeComponent
