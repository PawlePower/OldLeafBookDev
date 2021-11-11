import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Newsletter from './Components/Newsletter';
import NavigationBar from './Components/NavigationBar';


function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
