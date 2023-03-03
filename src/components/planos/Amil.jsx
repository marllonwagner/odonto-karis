import React from 'react'
import amilLogo from '../../assets/icons/amil.png'
import './css/pCards.css'

export default function Amil() {
  return (
    <div className='plano-logo-container'>
      <img 
      className='plano-img'
      src={amilLogo} alt="logo amil" />
    </div>
  )
}
