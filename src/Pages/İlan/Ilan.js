import { Helmet } from "react-helmet";
import React from "react";
import Photo from "./Ilan-Components/Photo";
import { IlanMain } from "./IlanCss.js";
import KategoriFav from "./Ilan-Components/KategoriFav";
import { Link } from "react-router-dom";
import { ImStarFull, ImPrinter } from "react-icons/im";
import IlanBilgileri from "./Ilan-Components/IlanBilgileri";
import IlanSahibi from "./Ilan-Components/IlanSahibi";

function Ilan() {
  return (
    <IlanMain>
      <Helmet>
        <title>İlan</title>
      </Helmet>
      <KategoriFav />
      <div className="container">
        <div className="baslik-div">
          <h1 className="baslik">34131</h1>
          <ul className="baslik-yani">
            <li className="fav-ekle">
              <Link to="/" className="ilan-link">
                <ImStarFull className="yildiz-icon" />
                Favorilerime Ekle
              </Link>
              {/*  <Link to="/" className="ilan-link-disabled">Favorilerimden Çıkar</Link>*/}
            </li>
            <li className="yazdir">
              <Link to="/" className="ilan-link">
                <ImPrinter className="yazdir-icon" />
                Yazdır
              </Link>
            </li>
            <li className="sosyal-medya">
              <Link to="/" className="ilan-link">
                Paylaş
              </Link>
            </li>
          </ul>
        </div>
        <div className="foto-bilgi-hizala">
          <Photo />
          <IlanBilgileri />
          <IlanSahibi />
        </div>
      </div>
    </IlanMain>
  );
}
export default Ilan;
