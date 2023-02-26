import React from 'react'
import Canal from '../treatments/Canal'
import Clareamento from '../treatments/Clareamento'

export default function TreatmentsCard() {
  return (
    <div className = 'main-container'>
      <div className='secondary-container' >
<Canal />
<Clareamento />
      </div>
    </div>
  )
}
