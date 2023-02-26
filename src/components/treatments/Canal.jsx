import React from 'react'
import canalIcon from '../../assets/icons/canalIcon.svg'
import './css/cards.css'

export default function Canal() {
  return (
    <div className='treatment-container'>
      <p className='treatment-title'>Tratamento de Canal</p>
      <img 
      className='treatment-image'
      src={canalIcon} alt="ilustração de canal" />
      <span
      className='treatment-description'
      >O tratamento de Canal consiste na retirada da parte mais interna do dente, chamada de polpa dental.</span>
    </div>
  )
}
