import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './tracker.css'
import StepNavigation from './StepNavigation';

const Trackernew = () => {
  const labelArray = ['Search', 'Recommended Service', 'Results', 'Booking']
  const [currentStep,updateCurrentStep] = useState(1);
  
  const navigate = useNavigate();
  const updateStep = (step) => {
    updateCurrentStep(step);

    const stepRoutes = {
      0: '/',
      1:'/',     
      2:'/shipping',
      3: '/booking'
    };
    if (stepRoutes.hasOwnProperty(step)) {
      navigate(stepRoutes[step]);
    }
  };

  return(
    <>
       <StepNavigation labelArray={labelArray} currentStep={currentStep} updateStep={updateStep}></StepNavigation>
    </>
  )
}

export default Trackernew