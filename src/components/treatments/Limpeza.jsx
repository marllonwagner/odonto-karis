import React from 'react'
import limpezaIcon from '../../assets/icons/limpezaIcon.png'

export default function Limpeza() {
  return (
    <div className='treatment-container'>
    <p className='treatment-title'>Limpeza Dentária</p>
    <img 
    className='lmp-treatment-image'
    src={limpezaIcon} alt="ilustração de canal" />
    <span
    className='treatment-description'
    >É um procedimento clínico de remoção da placa bacteriana e do tártaro dos dentes.</span>
  </div>
  )
}
