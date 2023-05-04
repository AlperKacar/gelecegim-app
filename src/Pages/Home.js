import { Helmet} from "react-helmet"
import Body from "../Components/Body"
import ResSubBar from "../Components/ResSubBar"

function Home() {


  return (
    <>
    <Helmet>
      <title>Geleceğim Kurum ve kurslara kolay ulaşım.</title>
      <meta name="description" content="anasayfa description"/>
    </Helmet>
      <Body/>
      <ResSubBar/>
    </>
  )
}

export default Home