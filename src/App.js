import './App.css';
import Navbar from './NavBar/Navbar';
// import Search from './Search/Search';
import Booking from './Bookings/Booking'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Shipping from './Shipping/Shipping';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="/shipping" element={<Shipping/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="*" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
