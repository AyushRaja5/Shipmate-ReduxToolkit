import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../Store/cartSlice';
import { setCheckoutItem } from '../Store/checkoutSlice'
import { useNavigate } from 'react-router-dom'
const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Get the history object

  const Platformfee = 300;
  const insuranceCost = 3000;

  const checkoutItem = useSelector((state) => state.checkout.item);

  const totalamt =
    Number(checkoutItem.moneyRs) + Number(Platformfee) + Number(insuranceCost);

  const handleCheckoutcart = () => {

    const confirmation = window.confirm('Are you sure, you want to proceed with the checkout?');
    if (confirmation) {
      dispatch(removeFromCart(checkoutItem));
      dispatch(setCheckoutItem(null));
      navigate('/shipping')
    }

  };

  return (
    <div className='main-checkout'>
      <div className='checkout'>
        <div className='inner-check'>
          <div className='checkout-header'>
            <span className='price-title'>Price Details</span>
          </div>
          <div className='sellerinfo'>
            <span className='quote'>Seller's Quote</span>
            <span className='quote'>Rs. {checkoutItem.moneyRs}</span>
          </div>
          <hr />
          <div className='content'>
            <div className='sellerinfo'>
              <span className='quote'>Duties and Taxes</span>
              <span className='quote'>Not Included</span>
            </div>
            <div className='sellerinfo'>
              <span className='quote'>
                Insurance
                <br />
                <span style={{ fontSize: '10px', backgroundColor: 'transparent' }}>
                  Based on the items Cost
                </span>
              </span>
              <span className='quote'>Rs. 3000</span>
            </div>
          </div>
          <hr />

          <div className='content'>
            <div className='sellerinfo'>
              <div className='quote'>
                Add a <span className='promo'>promo code</span>
              </div>
            </div>
            <div className='sellerinfo'>
              <span className='quote'>Platform Fee</span>
              <span className='quote'>Rs. 300</span>
            </div>
          </div>
          <hr />

          <div className='total'>
            <div className='total-div'>
              <span className='total'>Total:</span>
              <span className='total'>Rs. {totalamt}</span>
            </div>
            <div className='totalbtn'>
              <button className='btn' onClick={handleCheckoutcart}>
                CheckOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
