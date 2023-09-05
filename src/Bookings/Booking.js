import React from 'react'
import './booking.css'
import Checkout from '../components/Checkout'
import Summary from '../Summary/Summary'
import Trackernew from '../NewTracker/newTracker'
import Meesage from '../components/Meesage'

import {useSelector} from 'react-redux'

const Booking = () => {

  const checkout = useSelector((state) => state.checkout.item);

  if(!checkout){
    return(
      <div className='emptyCart' style={{display:'flex',flexDirection:'column',alignItems:'center' , justifyContent:'center', color:'var(--text-color)'}}>
          <h1>Nothing to Checkout!</h1>
          <h2>Add something</h2>
        </div>
    )
  }
  
  return (
    <>
      <div className='tracker'><Trackernew /></div>
      <div className='bookinginfo'>
        <div className='left'>
          <Summary />
        </div>
        <div className='right'>
          <Checkout />
        </div>
      </div>
      <div className='message-container'>
        <Meesage />
      </div>
    </>
  )
}

export default Booking