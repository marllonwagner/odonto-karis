import React from 'react'
import whatsIcon from '../../assets/icons/whatsIcon.svg'
import './css/map.css'

export default function Map() {
  return (
    <div className='map-container'>

      <div className='map-infos-container'>
        <div className='map-contato-container'>
        <p>Endereço : Rua Guaiacá, 764 - Loja C 
      </p>
        <p>Telefone: 99310-1654 <img 
        className='map-w-icon'
        src={whatsIcon} alt="" /></p>
        </div>
      
        <h4>Como Chegar?</h4>
        
      </div>
    <iframe 
    className='map'
    title='mapa-clinica'
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.228983185826!2d-43.454394269989464!3d-22.86799813715502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99602be08a3859%3A0x7b1797e014289fbc!2sR.%20Guaiaca%2C%20764%20-%20Padre%20Miguel%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2021720-330!5e0!3m2!1spt-BR!2sbr!4v1677811512268!5m2!1spt-BR!2sbr" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">Como chegar</iframe>
    </div>
  )
}
