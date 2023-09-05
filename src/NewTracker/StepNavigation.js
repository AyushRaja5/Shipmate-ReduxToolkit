import React,{useState} from 'react'
import Step from './Step'
import { useNavigate } from 'react-router-dom'
const StepNavigation = (props) => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  
  return (
    <div className='stepWrapper'>
        {props.labelArray.map((item,index)=><Step key={index} index={index} label={item} 
        
        updateStep={props.updateStep}/>)}
        {/* <Step/> */}
    </div>
  )
}

export default StepNavigation