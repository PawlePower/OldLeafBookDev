import React from 'react'
import './NavigationBar.css'
import logo from '../assets/oldleaflogo.PNG';
import '../App.css';



function NavigationBar() {
    
    return (
        <div>
                <nav class="fixed-top">
         <div class="menu-icon">
            <span class="fas fa-bars" id="bars"></span>
         </div>
         <div class="cancel-icon-bars">
            <span class="fas fa-times" id="canceliconbars" ></span>
         </div>
         <div class="logo">
            <img src={logo} alt="logo" style={{width: "99px"}} id="icon_logo"/>
         </div>
         <div class="nav-items">
            <li ><a class="hvr-underline-from-left" href="#">Home</a></li>
            <li><a class="hvr-underline-from-left" href="#">Shop</a></li>
            <li><a class="hvr-underline-from-left" href="#">Contact us</a></li>
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
const cancelBtnbars = document.querySelector(".cancel-icon-bars");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = ()=>{
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.remove("show");
  cancelBtnbars.classList.add("show");
  form.classList.remove("active");
}
cancelBtnbars.onclick = ()=>{
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "red";
  searchBtn.classList.remove("hide");
  cancelBtnbars.classList.remove("show");
}
cancelBtn.onclick = ()=>{
    items.classList.remove("active");
    menuBtn.classList.remove("hide");
    searchBtn.classList.remove("hide");
    searchBtn.classList.add("show");
    cancelBtn.classList.remove("show");
    form.classList.remove("active");
    cancelBtn.style.color = "#ff3d00";
    
  }
searchBtn.onclick = ()=>{
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
  cancelBtnbars.classList.add("hide");

}
}


export default NavigationBar
