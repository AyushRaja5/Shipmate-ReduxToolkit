import React from 'react'
import {BiMessageDetail} from 'react-icons/bi'
const Meesage = () => {

    const message = {
        display: 'flex',
        justifyContent: 'center', // Horizontal centering
        alignItems: 'center',     // Vertical centering
        backgroundColor: 'var(--first-color)',
        padding: '10px',
        borderRadius: '50%',
        cursor:'pointer'
      };
  return (
    <div style={message}>
       <BiMessageDetail style={{ background: 'transparent', color:'var(--text-white)' }} size={30} />
    </div>
  )
}

export default Meesage