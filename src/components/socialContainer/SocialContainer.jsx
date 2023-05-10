import React from 'react'
import faceLogo from '../../assets/icons/faceLogo.svg'
import instaLogo from '../../assets/icons/instaLogo.svg'
import whatsIcon from '../../assets/icons/whatsIcon.svg'
import './css/socialContainer.css'
import './css/socialContainerMedia.css'

export default function SocialContainer() {
  return (
    <div className='social-container'>
      <a href='https://www.facebook.com/Karisodontologia/'>
        <img
          className='face-logo'
          src={faceLogo} alt="facebook" />
      </a>


      <a href='https://www.instagram.com/karisodonto/'>
        <img
          className='insta-logo'
          src={instaLogo} alt="instagram" />
      </a>


      <a className='whatsIcon-container-footer'
        href='https://wa.me/5521993101654'> <img
          className='whatsIcon-footer'
          src={whatsIcon} alt="icone-whatsapp" /></a>
    </div>
  )
}
