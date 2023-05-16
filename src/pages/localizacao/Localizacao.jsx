import Map from '../../components/map/Map'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './css/localizacao.css'
import './css/localizacaoMedia.css'

export default function Localizacao() {

 
  return (
    <div className='localizacao'>
      <Header/>
      <Map />
      <Footer />
    </div>
  )
}
