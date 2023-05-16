import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import HomeCover from '../../components/homeCover/HomeCover'
import UnderCover from '../../components/underCover/UnderCover'
import './css/Home.css'
import './css/HomeMedia.css'

export default function Home() {




  return (
    <div className='main'>
      <Header />
      <HomeCover />
      <UnderCover showPhotos = {true}/>
      <Footer/>
    </div>
  )
}
