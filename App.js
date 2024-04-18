import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Footer from './footer.js';
import Registration from './registration.js';
import Gallary from './Gallary.js';
import NIGHTHAWKS from "./NIGHTHAWKS.png";
import About from './About.js';
import Login from './Login.js';

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <div className="Nav">
          <div className="Snav">
            <h1><Link to="/">Night Hacks</Link></h1>
          </div>
          <div className="Snav2">
            <h3><Link to="/About">About</Link></h3>
            <h3><Link to="/Gallary">Gallary</Link></h3>
            <h3><Link to="/Registration">Registration</Link></h3>
            <h3><Link to="/Login">Login</Link></h3>
          </div>
        </div>
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Gallary" element={<Gallary />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <App1></App1>
        <About></About>
        <Gallary></Gallary>
        <Login/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function App1() {
  return (
    <div className="continer1">
      <div className="continer1-1">
        <p>Nighthawk Delivery is a service that delivers food from local restaurants in Pulivendula, Kadapa and Bangalore. You can order food online on one call. You can pay for your order online or at delivery with cash, credit card, or UPI. Nighthawk Delivery offers a variety of cuisines, such as Dosa, Biriyani, Pizza, Sandwiches, salads, and more. You can also request special dietary options, such as gluten-free, vegan, or vegetarian. Nighthawk Delivery is a convenient and affordable way to enjoy delicious food at home or work.</p>
        <button>more</button>
      </div>
      <div className="continer1-2">
        <img src={NIGHTHAWKS} alt="" />
      </div>
    </div>
  );
}

export default App;
