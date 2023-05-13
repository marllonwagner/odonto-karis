import React from 'react'
import Canal from '../treatments/Canal'
import Clareamento from '../treatments/Clareamento'
import Extraction from '../treatments/Extraction'
import Implant from '../treatments/Implant'
import Limpeza from '../treatments/Limpeza'
import Orto from '../treatments/Orto'
import Protese from '../treatments/Protese'
import Restoration from '../treatments/Restoration'
import './css/treatmentsCard.css'
import'./css/treatmentsCardMedia.css'
import MediaMenu from '../mediaMenu/MediaMenu'
import '../treatments/css/cardsMedia.css'


export default function TreatmentsCard(props) {

  const {ShowMenu} = props;

  return (
    <div className = 'main-container'>

      {ShowMenu && <MediaMenu /> }
    <div className='empty-div'>
    </div>
      <div className='secondary-container' >
<Canal />
<Clareamento />
<Extraction />
<Implant />
<Limpeza />
<Orto />
<Protese />
<Restoration />
      </div>
    </div>
  )
}
