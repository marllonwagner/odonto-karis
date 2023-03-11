import React from 'react'
import Header from '../../components/header/Header'
import TreatmentsCard from '../../components/treatmentsCard/TreatmentsCard'
import Footer from '../../components/footer/Footer'
import './css/tratamentos.css'

export default function Tratamentos() {
  return (
    <div className='tratamentos'>
      <Header/>
      <TreatmentsCard/>
      <Footer/>
      </div>
  )
}
