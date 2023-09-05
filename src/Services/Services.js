import React from 'react'
import './services.css'
import Cards from '../components/Cards'
const Services = () => {
  return (
    <>
        <div className='container-service'>
            <div className='container-title'>
                <div className='title'>Services</div>
            </div>
        </div>
        
        <div className='cards'>
                <Cards/>
        </div>
    </>
  )
}

export default Services