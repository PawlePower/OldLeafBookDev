import React from 'react'
import './BestSellingComponent.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import muketeer from '../assets/musketeer.jpg';
import Product from './Product';

function BestSellingComponent({title}) {
    return (
        <div>

<div className="container__bestselling">
<h1>{title}</h1>
</div>
<div class="container-fluid bg-trasparent my-4 p-3" style={{position: "relative"}}>
  <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
  <div class="col hp">
  <Product
          id = {123}
          title ={"The Three Musketeers by Alexandre Dumas"}
          price={500.000}
          image={muketeer}
          /> 
</div>

<div class="col hp">
<Product
          id = {123}
          title ={"The Three Musketeers by Alexandre Dumas"}
          price={600.000}
          image={muketeer}
          /> 
</div>

<div class="col hp">
<Product
          id = {123}
          title ={"The Three Musketeers by Alexandre Dumas"}
          price={700.000}
          image={muketeer}
          /> 
          </div>


<div class="col hp">
<Product
          id = {123}
          title ={"The Three Musketeers by Alexandre Dumas"}
          price={800.000}
          image={muketeer}
          /> 
          </div>
  </div>
</div>




        {/* <div>
          <h1>Best Selling</h1>
        </div>
        <div class="shell">
        <div class="container">
          <div class="row" style={{justifyContent:"center"}}>
            <div class="col-xl-3 col-lg-5 col-md-5 col-sm-5">
                <Product
          id = {123}
          title ={"The Three Musketeers by Alexandre Dumas"}
          price={500.000}
          image={muketeer}
          /> */}
              {/* <div class="wsk-cp-product">
                <div class="wsk-cp-img">
                  <img id="b_img_id" src={muketeer} alt="Product" class="img-responsive" />
                </div>
                <div class="wsk-cp-text">
                  <div class="category">
                    <span>Adventure</span>
                  </div>
                  <div class="title-product">
                    <h3 className="b_h3">The Three Musketeers by Alexandre Dumas</h3>
                  </div>
                  <div class="description-prod">
                    <p>In this classic by Dumas, a young man named d’Artagnan joins the Musketeers of the Guard. In doing so, he befriends Athos, Porthos, and Aramis — the King’s most celebrated musketeers — and embarks on a journey of his own</p>
                  </div>
                  <div class="card-footer">
                    <div class="wcf-left"><span class="price">500.000</span></div>
                    <div class="wcf-right"><a href="#" class="buy-btn"><i class="fas fa-shopping-cart pl-0"></i></a></div>
                    <div class="wcf-right" style={{marginRight:"5px"}}><a href="#" class="buy-btn"><i class="fa fa-heart"></i></a></div>
                  </div>
                </div>
              </div> */}
            {/* </div>
            <div class="col-xl-3 col-lg-5 col-md-5 col-sm-5">
                <Product
          id = {123}
          title ={"The Three Musketeers by Alexandre Dumas"}
          price={800.000}
          image={muketeer}
          /> */}
              {/* <div class="wsk-cp-product">
                <div class="wsk-cp-img"><img id="b_img_id" src={muketeer} alt="Product" class="img-responsive" /></div>
                <div class="wsk-cp-text">
                  <div class="category">
                    <span>Adventure</span>
                  </div>
                  <div class="title-product">
                    <h3 className="b_h3">The Three Musketeers by Alexandre Dumas</h3>
                  </div>
                  <div class="description-prod">
                    <p>In this classic by Dumas, a young man named d’Artagnan joins the Musketeers of the Guard. In doing so, he befriends Athos, Porthos, and Aramis — the King’s most celebrated musketeers — and embarks on a journey of his own</p>
                  </div>
                  <div class="card-footer">
                    <div class="wcf-left"><span class="price">500.000</span></div>
                    <div class="wcf-right"><a href="#" class="buy-btn"><i class="fas fa-shopping-cart pl-0"></i></a></div>
                    <div class="wcf-right" style={{marginRight:"5px"}}><a href="#" class="buy-btn"><i class="fa fa-heart"></i></a></div>
                  </div>
                </div>
              </div> */}
            {/* </div>
            <div class="col-xl-3 col-lg-5 col-md-5 col-sm-5">
                <Product
          id = {123}
          title ={"The Three Musketeers by Alexandre Dumas"}
          price={600.00}
          image={muketeer}
          /> */}
              {/* <div class="wsk-cp-product">
                <div class="wsk-cp-img"><img id="b_img_id" src={muketeer} alt="Product" class="img-responsive" /></div>
                <div class="wsk-cp-text">
                  <div class="category">
                    <span>Adventure</span>
                  </div>
                  <div class="title-product">
                    <h3 className="b_h3">The Three Musketeers by Alexandre Dumas</h3>
                  </div>
                  <div class="description-prod">
                    <p>In this classic by Dumas, a young man named d’Artagnan joins the Musketeers of the Guard. In doing so, he befriends Athos, Porthos, and Aramis — the King’s most celebrated musketeers — and embarks on a journey of his own</p>
                  </div>
                  <div class="card-footer">
                    <div class="wcf-left"><span class="price">500.000</span></div>
                    
                    <div class="wcf-right"><a href="#" class="buy-btn"><i class="fas fa-shopping-cart pl-0"></i></a></div>
                    <div class="wcf-right" style={{marginRight:"5px"}}><a href="#" class="buy-btn"><i class="fa fa-heart"></i></a></div>
                  </div>
                </div>
              </div> */}
            {/* </div>
            <div class="col-xl-3 col-lg-5 col-md-5 col-sm-5">
                <Product
          id = {123}
          title ={"The Three Musketeers by Alexandre Dumas"}
          price={700.000}
          image={muketeer}
          /> */}
              {/* <div class="wsk-cp-product">
                <div class="wsk-cp-img"><img id="b_img_id" src={muketeer} alt="Product" class="img-responsive" /></div>
                <div class="wsk-cp-text">
                  <div class="category">
                    <span>Adventure</span>
                  </div>
                  <div class="title-product">
                    <h3 className="b_h3">The Three Musketeers by Alexandre Dumas cvf ggf gfg g</h3>
                  </div>
                  <div class="description-prod">
                    <p>In this classic by Dumas, a young man named d’Artagnan joins the Musketeers of the Guard. In doing so, he befriends Athos, Porthos, and Aramis — the King’s most celebrated musketeers — and embarks on a journey of his own</p>
                  </div>
                  <div class="card-footer">
                    <div class="wcf-left"><span class="price">500.000</span></div>
                    
                    <div class="wcf-right"><a href="#" class="buy-btn"><i class="fas fa-shopping-cart pl-0"></i></a></div>
                    <div class="wcf-right" style={{marginRight:"5px"}}><a href="#" class="buy-btn"><i class="fa fa-heart"></i></a></div>
                  </div>
                </div>
              </div> */}
            {/* </div>
          </div>
          </div>
          </div> */}
        </div>
    )
}

export default BestSellingComponent
