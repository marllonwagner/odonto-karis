import React from 'react'
import clareamentoIcon from '../../assets/icons/clareamentoIcon.png'
import './css/canal.css'

export default function Clareamento() {
  return (
    <div className='treatment-container'>
    <p className='treatment-title'>Clareamento Dental</p>
    <img 
    className='clr-treatment-image'
    src={clareamentoIcon} alt="ilustração de canal" />
    <span
    className='treatment-description'
    >O tratamento de Canal consiste na retirada da parte mais interna do dente, chamada de polpa dental.</span>
  </div>
  )
}
