import React from 'react'
import OdontoEmpresasLogo from '../../assets/icons/odontoEmpresas.png'
import './css/pCards.css'

export default function OdontoEmpresas() {
  return (
    <div className='plano-logo-container'>
      <img 
      className='plano-img'
      src={OdontoEmpresasLogo} alt="logo odonto Empresas" />
    </div>
  )
}
