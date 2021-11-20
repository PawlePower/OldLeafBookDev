import React from 'react'
import './CategoriesBar.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery';

    $(document).ready(function() {
        // executes when HTML-Document is loaded and DOM is ready
       
       // breakpoint and up  
       $(window).resize(function(){
         if ($(window).width() >= 980){  
       
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


function CategoriesBar() {
    return (
        <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#">Mega Dropdown</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">Category</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Category 1
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">

          
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <span class="text-uppercase text-white">Category 1</span>
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
                <p class="text-white">Short image call to action</p>

              </div>
              {/* <!-- /.col-md-4  --> */}
            </div>
          </div>
          {/* <!--  /.container  --> */}


        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Category 2
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">


          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <span class="text-uppercase text-white">Category 2</span>
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
                <p class="text-white">Short image call to action</p>

              </div>
              {/* <!-- /.col-md-4  --> */}
            </div>
          </div>
          {/* <!--  /.container  --> */}


        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Category 3
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">


          <div class="container">
            <div class="row">
              <div class="col-md-4">
               <span class="text-uppercase text-white">Category 3</span>
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
                <p class="text-white">Short image call to action</p>
                
              </div>
              {/* <!-- /.col-md-4  --> */}
            </div>
          </div>
          {/* <!--  /.container  --> */}


        </div>
      </li>

    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>


</nav>
        </div>
    )
}

export default CategoriesBar
