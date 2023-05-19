import React from "react";
import { IlanSahibiDiv } from "../Ilan-ComponentCss/IlanSahibiCss";
import { Link } from "react-router-dom";
import { HiShieldCheck } from "react-icons/hi";
function IlanSahibi() {
  return (
    <IlanSahibiDiv>
      <div className="main">
        <div className="ic-div">
          <div className="ad-soyad">Ertan Eracar</div>
          <div className="kayit-tarihi">
            Hesap Açma Tarihi: <span>15 Mart 2023</span>
          </div>
          <div className="iletisim">
            <strong className="hangi">Cep</strong>
            <span className="bilgi">05512312321</span>
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
