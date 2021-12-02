import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './OwlCarouselComponent.css';
import first from '../assets/#5CDB95.png'
import second from '../assets/#05386B.png'
import third from '../assets/#EDF5E1.png'


export class OwlCarouselComponent extends Component {
    state= {
        responsive:{
            0: {
                items: 1,
            },
            450: {
                items: 1,
            },
            550:{
                items:1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 3,
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
        nav={false}
        dots={false} 
        responsive={this.state.responsive} 
        autoHeightClass={true}>  
      
            <div><img  className="img" src ={first}/></div>  
            <div><img  className="img" src ={second}/></div>  
            <div><img  className="img" src ={third}/></div>  
 

      </OwlCarousel>  

      </div> 
            </div>
        )
    }
}

export default OwlCarouselComponent
