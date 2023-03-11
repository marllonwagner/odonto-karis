import React from 'react'
import Amil from '../planos/Amil'
import DentalUni from '../planos/DentalUni'
import MaisDental from '../planos/MaisDental'
import Metlife from '../planos/Metlife'
import OdontoEmpresas from '../planos/OdontoEmpresas'
import OdontoSantander from '../planos/OdontoSantaner'
import Wdental from '../planos/Wdental'
import './css/planosCard.css'


export default function PlanosCard() {
  return (
    <div className='planos-card'>
    <div className='planos-card-main-container'>
      <div className='planos-card-second-container'>
      <Amil />
      <MaisDental />
      <OdontoEmpresas />
      <Wdental />
      <Metlife />
      <OdontoSantander />
      <DentalUni />
      </div>
    </div>
     </div>
  )
}
