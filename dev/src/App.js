import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Newsletter from './Components/Newsletter';
import NavigationBar from './Components/NavigationBar';
import CarouselSlider from './Components/CarouselSlider';


function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <CarouselSlider/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
