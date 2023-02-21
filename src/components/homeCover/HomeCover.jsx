import React from 'react'
import './css/homeCover.css'
import whatsIcon from '../../assets/icons/whatsIcon.svg'

export default function HomeCover() {
  return (
    <section className='home-cover'>
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
