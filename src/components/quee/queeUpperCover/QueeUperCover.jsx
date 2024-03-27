import React from 'react'
import './css/queeUperCoverMob.css'
import './css/queeUperCover.css'
import ortoIcon2 from '../../../assets/icons/ortoIcon3.svg'

export default function QueeUperCover() {
  return (
    <div className='quee-uper-cover'>
      <h1 className='fila-virtual'>Fila Virtual</h1>
      <img 
      className='orto-img-quee'
      src={ortoIcon2} alt="orto icon" />
    </div>
  )
}
