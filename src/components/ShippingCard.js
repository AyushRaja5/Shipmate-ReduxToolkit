import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { PiAirplaneLight } from 'react-icons/pi'
import { BsStarFill, BsStar, BsFillCircleFill, BsFillCartPlusFill, BsFillCartCheckFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Store/cartSlice';
import {removeFromCart} from '../Store/cartSlice'
import { setCheckoutItem } from '../Store/checkoutSlice';

const ShippingCard = ({ carddata }) => {
    const navigate = useNavigate(); // Get the history object
    const dispatch = useDispatch();
    const handleBookingClick = () => {
        dispatch(setCheckoutItem(carddata));
        navigate('/booking')
    }

    const handleAddToCart = () => {
        dispatch(addToCart(carddata));
    };

    const handleRemoveCart = () => {
        dispatch(removeFromCart(carddata));
    };
    const cartItems = useSelector((state) => state.cart.items);

    const isItemInCart = cartItems.some(item => item.id === carddata.id);

    const starsArray = [];
    for (let i = 0; i < carddata.stars; i++) {
        starsArray.push(<BsStarFill key={i} style={{ background: 'transparent' }} />);
    }
    for (let i = carddata.stars; i < 5; i++) {
        starsArray.push(<BsStar key={i} style={{ background: 'transparent' }} />);
    }

    return (
        <div className='shippingcardmain'>
            <div className='shipinginfo'>
                <div className='first'>
                    <div className={`value ${carddata.type === 'Eco' ? 'valueeco' : ''}`}>
                        <span className='greendot'><BsFillCircleFill style={{ background: 'transparent' }} /></span>
                        <span className='valuetitle'>{carddata.type}</span>
                    </div>
                    <span className='express'>Express</span>
                    <span className='days'>Est. {carddata.days} days</span>

                    <span className='cartbtn'>
                        {isItemInCart ? (
                            <BsFillCartCheckFill onClick={handleRemoveCart} size={23} style={{ background: 'transparent', cursor:'pointer' }} />
                        ) : (
                            <BsFillCartPlusFill onClick={handleAddToCart} size={23} style={{ background: 'transparent', cursor:'pointer' }} />
                        )}
                    </span></div>
                <div className='second'>
                    <span className='location'><HiOutlineLocationMarker style={{ background: 'transparent' }} size={20} />{carddata.fromport}, {carddata.from}</span>
                    <span className='planeicon'>
                        <span className='horizontal-line'></span>
                        <PiAirplaneLight style={{ background: 'transparent' }} />
                        <span className='horizontal-line'></span>
                    </span>
                    <span className='location'><HiOutlineLocationMarker style={{ background: 'transparent' }} size={20}/>{carddata.toport}, {carddata.to}</span>
                </div>
                <div className='third'>
                    <div className='company'>{carddata.company}</div>
                    <div className='rating'> {starsArray} </div>
                </div>
            </div>
            <div className='shippingprice'>
                <div className='rupee'>Rs. {carddata.moneyRs}.<span className='decimal'>{carddata.moneyps}</span></div>
                <button className='btn button' onClick={handleBookingClick}>Select</button>
                <div className='details'>view details</div>
            </div>
        </div>
    )
}

export default ShippingCard