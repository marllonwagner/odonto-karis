import React, { useState } from 'react'
import Header from '../../components/header/Header'
import TreatmentsCard from '../../components/treatmentsCard/TreatmentsCard'
import Footer from '../../components/footer/Footer'
import './css/tratamentos.css'

export default function Tratamentos() {

  const [ShowMenu , setShow ] = useState(false)

  return (
    <div className='tratamentos'>
      <Header ShowMenu = {ShowMenu} setShow={setShow}/>
      <TreatmentsCard ShowMenu = {ShowMenu} />
      <Footer/>
      </div>
  )
}
