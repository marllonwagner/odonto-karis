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
    >Implante dentário é a fixação de um pino de titânio no osso maxilar para substituir a raiz de um dente ausente, seguido pela fixação de um dente artificial para restaurar a função mastigatória e estética.</span>
  </div>
  )
}
