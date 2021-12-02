import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Product.css';

function Product({id,title,price,image}) {
    return (
        <div>
            {/* <img src={image}></img>
            <h1>{id}</h1>
            <h1>{title}</h1>
            <h1>{price}</h1> */}

            

      <div class="card h-100 shadow-sm">
        <a href="#">
          <img src={image} class="card-img-top" alt="product.title" />
        </a>
        {/* <!-- <div class="label-top shadow-sm">Asus Rog</div>  --> */}
        {/* <div class="label-top shadow-sm">
          <a class="text-white" href="#">msi</a>
        </div> */}
        <div class="card-body">
          <div class="clearfix mb-3">
            <span class="float-start badge rounded-pill product__price">&#x20B9;{price}</span>

            
          </div>
          <h5 class="card-title">
            <a target="_blank" href="#">{title}</a>
          </h5>

          <div class="d-grid gap-2 my-4">

            <a href="#" class="btn btn-warning bold-btn">add to cart</a>

          </div>
          <div class="clearfix mb-1">

            

            <span class="float-end">
              
<i class="far fa-heart" style={{cursor: "pointer"}}></i>

            </span>
          </div>
        </div>
      </div>
    
            
        </div>
    )
}

export default Product
