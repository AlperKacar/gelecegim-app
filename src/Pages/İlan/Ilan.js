import { Helmet } from "react-helmet";
import React, { useEffect, useState } from "react";
import Photo from "./Ilan-Components/Photo";
import { IlanMain } from "./IlanCss.js";
import KategoriFav from "./Ilan-Components/KategoriFav";
import { Link } from "react-router-dom";
import { ImStarFull, ImPrinter } from "react-icons/im";
import IlanBilgileri from "./Ilan-Components/IlanBilgileri";
import IlanSahibi from "./Ilan-Components/IlanSahibi";
import axios from "axios";
import { useParams } from "react-router-dom";
import IlanAciklama from "./Ilan-Components/IlanAciklama";
import LoadingTruck from "../../Shared/commonComponents/loading/LoadingTruck";
const Ilan = () => {
  const { ilan_baslik, ilan_no } = useParams();
  const [ilanDetay, setIlanDetay] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const IlanGetir = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/ilanver/singleIlan/${ilan_baslik}=${ilan_no}`
        );
        setIlanDetay(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    IlanGetir();
  }, [ilan_no, ilan_baslik]);

  if (loading) {
    return <LoadingTruck />;
  }

  if (!ilanDetay) {
    return <div>İlan bulunamadı.</div>;
  }
  return (
    <>
      <IlanMain>
        <Helmet>
          <title>İlan</title>
        </Helmet>
        <KategoriFav ilanDetay={ilanDetay} />
        <div className="container">
          <div className="baslik-div">
            <h1 className="baslik">{ilanDetay.baslik}</h1>
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
            <Photo ilanDetay={ilanDetay} />
            <IlanBilgileri ilanDetay={ilanDetay} />
            <IlanSahibi ilanDetay={ilanDetay} />
          </div>
          <div className="aciklama-div">
            <IlanAciklama ilanDetay={ilanDetay} />
          </div>
        </div>
      </IlanMain>
    </>
  );
};

export default Ilan;
