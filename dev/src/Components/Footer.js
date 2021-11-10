import React from 'react'
import './Footer.css'
import FacebookOutlinedIcon from '@material-ui/icons/FacebookOutlined';

function Footer() {
    return (
        <div>
            <footer class="footer">
<div class="l-footer">
<h1>
<img src="https://i.postimg.cc/y62wcLBq/logo.png" alt=""/></h1>
<p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam atque recusandae in sit sunt molestiae aliquid fugit. Mollitia eaque tempore iure sit nobis? Vitae nemo, optio maiores numquam quis recusandae.</p>
</div>
<div>
        <FacebookOutlinedIcon/> 
</div>  
<ul class="r-footer">
<li>
  <h2>Explore</h2>
<ul class="box">
<li><a href="#">About Us</a></li>
<li><a href="#">Sitemap</a></li>
<li><a href="#">Shop</a></li>
<li><a href="#">Sign in</a></li>
</ul>
</li>
<li class="features">
  <h2>Customer Service</h2>
<ul class="box h-box">
<li><a href="#">Contact Us</a></li>
<li><a href="#">Store Pickup</a></li>
<li><a href="#">Order Hitory</a></li>
</ul>
</li>
<li>
  <h2>Legal</h2>
<ul class="box">
<li><a href="#">Return Policy</a></li>
<li><a href="#">Terms of Use</a></li>
<li><a href="#">Security</a></li>
<li><a href="#">privacy</a></li>
</ul>
</li>
</ul>
<div class="b-footer">
<p>
All rights reserved by ©Oldbooks.com 2021 </p>
</div>
</footer>
        </div>
    )
}

export default Footer