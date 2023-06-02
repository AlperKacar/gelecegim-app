import React from "react";
import { IlanSahibiDiv } from "../Ilan-ComponentCss/IlanSahibiCss";
import { Link } from "react-router-dom";
import { HiShieldCheck } from "react-icons/hi";
function IlanSahibi(props) {
const isim=props.ilanDetay.olusturan_ad_soyad
const tel=props.ilanDetay.olusturan_tel
const tarih=props.ilanDetay.olusturan_reg_date
  return (
    <IlanSahibiDiv>
      <div className="main">
        <div className="ic-div">
          <div className="ad-soyad">{isim}</div>
          <div className="kayit-tarihi">
            Hesap Açma Tarihi: <span>{tarih}</span>
          </div>
          <div className="iletisim">
            <strong className="hangi">Cep</strong>
            <span className="bilgi">{tel}</span>
            </div>
            <div className="mesaj-gonder">
              <Link to="/" className="mesaj">Mesaj Gönder</Link>
            </div>
            
        </div>
        
      </div>
      <div className="uyari"><HiShieldCheck className="icon"/>
              <h6 className="uyari-baslik">Güvenlik İpuçları</h6>
              <p className="uyari-p">İlgilendiğiniz aracı görmeden kapora ödemeyin, para göndermeyin.</p>
              </div>
    </IlanSahibiDiv>
  );
}

export default IlanSahibi;
