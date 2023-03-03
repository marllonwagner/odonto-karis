import React from 'react'
import ortoIcon from '../../assets/icons/ortoIcon.svg'

export default function Orto() {
  return (
    <div className='treatment-container'>
    <p className='treatment-title'>Ortodontia</p>
    <img 
    className='treatment-image'
    src={ortoIcon} alt="ilustração de canal" />
    <span
    className='treatment-description'
    >O objetivo da ortodontia é corrigir problemas relacionados à posição e alinhamento dos dentes e maxilares.</span>
  </div>
  )
}
