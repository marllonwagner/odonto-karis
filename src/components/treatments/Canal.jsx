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
      >O tratamento de canal consiste na remoção da polpa dentária, que é a parte interna do dente, quando está infectada ou inflamada, o objetivo é salvar o dente e aliviar a dor e a inflamação.</span>
    </div>
  )
}
