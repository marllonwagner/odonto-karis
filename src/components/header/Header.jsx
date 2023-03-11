import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/logo.svg'
import './css/header.css'
import './css/headerMedia.css'
import smartMenu from '../../assets/icons/smartMenu.svg'

export default function Header() {

const [ShowMenu , setShow ] = useState(false)

const setMenu = () => {
  setShow(!ShowMenu)
}

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

        <div
        onClick={setMenu} 
        className='menu-btn'>
          <img 
          className='menu-btn'
          src={smartMenu} alt="" />
        </div>

        <div className='links-container'>
          <Link to='/tratamentos'
          className='link-text'>Tratamentos
          </Link>

          <Link to='/planos'
          className='link-text'>Planos Odontológicos
          </Link>

          {/* <Link to='/harmonizacao'
          className='link-text'>Harmonização Facial
          </Link> */}

          <Link to='/contato'
          className='link-text'>Contato e Localização
          </Link>

        </div>

      </div>
    </header>
  )
}
