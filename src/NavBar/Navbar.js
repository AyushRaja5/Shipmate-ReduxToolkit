import React from 'react'
import './navbar.css'
import { BiDollar } from 'react-icons/bi'
import { BsCart4 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'; // Import useHistory
import { useSelector } from 'react-redux';

const Navbar = () => {
  const navigate = useNavigate(); // Get the history object

  const checkout = useSelector((state) => state.checkout);
  const handleHeadingClick = () => {
    navigate('/'); // Navigate to the root page ('/')
  };
  const handleBookingClick = () => {
    navigate('/booking')
  }
  const handlecartbtn = () => {
    navigate('/cart')
  }

  const cartItems = useSelector((state) => state.cart.items);


  return (
    <div className='nav-main'>
      <h2 className='heading' onClick={handleHeadingClick}>Ship<span>mate.</span></h2>
      <div className='track'>
        <div className='icon' onClick={handlecartbtn}>
          
            <span style={{fontSize:'20px'}}>{cartItems.length}</span>
            <span><BsCart4 /></span>
        </div>
        <div className='icon bidollar'><BiDollar /></div>
        <button className='btn' onClick={handleBookingClick}>Track Shipment</button>
      </div>
    </div>
  )
}

export default Navbar