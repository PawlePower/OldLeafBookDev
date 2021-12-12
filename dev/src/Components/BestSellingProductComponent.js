import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import muketeer from '../assets/musketeer.jpg';
import './BestSellingProductComponent.css';
import Product from './Product';

export class BestSellingProductComponent extends Component {
    state= {
        responsive:{
            0: {
                items: 1,
            },
            450: {
                items: 1,
            },
            550:{
                items:2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        },
    }
    render() {
        return (
            <div>
                      <div class='container-fluid' style={{marginTop:"108px"}}>   
        <OwlCarousel 
        items={3} 
        margin={10} 
        autoplay ={false}     
        nav={true}
        dots={true} 
        animateOut = {true}
        responsive={this.state.responsive} 
        >  
      
            <div>  <Product
          id = {123}
          title ={"The Three Musketeers by Alexandre Dumas"}
          price={500.000}
          image={muketeer}
          /> </div>

            <div>  <Product
          id = {123}
          title ={"The Three Musketeers by Alexandre Dumas"}
          price={500.000}
          image={muketeer}
          /> </div>  

            <div>  <Product
          id = {123}
          title ={"The Three Musketeers by Alexandre Dumas"}
          price={500.000}
          image={muketeer}
          /> </div>  

        <div>  
        <Product
          id = {123}
          title ={"The Three Musketeers by Alexandre Dumas"}
          price={500.000}
          image={muketeer}
          /> </div>  
 

 <div>  <Product
          id = {123}
          title ={"The Three Musketeers by Alexandre Dumas"}
          price={500.000}
          image={muketeer}
          /> </div>

            <div>  <Product
          id = {123}
          title ={"The Three Musketeers by Alexandre Dumas"}
          price={500.000}
          image={muketeer}
          /> </div>  

            <div>  <Product
          id = {123}
          title ={"The Three Musketeers by Alexandre Dumas"}
          price={500.000}
          image={muketeer}
          /> </div>  

        <div>  
        <Product
          id = {123}
          title ={"The Three Musketeers by Alexandre Dumas"}
          price={500.000}
          image={muketeer}
          /> </div>  
 

 <div>  <Product
          id = {123}
          title ={"The Three Musketeers by Alexandre Dumas"}
          price={500.000}
          image={muketeer}
          /> </div>

            <div>  <Product
          id = {123}
          title ={"The Three Musketeers by Alexandre Dumas"}
          price={500.000}
          image={muketeer}
          /> </div>  

            <div>  <Product
          id = {123}
          title ={"The Three Musketeers by Alexandre Dumas"}
          price={500.000}
          image={muketeer}
          /> </div>  

        <div>  
        <Product
          id = {123}
          title ={"The Three Musketeers by Alexandre Dumas"}
          price={500.000}
          image={muketeer}
          /> </div>  
 
      </OwlCarousel>  

      </div> 
            </div>
        )
    }
}

export default BestSellingProductComponent
