import React from 'react'
import { Link } from 'react-router-dom'
import './css/underCover.css'
import photo1 from '../../assets/images/photo1.jpg'
import photo2 from '../../assets/images/photo2.jpg'
import photo3 from '../../assets/images/photo3.jpg'

export default function UnderCover() {
  return (
    <section className='under-cover'>
      <div className='presentation-container'>
        <h3 className='presentation-title'>Clínica Odonto Karis</h3>
        <div className='presentation-text-container'>
          <p className='presentation-text'>Fundada em 2020, a clínica Odonto Karis tem como missão restaurar sorrisos e auto-estimas.</p>
          <p className='presentation-text'>Temos profissionais qualificados, prontos para atender suas necessidades. </p>
          <div className='presentation-links-container'>
            <p className='presentation-text'>Temos tratamentos completos para você e sua família, confira <Link to='/tratamentos'
              className='aqui'><span className='aqui'
              >AQUI</span></Link></p>
            <p className='presentation-text'>Trabalhamos com diversos planos odontológicos, confira  <Link to='/planos'
              className='aqui'><span className='aqui'>AQUI</span></Link></p>
          </div>

        </div>
        <div className='images-container'>
            <img className='clinic-images'
              src={photo1} alt="foto da clinica" />
            <img className='clinic-images'
              src={photo2} alt="foto da clinica" />
            <img className='clinic-images'
              src={photo3} alt="foto da clinica" />
          </div>
      </div>

    </section>
  )
}
