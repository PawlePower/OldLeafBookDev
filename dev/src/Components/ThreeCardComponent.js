import React from 'react'
import Image  from '../assets/booksthree1.jpg'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './ThreeCardComponent.css'


function ThreeCardComponent() {
    return (
    <div className="container">
        <div className="row">
            <div className="col-md-4 " id="my_colfirst"> <img className="img-fluid hvr-shadow" alt="ASD" src={Image} /></div>
            <div className="col-md-4 " id="my_col">      <img className="img-fluid hvr-shadow" alt="ASD" src={Image} /></div>
            <div className="col-md-4 " id="my_collast">  <img className="img-fluid hvr-shadow" alt="ASD" src={Image} /></div>
        </div>
    </div>
    )
}

export default ThreeCardComponent
