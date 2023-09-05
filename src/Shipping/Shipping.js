import React, { useEffect } from 'react'
import './shipping.css'
import Search from '../Search/Search'
import { RiShipLine } from 'react-icons/ri'
import ShippingCard from '../components/ShippingCard'
import Filters from '../components/Filters'
import FilterSection from '../components/FilterSection'
import Meesage from '../components/Meesage'
import Trackernew from '../NewTracker/newTracker'


import { useDispatch } from 'react-redux';
import { updateData } from '../Store/dataSlice'; // Import your action
import { useSelector } from 'react-redux';


const shipcarddata = [
  {
    id: 1,
    type: 'Best Value',
    days: '5',
    from: 'Delhi',
    fromport: '110003',
    to: 'Sanghai',
    toport: '200080',
    company: 'Primetime Worldwide',
    stars: 2,
    moneyRs: '3000',
    moneyps: '20',
  },
  {
    id: 2,
    type: 'Eco',
    days: '8',
    from: 'Mumbai',
    fromport: '110005',
    to: 'Sanghai',
    toport: '200080',
    company: 'Primetime Worldwide',
    stars: 4,
    moneyRs: '2080',
    moneyps: '18',
  },
  {
    id: 3,
    type: 'Best Value',
    days: '3',
    from: 'Ranchi',
    fromport: '110500',
    to: 'Sanghai',
    toport: '200080',
    company: 'AyushTravels Worldwide',
    stars: 3,
    moneyRs: '9000',
    moneyps: '89',
  },
  {
    id: 4,
    type: 'Best Value',
    days: '12',
    from: 'Chennai',
    fromport: '130003',
    to: 'Russia',
    toport: '400080',
    company: 'Maharaja Worldwide',
    stars: 3,
    moneyRs: '200000',
    moneyps: '38',
  },
  {
    id: 5,
    type: 'Eco',
    days: '6',
    from: 'Gurgaon',
    fromport: '170030',
    to: 'Tokyo',
    toport: '309010',
    company: 'AyushTravels Worldwide',
    stars: 3,
    moneyRs: '4500',
    moneyps: '65',
  }
]

const Shipping = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateData(shipcarddata));
  }, []);

  const Storeshipcarddata = useSelector((state) => state.data.shipcarddata);
  const SearchShipdata = useSelector((state) => state.search);

  const searchOrigin = SearchShipdata.origin.toLowerCase();
  const searchDestination = SearchShipdata.destination.toLowerCase();


  const isSearchEmpty = searchOrigin.trim() === '' && searchDestination.trim() === '';
  const filteredShipcarddata = isSearchEmpty
    ? Storeshipcarddata
    : Storeshipcarddata.filter((carddata) => {
        const dataFrom = carddata.from.toLowerCase();
        const dataTo = carddata.to.toLowerCase();
        // Check if either origin or destination matches the search criteria (case-insensitive)
        return dataFrom === searchOrigin || dataTo === searchDestination;
      });

  const sections = [
    { title: 'Best Values 5-5 days. Rs. 31210' },
    { title: 'Quickest 5-5 days. Rs. 3120' },
    { title: 'Cheapest 5-5 days. Rs. 3120' }
  ];

  return (
    <div>
      <div className='shippinghead'>
        <div className='shipingstatus'>
          <RiShipLine style={{ background: 'transparent' }} className='icon' /> Load
        </div>
        <Trackernew />
      </div>
      <Search isShipping={true} />
      <br />
      <hr />
      <div className='shippinglower'>
        <div className='left'>
          <Filters />
        </div>
        <div className='right'>
          <FilterSection sections={sections} />
          <div className='cards'>
          {filteredShipcarddata.map((carddata) => (
            <ShippingCard key={carddata.id} carddata={carddata} added={carddata.added} />
          ))}
          </div>
        </div>
      </div>
      <div className='message-container'>
        <Meesage />
      </div>
    </div>
  )
}

export default Shipping