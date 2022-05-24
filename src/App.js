import './App.css';
import Brands from './components/brands/Brands';
import Choose from './components/choose/Choose';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Join from './components/join/Join';
import Navbar from './components/navbar/Navbar';
import Offer from './components/offer/Offer';
import Shop from './components/shop/Shop';
import Soon from './components/soon/Soon';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Offer/>
      <Shop/>
      <Choose/>
      <Brands/>
      <Join/>
      <Soon/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
