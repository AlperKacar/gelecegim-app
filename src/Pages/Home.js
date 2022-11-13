import { Helmet} from "react-helmet"
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function Home() {
  return (
    <>
    <Helmet>
      <title>Geleceğim Kurum, ÖzelDers ve İş İlanına Kolay Ulaşım</title>
      <meta name="description" content="anasayfa description"/>
    </Helmet>
      <Header/>
      <Footer/>
    </>
  )
}

export default Home