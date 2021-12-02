import React from 'react';
import logo from '../assets/oldleaflogo.PNG';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search'

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });

    const icon = document.getElementsByClassName("fas fa-bars");
  // const btn =document.querySelector(".navbar-toggler");

console.log(icon.className);
if (icon.className=="fas fa-bars")
 {
  icon.classList.remove('fas fa-bars');
  icon.classList.add('fas fa-times');
 }
   
  

  }
function Header() {

    return (
        <div className="header__container">
<nav className="header__header">

<div className="menuicon" >
  <button class="navbar-toggler" onClick={scrollToTop}  type="button" 
  data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
   aria-expanded="false" aria-label="Toggle navigation" style={{width:"100%"}}>
  <span class="fas fa-bars" id="bars"></span>
  </button>
</div>
            <img className="header__logo" src={logo} alt="OldLeafBooks.com" />

            <div className="header__search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header__icons"></SearchIcon>
            </div>

           <div className="header__nav">
               <div className="header__link">
                   <div className="header__options">
                   <span className="header__optionsLineOne">Hello AKshay</span>
                   <span className="header__optionsLineTwo">Sign Out</span>
                   </div>
               </div>

               <div className="header__link">
                   <div className="header__options">
                   <span className="header__optionsLineTwo">My Order</span>
                   {/* <span>Sign In</span> */}
                   </div>
               </div>

               <div className="header__link">
                   <div className="header__options">
                   <span className="far fa-heart pl-0" id="header__optionsLineheart"></span>
                   {/* <span>Sign In</span> */}
                   </div>
               </div>

               <div className="header__link">
                   <div className="header__options">
                   <span className="fas fa-shopping-cart pl-0" id="header__optionsLineCart"></span>
                   {/* <span>Sign In</span> */}
                   </div>
               </div>

 

           </div>
        </nav>

{/* --------------------------------------------------Categogies---------------------------------------------------------- */}

<nav class="navbar navbar-expand-lg navbar-dark height position" style={{width:"100%",top:"50px"}}>
      
  <div class="collapse navbar-collapse height" id="navbarSupportedContent">
    <ul class="navbar-nav " style={{margin:"auto"}}>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Category
        </a>
        <div class="dropdown-menu" id="marginTop" aria-labelledby="navbarDropdown">

          
          <div class="container dropdown_container">
            <div class="row dropdown_row">
              <div class="col-md-4">
                <span class="text-uppercase text">Sub Category</span>
                <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link text" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text" href="#">Link item</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text" href="#">Link item</a>
                </li>
              </ul>
              </div>
              {/* <!-- /.col-md-4  --> */}
              <div class="col-md-4">
              <span class="text-uppercase text">Sub Category</span>
                <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link text" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text" href="#">Link item</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text" href="#">Link item</a>
                </li>
              </ul>
              </div>
              {/* <!-- /.col-md-4  --> */}
              <div class="col-md-4">
              <span class="text-uppercase text">Sub Category</span>
                <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link text" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text" href="#">Link item</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text" href="#">Link item</a>
                </li>
              </ul>
              </div>
              {/* <!-- /.col-md-4  --> */}
              {/* <div class="col-md-4">
                <a href="">
                  <img src="https://dummyimage.com/200x100/ccc/000&text=image+link" alt="" class="img-fluid"/>
                </a>
                <p class="text">Short image call to action</p>

              </div> */}
              {/* <!-- /.col-md-4  --> */}
            </div>
          </div>
          {/* <!--  /.container  --> */}


        </div>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Category
        </a>
        <div class="dropdown-menu" id="marginTop" aria-labelledby="navbarDropdown">

          
          <div class="container dropdown_container">
            <div class="row dropdown_row">
              <div class="col-md-4">
                <span class="text-uppercase text">Sub Category</span>
                <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link text" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text" href="#">Link item</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text" href="#">Link item</a>
                </li>
              </ul>
              </div>
              {/* <!-- /.col-md-4  --> */}
              <div class="col-md-4">
              <span class="text-uppercase text">Sub Category</span>
                <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link text" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text" href="#">Link item</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text" href="#">Link item</a>
                </li>
              </ul>
              </div>
              {/* <!-- /.col-md-4  --> */}
              <div class="col-md-4">
              <span class="text-uppercase text">Sub Category</span>
                <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link text" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text" href="#">Link item</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text" href="#">Link item</a>
                </li>
              </ul>
              </div>
              {/* <!-- /.col-md-4  --> */}
              {/* <div class="col-md-4">
                <a href="">
                  <img src="https://dummyimage.com/200x100/ccc/000&text=image+link" alt="" class="img-fluid"/>
                </a>
                <p class="text">Short image call to action</p>

              </div> */}
              {/* <!-- /.col-md-4  --> */}
            </div>
          </div>
          {/* <!--  /.container  --> */}


        </div>
      </li>


      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Category
        </a>
        <div class="dropdown-menu" id="marginTop" aria-labelledby="navbarDropdown">

          
          <div class="container dropdown_container">
            <div class="row dropdown_row">
              <div class="col-md-4">
                <span class="text-uppercase text">Sub Category</span>
                <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link text" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text" href="#">Link item</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text" href="#">Link item</a>
                </li>
              </ul>
              </div>
              {/* <!-- /.col-md-4  --> */}
              <div class="col-md-4">
              <span class="text-uppercase text">Sub Category</span>
                <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link text" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text" href="#">Link item</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text" href="#">Link item</a>
                </li>
              </ul>
              </div>
              {/* <!-- /.col-md-4  --> */}
              <div class="col-md-4">
              <span class="text-uppercase text">Sub Category</span>
                <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link text" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text" href="#">Link item</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text" href="#">Link item</a>
                </li>
              </ul>
              </div>
              {/* <!-- /.col-md-4  --> */}
              {/* <div class="col-md-4">
                <a href="">
                  <img src="https://dummyimage.com/200x100/ccc/000&text=image+link" alt="" class="img-fluid"/>
                </a>
                <p class="text">Short image call to action</p>

              </div> */}
              {/* <!-- /.col-md-4  --> */}
            </div>
          </div>
          {/* <!--  /.container  --> */}


        </div>
      </li>


      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Category
        </a>
        <div class="dropdown-menu" id="marginTop" aria-labelledby="navbarDropdown">

          
          <div class="container dropdown_container">
            <div class="row dropdown_row">
              <div class="col-md-4">
                <span class="text-uppercase text">Sub Category</span>
                <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link text" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text" href="#">Link item</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text" href="#">Link item</a>
                </li>
              </ul>
              </div>
              {/* <!-- /.col-md-4  --> */}
              <div class="col-md-4">
              <span class="text-uppercase text">Sub Category</span>
                <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link text" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text" href="#">Link item</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text" href="#">Link item</a>
                </li>
              </ul>
              </div>
              {/* <!-- /.col-md-4  --> */}
              <div class="col-md-4">
              <span class="text-uppercase text">Sub Category</span>
                <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link text" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text" href="#">Link item</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text" href="#">Link item</a>
                </li>
              </ul>
              </div>
              {/* <!-- /.col-md-4  --> */}
              {/* <div class="col-md-4">
                <a href="">
                  <img src="https://dummyimage.com/200x100/ccc/000&text=image+link" alt="" class="img-fluid"/>
                </a>
                <p class="text">Short image call to action</p>

              </div> */}
              {/* <!-- /.col-md-4  --> */}
            </div>
          </div>
          {/* <!--  /.container  --> */}


        </div>
      </li>




    </ul>
   
  </div>


</nav>
        </div>
        
    )
}

export default Header
