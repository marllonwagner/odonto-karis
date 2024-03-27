import React from 'react'
import './css/queeUperCoverMob.css'
import './css/queeUperCover.css'
import ortoIcon2 from '../../../assets/icons/ortoIcon3.svg'
import toothOrthoIcon from '../../../assets/icons/tooth-ortho-icon.svg'

export default function QueeUperCover() {
  return (
    <div className='quee-uper-cover'>
      <h1 className='fila-virtual'>Fila Virtual</h1>
      <img 
      className='orto-img-quee'
      src={ortoIcon2} alt="orto icon" />
      <div className="container-left">
          <div className="circle-l">
          </div>
      </div>
      <div className="container-rigth">
          
            <img className="circle-r" src={toothOrthoIcon} alt="dente" />
          
      </div>
    </div>
  )
}
