import React from 'react'
import metlifeLogo from '../../assets/icons/metlife.png'
import './css/pCards.css'

export default function Metlife() {
  return (
    <div className='plano-logo-container'>
      <img 
      className='plano-img'
      src={metlifeLogo} alt="logo amil" />
    </div>
  )
}
