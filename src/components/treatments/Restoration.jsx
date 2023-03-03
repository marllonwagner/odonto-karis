import React from 'react'
import restorationIcon from '../../assets/icons/restorationIcon.png'

export default function Restoration() {
  return (
    <div className='treatment-container'>
    <p className='treatment-title'>Restauração Dentária</p>
    <img 
    className='rst-treatment-image'
    src={restorationIcon} alt="ilustração de canal" />
    <span
    className='treatment-description'
    >Consiste na remoção da cárie ou a parte danificada do dente e preenche com material restaurador, para reparar a estrutura e a função do dente.</span>
  </div>
  )
}
