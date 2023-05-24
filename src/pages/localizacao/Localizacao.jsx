import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './css/localizacao.css'
import './css/localizacaoMedia.css'
import MapGoogle from '../../components/map/Map'

export default function Localizacao() {

 
  return (
    <div className='localizacao'>
      <Header/>
      <MapGoogle />
      <Footer />
    </div>
  )
}
