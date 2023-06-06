import React from 'react'
import { Helmet} from "react-helmet"
import Body from "../../Components/Body"
import ResSubBar from "../../Components/ResSubBar"
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
function KategoriHome() {
  return (
    <>
    <Helmet>
      <title>Geleceğim Kurum ve kurslara kolay ulaşım.</title>
      <meta name="description" content="anasayfa description"/>
    </Helmet>
    <Header/>
      <Body/>
      <ResSubBar/>
      <Footer/>
    </>
  )
}

export default KategoriHome