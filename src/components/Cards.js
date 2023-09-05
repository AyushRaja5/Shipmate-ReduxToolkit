import React from 'react'
import '../Services/services.css'
import { RiShipLine } from 'react-icons/ri'

const cardsarr = [
    {
        id:1,
        icon: <RiShipLine style={{ background: 'transparent' }} />,
        title: 'Freight Services',
        summary: 'Open new oppurties to grow your business. Enter new market and discover new continents. We are with you door-to-door.'
    },
    {
        id:2,
        icon: <RiShipLine style={{ background: 'transparent' }}/>,
        title: 'Freight Services',
        summary: 'Open new oppurties to grow your business. Enter new market and discover new continents. We are with you door-to-door.'
    },
    {
        id:3,
        icon: <RiShipLine style={{ background: 'transparent' }}/>,
        title: 'Freight Services',
        summary: 'Open new oppurties to grow your business. Enter new market and discover new continents. We are with you door-to-door.'
    },
    {
        id:4,
        icon: <RiShipLine style={{ background: 'transparent' }}/>,
        title: 'Freight Services',
        summary: 'Open new oppurties to grow your business. Enter new market and discover new continents. We are with you door-to-door.'
    },
]

const Cards = () => {
    return (
        <>
            <div className='card'>
                {
                    cardsarr.map((item) => {
                        return (
                            <div className='singleCard' key={item.id}>
                                <div className='card-head'>
                                    <div className='card-icon'>{item.icon}</div>
                                    <div className='cardtitle'>
                                        {item.title}
                                    </div>
                                </div>
                                <hr />
                                <div className='summary'>
                                    {item.summary}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Cards