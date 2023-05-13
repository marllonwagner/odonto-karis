import React from 'react'
import { Link } from 'react-router-dom'
import './css/underCover.css'
import './css/underCoverMedia.css'
import photo1 from '../../assets/images/photo1.jpg'
import photo2 from '../../assets/images/photo2new.webp'
import photo3 from '../../assets/images/photo3.jpg'
import WhatsIcon from '../whatsIcon/whatsIcon'

export default function UnderCover({showPhotos}) {
  return (
    <section id='under-section' className={showPhotos ? 'under-cover' :'under-cover-planos'}>
      <div className='presentation-container'>
        <h3 className='presentation-title'>{showPhotos ? 'Clínica Odonto Karis': 'Não encontrou seu plano ?'}</h3>
        <div className='presentation-text-container'>
          <p className='presentation-text'>{showPhotos ? 'Fundada em 2020, a clínica Odonto Karis tem como missão restaurar sorrisos e auto-estimas.': <span className='whats-text-planos'>Entre em contato agora mesmo pelo nosso WhatsApp : <span className='phone-number-planos'>99310-1654</span>
          <span className='whats-container-planos'>
          <WhatsIcon/>
          </span>
          </span>}</p>
          <p className='presentation-text'>{showPhotos ? 'Temos profissionais qualificados, prontos para atender suas necessidades.':'Nossos atendentes irão lhe fornecer as informações necessárias.' }</p>
          </div>
          <div className='presentation-links-container'>
            <p className='presentation-text'>Temos tratamentos completos para você e sua família, confira <Link to='/tratamentos'
              className='aqui'><span className='aqui'
              >AQUI</span></Link></p>
              {showPhotos &&
            <p className='presentation-text'>Trabalhamos com diversos planos odontológicos, confira  <Link to='/planos'
              className='aqui'><span className='aqui'>AQUI</span></Link></p>
}
         

        </div>
        {showPhotos &&
        <div className='images-container'>
          <div className='images-wrapper'>
            <img id='photo1' className='clinic-images'
              src={photo1} alt="foto da clinica" />

 
            <img id='photo2' className='clinic-images'
              src={photo2} alt="foto da clinica" />


            <img id='photo3' className='clinic-images'
              src={photo3} alt="foto da clinica" />
              </div>
          </div>
}
      </div>
    </section>
  )
}
