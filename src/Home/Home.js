import React from 'react'
import Search from '../Search/Search'
import Services from '../Services/Services'
import './home.css'
import Meesage from '../components/Meesage'
const Home = () => {
    return (
        <div>
            <div className='container'>
                <div className='textarea'>
                    <div className='bigger-text'>Hassle-Free Shipping Solutions</div>
                    <span>Compare, book and manage your freight across the world's top  logistics providers, all on one platform.</span>
                </div>
            </div>
            <Search />
            <Services />
            <div className='message-container'>
                <Meesage/>
            </div>
        </div>
    )
}

export default Home