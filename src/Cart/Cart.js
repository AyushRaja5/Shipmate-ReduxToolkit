import React from 'react'
import './cart.css'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Trackernew from '../NewTracker/newTracker';
import ShippingCard from '../components/ShippingCard';

import { HiOutlineLocationMarker } from 'react-icons/hi'
import { PiAirplaneLight } from 'react-icons/pi'
import { BsStarFill, BsStar, BsFillCircleFill, BsCartXFill } from 'react-icons/bs'

import { removeFromCart } from '../Store/cartSlice';

import { setCheckoutItem } from '../Store/checkoutSlice'; // Import the addToCheckout action
import { clearCheckout } from '../Store/checkoutSlice'; // Import the clearCheckout action
import Meesage from '../components/Meesage';


const Cart = () => {

  const cartItems = useSelector((state) => state.cart.items);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const CartItem = ({ item }) => {
    const starsArray = [];
    for (let i = 0; i < item.stars; i++) {
      starsArray.push(<BsStarFill key={i} style={{ background: 'transparent' }} />);
    }
    for (let i = item.stars; i < 5; i++) {
      starsArray.push(<BsStar key={i} style={{ background: 'transparent' }} />);
    }

    const handleRemoveItemClick = () => {
      dispatch(removeFromCart(item));
    };

    const handleCheckoutClick = () => {
      dispatch(setCheckoutItem(item));
      navigate('/booking')
    };
    return (
      <>
        <div className='shippingcardmain'>
          <div className='shipinginfo'>
            <div className='first'>
              <div className={`value ${item.type === 'Eco' ? 'valueeco' : ''}`}>
                <span className='greendot'><BsFillCircleFill style={{ background: 'transparent' }} /></span>
                <span className='valuetitle cartstatustitle'>{item.type}</span>
              </div>
              <span className='express'>Express</span>
              <span className='days'>Est. {item.days} days</span>
              <span className='cartbtn'>
                <BsCartXFill onClick={handleRemoveItemClick} size={23} style={{ background: 'transparent', color: 'red', cursor: 'pointer' }} />
              </span>
            </div>
            <div className='second'>
              <span className='location'><HiOutlineLocationMarker style={{ background: 'transparent' }} size={20} />{item.fromport}, {item.from}</span>
              <span className='planeicon'>
                <span className='horizontal-line'></span>
                <PiAirplaneLight style={{ background: 'transparent' }} />
                <span className='horizontal-line'></span>
              </span>
              <span className='location'><HiOutlineLocationMarker style={{ background: 'transparent' }} size={20} />{item.toport}, {item.to}</span>
            </div>
            <div className='third'>
              <div className='company'>{item.company}</div>
              <div className='rating'> {starsArray} </div>
            </div>
          </div>
          <div className='shippingprice'>
            <div className='rupee'>Rs. {item.moneyRs}.<span className='decimal'>{item.moneyps}</span></div>
            <button className='btn button cartbtn' onClick={handleCheckoutClick}>Checkout</button>
            <div className='details'>view details</div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className='shippinghead'>
        {/* <Trackernew /> */}
      </div>
      {cartItems.length === 0 ? (
        <div className='emptyCart' style={{ display: 'flex', justifyContent: 'center', color: 'var(--text-color)' }}>
          <h1>Cart is empty!</h1>
        </div>
      ) : (
        <div className='cart'>
          {cartItems.map((item) => (
            <CartItem item={item} />
          ))}
        </div>
      )}

      <div className='message-container'>
        <Meesage />
      </div>
    </>
  )
}

export default Cart