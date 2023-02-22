import { Helmet} from "react-helmet"
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Body from "../Components/Body"


function Home() {


  return (
    <>
    <Helmet>
      <title>Geleceğim Kurum, ÖzelDers ve İş İlanına Kolay Ulaşım</title>
      <meta name="description" content="anasayfa description"/>
    </Helmet>
      <Header/>
      <Body/>
      <Footer/>
    </>
  )
}

export default Home