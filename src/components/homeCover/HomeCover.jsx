import React from 'react'
import './css/homeCover.css'
import './css/homeCoverMedia.css'
import whatsIcon from '../../assets/icons/whatsIcon.svg'
import { Link } from 'react-router-dom';

export default function HomeCover(props) {

  const {ShowMenu} = props;
   
  return (
    <section className='home-cover'>
      {ShowMenu &&         <div className='links-container-media'>
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

        </div>}
      <div className='contact-container'>
        <span className='contact-text'>AGENDE SUA CONSULTA PELO NOSSO WHATSAPP <span className='phone-number'>99310-1654</span></span>
       
         <a className='whatsIcon-container' 
         href='https://wa.me/5521993101654'> <img 
         className='whatsIcon'
         src={whatsIcon} alt="icone-whatsapp" /></a>
      </div>
    </section>
  )
}
