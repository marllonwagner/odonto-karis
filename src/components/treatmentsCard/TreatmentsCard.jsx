import React from 'react'
import Canal from '../treatments/Canal'
import Clareamento from '../treatments/Clareamento'
import Extraction from '../treatments/Extraction'
import Implant from '../treatments/Implant'
import Limpeza from '../treatments/Limpeza'
import Orto from '../treatments/Orto'

export default function TreatmentsCard() {
  return (
    <div className = 'main-container'>
      <div className='secondary-container' >
<Canal />
<Clareamento />
<Extraction />
<Implant />
<Limpeza />
<Orto />
      </div>
    </div>
  )
}
