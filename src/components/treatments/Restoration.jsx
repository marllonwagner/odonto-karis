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
    >É um procedimento clínico com objetivo de reconstruir um dente mantendo sua estética e função.</span>
  </div>
  )
}
