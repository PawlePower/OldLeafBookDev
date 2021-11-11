import React from 'react'
import './CarouselSlider.scss'
import Swiper from 'swiper';


var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1.5,
    spaceBetween: 10,
    centeredSlides: true,
    freeMode: true,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      500: {
        slidesPerView: 1
      },
      700: {
        slidesPerView: 1.5
      }
    }
  });



function CarouselSlider() {
    return (
        <div class="contain">
            
<main class="main">
  <div class="container">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="card-image">
            <img src="https://source.unsplash.com/1280x720/?nature" alt="Image Slider"/>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="card-image">
            <img src="https://source.unsplash.com/1280x720/?nature,water,animal" alt="Image Slider"/>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="card-image">
            <img src="https://source.unsplash.com/1280x720/?water" alt="Image Slider"/>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="card-image">
            <img src="https://source.unsplash.com/1280x720/?animal" alt="Image Slider"/>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="card-image">
            <img src="https://source.unsplash.com/1280x720/?travel" alt="Image Slider"/>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="card-image">
            <img src="https://source.unsplash.com/1280x720/?flower" alt="Image Slider"/>
          </div>
        </div>
      </div>
      {/* <!-- Add Pagination --> */}
      <div class="swiper-pagination"></div>
      {/* <!-- Add Scrollbar --> */}
      <div class="swiper-button-next">
        <i class="fas fa-chevron-circle-right arrow-icon"></i>
      </div>
      <div class="swiper-button-prev">
        <i class="fas fa-chevron-circle-left arrow-icon"></i>
      </div>
    </div>
  </div>
</main>

        </div>
    )
}

export default CarouselSlider
