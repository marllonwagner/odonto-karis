import React from 'react'
import proteseIcon from '../../assets/icons/proteseIcon.svg'

export default function Protese() {
  return (
    <div className='treatment-container'>
    <p className='treatment-title'>Prótese Dentária</p>
    <img 
    className='treatment-image'
    src={proteseIcon} alt="ilustração de canal" />
    <span
    className='treatment-description'
    >Prótese dentária pode ser removível ou fixa, feito para substituir um ou mais dentes ausentes, com o objetivo de melhorar a estética e a função mastigatória.</span>
  </div>
  )
}
