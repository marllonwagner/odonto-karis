import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/logo.svg'
import './css/header.css'

export default function Header() {
  return (
    <header className='header'>

      <div className='header-container'>
        <Link to='/'
        className='link-text'>
        <div className='logo-container'>
      
    
          <img
            className='logo-img'
            src={logo} alt="logotipo" />
          <span className='logo-text'>ODONTO KARIS</span>
      
       
        </div>
        </Link>
        <div className='links-container'>
          <Link to='/tratamentos'
          className='link-text'>Tratamentos
          </Link>

          <Link to='/planos'
          className='link-text'>Planos Odontológicos
          </Link>

          <Link to='/harmonizacao'
          className='link-text'>Harmonização Facial
          </Link>

          <Link to='/contato'
          className='link-text'>Contato e Localização
          </Link>

        </div>

      </div>
    </header>
  )
}
