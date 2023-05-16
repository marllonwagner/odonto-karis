
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import PlanosCard from '../../components/planosCard/PlanosCard'
import UnderCover from '../../components/underCover/UnderCover'
import '../../components/underCover/css/underCoverMedia.css'

export default function PlanosOdonto() {



  return (
    <div className='planos-odonto'>
      <Header  />
      <PlanosCard />
      <UnderCover/>
      <Footer />
    </div>
  )
}
