import React from 'react'
import extractionIcon from '../../assets/icons/extractionIcon.svg'

export default function Extraction() {
  return (
    <div className='treatment-container'>
    <p className='treatment-title'>Extração</p>
    <img 
    id='extract-img'
    className='treatment-image'
    src={extractionIcon} alt="ilustração de canal" />
    <span
    id='extract-desc'
    className='treatment-description'
    >Extração dentária é a remoção de um dente da boca, feita para tratar problemas como cáries avançadas, infecções e fraturas.</span>
  </div>
  )
}
