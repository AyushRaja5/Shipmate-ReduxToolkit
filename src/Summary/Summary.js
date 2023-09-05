import React from 'react'
import './summary.css'
import { LiaPalletSolid } from 'react-icons/lia'
import { GiWeightScale } from 'react-icons/gi'
import SummaryBody from '../components/SummaryBody'

import { useSelector } from 'react-redux';
const Summary = () => {

    const checkoutItem = useSelector((state) => state.checkout.item);


    return (
        <div className='main-summary'>
            <div className='checkout-summary grid'>
                <div className='inner-summary'>
                    <div className='booking-head'>Booking Summary</div>
                    <SummaryBody/>
                </div>
            </div>
            <div className='loadweight grid'>
                <div className='weight'>
                    <span className='booking-head'>Total Weight/Volume</span>
                    <div className='icon-weight'>
                        <GiWeightScale style={{ backgroundColor: 'transparent' }} />
                    </div>
                    <span className='booking-head'>11.33KG</span>
                </div>
                <div className='load'>
                    <span className='booking-head'>Load</span>
                    <div className='middle'>
                        <div className='num'>1 X</div>
                        <div className='icon-weight'><LiaPalletSolid style={{ backgroundColor: 'transparent' }} /></div>
                    </div>
                    <div className='last'>
                        <div className='pallet'>Pallets</div>
                        <span className='num'>230 X 140 X 120 CM</span>
                    </div>
                </div>
            </div>
            <div className='insurance grid'>
                <div className='weight'>
                    <span className='booking-head'><span id='spantag'>Seller:</span> {checkoutItem.company}</span>
                    <div className='shippic'><img src='https://cdn2.yieldstreet.com/wp-content/uploads/2019/10/29112211/blog-cargoships.jpg' id='img'/></div>
                </div>
                <div className='load'>
                    <span className='booking-head'><span id='spantag'>Insurance:</span> Xcover.com</span>
                    <div className='insurancexcover'><img src='https://www.xcover.com/r-271670/static/media/logo.bb326494.svg'  id='img'/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Summary