import React, { useState } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import PlanosCard from '../../components/planosCard/PlanosCard'
import UnderCover from '../../components/underCover/UnderCover'
import '../../components/underCover/css/underCoverMedia.css'

export default function PlanosOdonto() {

  const [ShowMenu , setShow ] = useState(false)

  return (
    <div className='planos-odonto'>
      <Header ShowMenu = {ShowMenu} setShow={setShow}  />
      <PlanosCard ShowMenu = {ShowMenu} />
      <UnderCover/>
      <Footer />
    </div>
  )
}
