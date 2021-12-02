import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Newsletter from './Components/Newsletter';
import NavigationBar from './Components/NavigationBar';
import CarouselSlider from './Components/CarouselSlider';
import AuthorComponent from './Components/AuthorComponent';
import HomeImgCard from './Components/HomeImgCard';
import ThreeCardComponent from './Components/ThreeCardComponent';
import CategoriesBar from "./Components/CategoriesBar";
import BestSellingComponent from "./Components/BestSellingComponent"
import Header from './Components/Header';
import { BrowserRouter as Router,  Route } from "react-router-dom";
import {Switch as Switch} from "react-router-dom"
import HomeComponent from "./Components/HomeComponent";
import React from 'react';
// impor{Route as Switch} from 'react-router-dom't { Route } from 'react-router-dom';



function App() {
  return (
   
    <div className="App">
      <Header/>
      <HomeComponent/>
      <AuthorComponent/>
      <Newsletter/>
      <Footer/>
    </div>
      // <Router>
      //    <div className="App">
         
      //   <Switch>
      //     <Route exact path="/" component={HomeComponent}></Route>

      //     <Route path="/BestSellingComponent" component={BestSellingComponent} ></Route>
      //   </Switch>
      
      //   </div>
      // </Router>
      
    

    // <div>
    //    <Header></Header>
    // </div>
    // <Router>
    // <div className="App" style={{display:"flex",flexDirection:"column"}}>

    //    <Routes>
    //   <Header/>
    // <div ><NavigationBar/></div>
    //   <div style={{marginTop : "-6px"}}><CategoriesBar></CategoriesBar></div>

    //   <div><CarouselSlider/></div>
    //   <Route path="/HomeImgCard" >
    //   <HomeImgCard></HomeImgCard>
    //   </Route>


    //   <Route path="/ThreeCardComponent" >
    //   <ThreeCardComponent></ThreeCardComponent>
    //   </Route>


    //   <Route path="/BestSellingComponent" >
    //   <BestSellingComponent></BestSellingComponent>
    //   </Route>
    //   <div><HomeImgCard></HomeImgCard></div>
    //   <div><ThreeCardComponent></ThreeCardComponent></div>
    //   <div className="text"><h2 className="be_h2"><b>Bestselling books of the Month</b></h2></div>
    //   <div><BestSellingComponent></BestSellingComponent></div>
    //   <div className="text"><h2 className="be_h2"><b>Featured books of the Month</b></h2></div>
    //   <div><BestSellingComponent></BestSellingComponent></div>
    //   <div><AuthorComponent/></div>
    //   <Newsletter/>
    //   <Footer/>
    //   </Routes>
    // </div>
    // </Router>
  );
}

export default App;
