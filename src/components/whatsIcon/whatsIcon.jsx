import React from 'react'
import whatsIcon from '../../assets/icons/whatsIcon.svg'
import '../homeCover/css/homeCoverMedia.css'

export default function WhatsIcon() {
  return (
    <a className='whatsIcon-container' 
    href='https://wa.me/5521993101654?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta.'> <img 
    className='whatsIcon'
    src={whatsIcon} alt="icone-whatsapp" /></a>
  )
}
