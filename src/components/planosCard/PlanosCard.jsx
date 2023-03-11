import React from 'react'
import Amil from '../planos/Amil'
import DentalUni from '../planos/DentalUni'
import MaisDental from '../planos/MaisDental'
import Metlife from '../planos/Metlife'
import OdontoEmpresas from '../planos/OdontoEmpresas'
import OdontoSantander from '../planos/OdontoSantaner'
import Wdental from '../planos/Wdental'
import UnderCover from '../../components/underCover/UnderCover'

import './css/planosCard.css'
import Footer from '../footer/Footer'

export default function PlanosCard() {
  return (
    <div>
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
    <UnderCover />
    <Footer />
    </div>
  )
}
