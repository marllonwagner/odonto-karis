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
    >Remoção de tártaro, placa bacteriana e manchas dos dentes para prevenir doenças bucais e manter uma boa saúde bucal.</span>
  </div>
  )
}
