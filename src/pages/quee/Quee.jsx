import './css/quee.css'
import Header from '../../components/header/Header'
import QueeUperCover from '../../components/quee/queeUpperCover/QueeUperCover'
import QueeContainer from '../../components/quee/queeContainer/QueeContainer'

export default function Quee() {


  return (
 
    <div className='quee'>
    <Header />
    <QueeUperCover />
    <QueeContainer />
    </div>
 
  )
}