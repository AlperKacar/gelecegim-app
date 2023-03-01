import { Helmet} from "react-helmet"
import Body from "../Components/Body"


function Home() {


  return (
    <>
    <Helmet>
      <title>Geleceğim Kurum, ÖzelDers ve İş İlanına Kolay Ulaşım</title>
      <meta name="description" content="anasayfa description"/>
    </Helmet>
      <Body/>
    </>
  )
}

export default Home