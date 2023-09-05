import React from 'react'
import AccordionList from './AccordionList';


const Filters = () => {
    return (
        <div className='shippingfiltermain'>
            <div className='filtertitle'>
                <span style={{ fontWeight: '700', background: 'transparent' }}>3 Top Quote
                </span> (6 in total)
            </div>

            <div className='filters'>
                <AccordionList/>
            </div>
        </div>
    )
}

export default Filters