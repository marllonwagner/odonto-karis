import React, { useState } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import HomeCover from '../../components/homeCover/HomeCover'
import UnderCover from '../../components/underCover/UnderCover'
import './css/Home.css'
import './css/HomeMedia.css'

export default function Home() {

  const [ShowMenu , setShow ] = useState(false);


  return (
    <div className='main'>
      <Header ShowMenu = {ShowMenu} setShow={setShow} />
      <HomeCover ShowMenu = {ShowMenu} />
      <UnderCover showPhotos = {true}/>
      <Footer/>
    </div>
  )
}
