import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import HomeCover from '../../components/homeCover/HomeCover'
import UnderCover from '../../components/underCover/UnderCover'
import './css/Home.css'

export default function Home() {
  return (
    <div>
      <Header/>
      <HomeCover/>
      <UnderCover showPhotos = {true}/>
      <Footer/>
    </div>
  )
}
