import React from 'react'
import maisDentalLogo from '../../assets/icons/maisDental.png'
import './css/pCards.css'

export default function MaisDental() {
  return (
    <div className='plano-logo-container'>
      <img 
      className='plano-img'
      src={maisDentalLogo} alt="logo amil" />
    </div>
  )
}
