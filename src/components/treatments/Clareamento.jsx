import React from 'react'
import clareamentoIcon from '../../assets/icons/clareamentoIcon.png'
import './css/cards.css'

export default function Clareamento() {
  return (
    <div className='treatment-container'>
    <p className='treatment-title'>Clareamento Dental</p>
    <img 
    className='clr-treatment-image'
    src={clareamentoIcon} alt="ilustração de canal" />
    <span
    className='treatment-description'
    >É um tratamento estético utilizado para tornar os dentes mais brancos.</span>
  </div>
  )
}
