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
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import HomeComponent from "./Components/HomeComponent";
import React from 'react';
import BestSellingProductComponent from './Components/BestSellingProductComponent';
import { BarcodeScannerComponent } from './Components/BarcodeScannerComponent';
import LoginComponent from './Components/LoginComponent';
import CategoriesComponent from './Components/CategoriesComponent';
import LoginSign from './Components/LoginSign';
// impor{Route as Switch} from 'react-router-dom't { Route } from 'react-router-dom';



function App() {
  return (

    <div className="App">
      {/* <Header/>
      <HomeComponent/>
      <BarcodeScannerComponent/>
      <BestSellingProductComponent/>
      <AuthorComponent/>
      <Newsletter/>
      <Footer/> */}
<Header/>
<Router>
          <Switch>
            <Route exact path='/' exact component={HomeComponent}/>
            <Route exact path='/best' exact component={BestSellingProductComponent}/>
            <Route exact path='/news' exact component={Newsletter}/>
            <Route exact path='/Login' exact component={LoginComponent}/>
            <Route exact path='/f' exact component={Footer}/>
            <Route exact path='/featured' exact component={ThreeCardComponent}/>
            <Route exact path='/cat' exact component={CategoriesComponent}/>
            <Route exact path='/log' exact component={LoginSign}/>


            {/* ----------------
                For Reference

            <Route path='/services' component={Service}/>
            <Route path='/AboutUsMain' component={AboutUsMain}/>
            <Route path='/recruitment' component={Recruitment}/>
            <Route path='/careers' component={Careers}/>
            <Route path='/clients' component={Client}/>
            <Route path='/technology-services' component={TechnologyService}/>
            <Route path='/recruitment-services' component={RecruitmentService}/>
            <Route path='/technology' component={Homepage}/>
            <Route path='/contact' component={Contact}/> */}
          </Switch>
      </Router>
      {/* <BarcodeScannerComponent/>
      <BestSellingProductComponent/>
      <AuthorComponent/>
      <Newsletter/>
      <Footer/> */}
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
