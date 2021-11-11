import React from 'react'
import './NavigationBar.css'



function NavigationBar() {
    
    return (
        <div>
                <nav>
         <div class="menu-icon">
            <span class="fas fa-bars" id="bars"></span>
         </div>
         <div class="logo">
            <img src="" alt="logo"/>
         </div>
         <div class="nav-items">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Contact us</a></li>
         </div>
         <div class="search-icon">
            <span class="fas fa-search" id="searchicon"></span>
         </div>
         <div class="cancel-icon">
            <span class="fas fa-times" id="cancelicon" ></span>
         </div>
         <form action="#">
            <input type="search" class="search-data" placeholder="Search" required/>
            <button type="submit" class="fas fa-search"></button>
         </form>

         <div class="nav-item" id="wishlist">
            <a href="#!" class="nav-link navbar-link-2 waves-effect" type="button">
              <span class="badge badge-pill badge-danger">1</span>
              <i class="fa fa-heart" aria-hidden="true" id="heart"></i>
            </a>
          </div>

         <div class="nav-item" id="cart">
            <a href="#!" class="nav-link navbar-link-2 waves-effect" type="button">
              <span class="badge badge-pill badge-danger">1</span>
              <i class="fas fa-shopping-cart pl-0" id="cart"></i>
            </a>
          </div>

         <ul class="navbar-nav nav-flex-icons ml-auto" id="userIcon">
            <li class="nav-item dropdown" id="Myaccount">
              <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-55" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" class="rounded-circle" alt="avatar image"/>
              </a>
              <div class="dropdown-menu dropdown-menu-lg-right" id="drpdwn" aria-labelledby="navbarDropdownMenuLink-55">
                <a class="dropdown-item" href="#!">Logout</a>
                <a class="dropdown-item" href="#!">Settings</a>
                <a class="dropdown-item" href="#!">Profile</a>
              </div>
            </li>
  
          </ul>

      </nav>
        </div>
    )
}

window.onload = function () {
    const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = ()=>{
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
cancelBtn.onclick = ()=>{
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#ff3d00";
}
searchBtn.onclick = ()=>{
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
}


export default NavigationBar
