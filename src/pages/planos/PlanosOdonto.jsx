import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import PlanosCard from '../../components/planosCard/PlanosCard'
import UnderCover from '../../components/underCover/UnderCover'

export default function PlanosOdonto() {
  return (
    <div className='planos-odonto'>
      <Header />
      <PlanosCard />
      <UnderCover/>
      <Footer />
    </div>
  )
}
