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
    id='clareamento-desc'
    className='treatment-description'
    >Clareamento dental é um tratamento estético que utiliza substâncias químicas para deixar os dentes mais brancos e brilhantes.</span>
  </div>
  )
}
