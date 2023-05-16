import React from 'react'
import './css/homeCover.css'
import './css/homeCoverMedia.css'
import coverImg from '../../assets/images/home-cover-blank-new.webp'
import WhatsIcon from '../whatsIcon/whatsIcon';

export default function HomeCover() {


  return (
    <section className='home-cover'>
   
      <div className='cover-img-container'>
      <img className='cover-img' src={coverImg} alt="imagem de capa" />
      </div>
      
      <div className='contact-container'>
        <span className='contact-text'>AGENDE SUA CONSULTA PELO NOSSO WHATSAPP <span className='phone-number'>99310-1654</span></span>
        <WhatsIcon/>
      </div>
    </section>
  )
}
