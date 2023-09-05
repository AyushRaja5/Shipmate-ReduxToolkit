import React, { useState } from 'react'
import './search.css'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { RiShipLine } from 'react-icons/ri'
import { LuCalendarDays } from 'react-icons/lu'
import { BsArrowRight } from 'react-icons/bs'
import { BiEditAlt } from 'react-icons/bi'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {setSearchInfo} from '../Store/searchSlice'

const Search = ({ isShipping }) => {
  const dispatch = useDispatch()
  const today = new Date();

  const searchInfo = useSelector((state) => state.search);

  const [selectedDate, setSelectedDate] = useState(today || searchInfo.selectedDate);
  const [origin, setOrigin] = useState('' || searchInfo.origin);
  const [destination, setDestination] = useState('' || searchInfo.destination);
  const [load, setLoad] = useState('' || searchInfo.load);
  
  const handleOriginInput = event => {
    setOrigin(event.target.value); 
  };

  const handleDestinationInput = event => {
    setDestination(event.target.value);
  };
  
  const handleLoadInput = event => {
    setLoad(event.target.value);
  };

  const handleDateInput = date => {
    setSelectedDate(date.getTime());
  };
  const buttonHandle = () => {
    if (origin || destination) {
      dispatch(
        setSearchInfo({
          origin,
          destination,
          selectedDate,
          load,
        }))
    } else {
      // Clear the search info in the store
      alert('Please Enter Origin and destination for Searching')
      dispatch(
        setSearchInfo({
          origin: '',
          destination: '',
          selectedDate: today.getTime(),
          load: '',
        })
      );
    }
  };
console.log(searchInfo)
  return (
    <>
      <div className='search-main'>
        <div className='search-bar'>
          <div className='form'>
            <div className='input'>
              <HiOutlineLocationMarker className='location' />
              <input type='text' placeholder='Origin, Port, City' value={origin} onChange={handleOriginInput} />
            </div>
            <div className='input'>
              <HiOutlineLocationMarker className='location' />
              <input type='text' placeholder='Destination, Port, City' value={destination} onChange={handleDestinationInput} />
            </div>
            <div className='input' >
              <LuCalendarDays className='calender' />
              <DatePicker selected={selectedDate} dateFormat="dd MMMM yyyy" onChange={handleDateInput}
                placeholderText="Select a month" className='custom-date-picker' />
            </div>
            <div className='input'>
              <RiShipLine className='ship' />
              <input type='number' placeholder='Load' value={load} onChange={handleLoadInput} />
            </div>
          </div>
          <NavLink type='submit' to={'/shipping'} className={`search-btn ${isShipping ? 'shipping-btn' : ''}`} onClick={() => buttonHandle()}>
            {isShipping ? <BiEditAlt className='search-btn-icon' /> : <BsArrowRight className='search-btn-icon' />}
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Search