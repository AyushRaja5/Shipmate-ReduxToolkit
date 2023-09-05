import React from 'react'
import { HiOutlineBuildingLibrary } from 'react-icons/hi2'
import { GiCommercialAirplane } from 'react-icons/gi'
import { useSelector } from 'react-redux'
const SummaryBody = () => {

    const checkoutItem = useSelector((state) => state.checkout.item);

    return (
        <>
            <div className="layout">
                <div className="sidebar-left">
                    <div className='summaryicon'><HiOutlineBuildingLibrary style={{ background: 'transparent' }} /></div>
                    <div className='title'>
                        <div className='state'>{checkoutItem.from}</div>
                        <div className='country'><span>{checkoutItem.fromport},</span><span>India</span></div>
                    </div>
                </div>
                <div className="main-content">
                    <div className='line-express'>
                        <span className='express'>Express</span>
                        <GiCommercialAirplane style={{ background: 'transparent' }} />
                    </div>
                    <span className='summaryhorizontal' />
                </div>
                <div className="sidebar-right">
                    <div className='summaryicon'><HiOutlineBuildingLibrary style={{ background: 'transparent' }} /></div>
                    <div className='title'><div className='state'>{checkoutItem.to}</div>
                        <div className='country'><span>{checkoutItem.toport},</span><span>China</span></div></div>
                </div>
            </div>
        </>
    )
}

export default SummaryBody