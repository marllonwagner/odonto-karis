import React from 'react'
import SocialContainer from '../socialContainer/SocialContainer'
import './css/footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container'>

        <div className='cro-container'>        
          <p
          className='cro-text'>RESPONSÁVEL TÉCNICO: DRA. Millena Karis </p>
          <span className='cro-text'>CRO:49653</span>
          <p className='cro-text'>EPAO:6423</p>
        </div>

        <p>CONTATO: (21)99310-1654</p>
        <SocialContainer/>
      </div>
    </footer>
  )
}
