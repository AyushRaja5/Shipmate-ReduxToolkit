import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import '../Bookings/booking.css'

const Tracker = () => {
  const [currentPage, setCurrentPage] = useState(1); // Set the initial active page

  const handleStepClick = (stepNumber) => {
    setCurrentPage(stepNumber);
  };

  const steps = [
    { title: 'Search', stepNumber: 1 },
    { title: 'Recommended Services', stepNumber: 2 },
    { title: 'Results', stepNumber: 3 },
    { title: 'Booking', stepNumber: 4 },
  ];

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/booking') {
      setCurrentPage(4);
    }
    if (location.pathname === '/shipping') {
      setCurrentPage(3);
    }
    if (location.pathname === '/shipping') {
      setCurrentPage(3);
    }
  }, [location]);
  return (
    // <div>
      <div className='booking-header'>
        <div className='points'>
          {steps.map((step) => (
            <div
              className={`step ${currentPage === step.stepNumber ? 'active' : ''}`}
              key={step.stepNumber}
              onClick={() => handleStepClick(step.stepNumber)}
            >
              <div className='planeicon'>
                <div className='step-icon-wrap'>
                  <div className='step-icon'>{step.stepNumber}</div>
                  <span className='horizontal-line'/>
                </div>
              </div>
              <h4 className='step-title'>{step.title}</h4>
            </div>
          ))}
        </div>
      </div>
    // </div>
  )
}

export default Tracker