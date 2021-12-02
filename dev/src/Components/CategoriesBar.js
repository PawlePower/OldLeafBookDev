import React from 'react'
import './CategoriesBar.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import $ from 'jquery'

const $ = window.$;
window.onload = function () {
    $(document).ready(function() {
        // executes when HTML-Document is loaded and DOM is ready
       
       // breakpoint and up  
       $(window).resize(function(){
         if ($(window).width() >= 1024){  
       
             // when you hover a toggle show its dropdown menu
             $(".navbar .dropdown-toggle").hover(function () {
                $(this).parent().toggleClass("show");
                $(this).parent().find(".dropdown-menu").toggleClass("show"); 
              });
       
               // hide the menu when the mouse leaves the dropdown
             $( ".navbar .dropdown-menu" ).mouseleave(function() {
               $(this).removeClass("show");  
             });
         
           // do something here
         } 
       });  
         

       
       // document ready  
       });


  
    }


function CategoriesBar() {
  
    return (
        <div className="container_catogoriesBar height">
          <nav class="navbar navbar-expand-lg navbar-dark height position">
      <div className="menuicon">
  <button class="navbar-toggler" style={{border:"none"}} type="button" 
  data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
   aria-expanded="false" aria-label="Toggle navigation">
  <span class="fas fa-bars" id="bars"></span>
  </button>
</div>
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
                <span class="text-uppercase text">Sub Category 2</span>
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
                <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link text" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text" href="#">Link item</a>
                </li>
                <li class="nav-item text">
                  <a class="nav-link" href="#">Link item</a>
                </li>
              </ul>
              </div>
              {/* <!-- /.col-md-4  --> */}
              <div class="col-md-4">
                <a href="">
                  <img src="https://dummyimage.com/200x100/ccc/000&text=image+link" alt="" class="img-fluid"/>
                </a>
                <p class="text">Short image call to action</p>

              </div>
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


          <div class="container">
            <div class="row">
              <div class="col-md-4">
               <span class="text-uppercase text">Category 3</span>
                <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link item</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link item</a>
                </li>
              </ul>
              </div>
              {/* <!-- /.col-md-4  --> */}
              <div class="col-md-4">
                <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link item</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link item</a>
                </li>
              </ul>
              </div>
              {/* <!-- /.col-md-4  --> */}
              <div class="col-md-4">

                <a href="">
                  <img src="https://dummyimage.com/200x100/ccc/000&text=image+link" alt="" class="img-fluid"/>
                </a>
                <p class="text">Short image call to action</p>
                
              </div>
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
                <li class="nav-item text">
                  <a class="nav-link active" href="#">Active</a>
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

// window.onload = function () 
//  {
//  const icon = document.querySelector(".fas fa-bars");
//    const btn =document.querySelector(".navbar-toggler");
//    const cancelicon = document.querySelector(".fas fa-times")

//    btn.onclick = () =>
//    {
//      if(icon.className = ".fas fa-bars")
//      {icon.classList.remove("fas fa-bars");
//      icon.classList.add("fas fa-times");}
//      else{
//        icon.classList.add("fas fa-bars");
//      icon.classList.remove("fas fa-times");
//      }
//    }

//  }

export default CategoriesBar
