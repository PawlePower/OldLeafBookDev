import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Newsletter from './Components/Newsletter';
import NavigationBar from './Components/NavigationBar';
import CarouselSlider from './Components/CarouselSlider';
import AuthorComponent from './Components/AuthorComponent';
import HomeImgCard from './Components/HomeImgCard';
import ThreeCardComponent from './Components/ThreeCardComponent';
import ProductCard from './Components/ProductCard';


function App() {
  return (
    <div className="App">
      <div><NavigationBar/></div>
      <div><CarouselSlider/></div>
      
      {/* <div><HomeImgCard></HomeImgCard></div> */}
      <div><ThreeCardComponent></ThreeCardComponent></div>
      <div><ProductCard></ProductCard></div>
      <div><AuthorComponent/></div>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
