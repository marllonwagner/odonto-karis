import React from 'react'
import faceLogo from '../../assets/icons/faceLogo.svg'
import instaLogo from '../../assets/icons/instaLogo.svg'
import './css/socialContainer.css'

export default function SocialContainer() {
  return (
    <div className='social-container'>
<img
className='face-logo'
 src={faceLogo} alt="facebook" />
<img 
className='insta-logo'
src={instaLogo} alt="instagram" />
    </div>
  )
}
