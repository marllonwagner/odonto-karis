import React from 'react'
import { Link } from 'react-router-dom'
import './css/mediaMenu.css'

export default function MediaMenu() {

  return (
 
    <div className='links-container-media'>
          <Link to='/tratamentos'
          className='link-text-homecoverMedia'>Tratamentos
          </Link>

          <Link to='/planos'
          className='link-text-homecoverMedia'>Planos Odontológicos
          </Link>

          {/* <Link to='/harmonizacao'
          className='link-text'>Harmonização Facial
          </Link> */}

          <Link to='/contato'
          className='link-text-homecoverMedia'>Contato e Localização
          </Link>

        </div>
       
   
       
  )
}
