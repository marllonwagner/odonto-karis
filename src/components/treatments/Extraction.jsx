import React from 'react'
import extractionIcon from '../../assets/icons/extractionIcon.svg'

export default function Extraction() {
  return (
    <div className='treatment-container'>
    <p className='treatment-title'>Extração</p>
    <img 
    className='treatment-image'
    src={extractionIcon} alt="ilustração de canal" />
    <span
    className='treatment-description'
    >É um ato cirúrgico para remover um dente. Podem ser dentes siso, de leite ou permanentes em situação irreparável.</span>
  </div>
  )
}
