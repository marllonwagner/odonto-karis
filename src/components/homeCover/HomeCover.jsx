import React from 'react'
import './css/homeCover.css'
import './css/homeCoverMedia.css'
import whatsIcon from '../../assets/icons/whatsIcon.svg'
import MediaMenu from '../mediaMenu/MediaMenu';
import coverImg from '../../assets/images/home-cover-blank-new.webp'
import WhatsIcon from '../whatsIcon/whatsIcon';

export default function HomeCover(props) {

  const { ShowMenu } = props;
  return (
    <section className='home-cover'>
      {ShowMenu && <MediaMenu /> }
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
