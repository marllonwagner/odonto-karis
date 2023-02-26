import React from 'react'
import implantIcon from '../../assets/icons/implantIcon.png'
import './css/cards.css'

export default function Implant() {
  return (
    <div className='treatment-container'>
    <p className='treatment-title'>Implante Dentário</p>
    <img 
    className='impl-treatment-image'
    src={implantIcon} alt="ilustração de canal" />
    <span
    className='treatment-description'
    >Funciona como a raiz do dente e serve como um pilar para colocação da prótese dentária.</span>
  </div>
  )
}
