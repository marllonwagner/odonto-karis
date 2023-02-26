import React from 'react'
import proteseIcon from '../../assets/icons/proteseIcon.svg'

export default function Protese() {
  return (
    <div className='treatment-container'>
    <p className='treatment-title'>Prótese Dentária</p>
    <img 
    className='treatment-image'
    src={proteseIcon} alt="ilustração de canal" />
    <span
    className='treatment-description'
    >Tem como principal objetivo repor dentes que foram perdidos.</span>
  </div>
  )
}
