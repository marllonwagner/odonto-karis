import React, { useState } from 'react'
import Map from '../../components/map/Map'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './css/localizacao.css'
import './css/localizacaoMedia.css'

export default function Localizacao() {

  const [ShowMenu , setShow ] = useState(false)

  return (
    <div className='localizacao'>
      <Header ShowMenu = {ShowMenu} setShow={setShow}/>
      <Map ShowMenu = {ShowMenu} />
      <Footer />
    </div>
  )
}
