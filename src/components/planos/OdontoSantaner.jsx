import React from 'react'
import odontoSantanderLogo from '../../assets/icons/odontoSantander.png'
import './css/pCards.css'

export default function OdontoSantander() {
  return (
    <div className='plano-logo-container'>
      <img 
      className='plano-img'
      src={odontoSantanderLogo} alt="logo amil" />
    </div>
  )
}
