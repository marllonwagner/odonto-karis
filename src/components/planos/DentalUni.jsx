import React from 'react'
import dentalUniLogo from '../../assets/icons/dentalUni.svg'
import './css/pCards.css'

export default function DentalUni() {
  return (
    <div className='plano-logo-container'>
      <img 
      className='plano-img'
      src={dentalUniLogo} alt="logo dentalUni" />
    </div>
  )
}
