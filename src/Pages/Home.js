import { Helmet} from "react-helmet"
import Body from "../Components/Body"
import ResSubBar from "../Components/ResSubBar"

function Home() {


  return (
    <>
    <Helmet>
      <title>Geleceğim Kurum, ÖzelDers ve İş İlanına Kolay Ulaşım</title>
      <meta name="description" content="anasayfa description"/>
    </Helmet>
      <Body/>
      <ResSubBar/>
    </>
  )
}

export default Home