import React from "react";
import { Container } from "../Ilan-ComponentCss/IlanBilgileriCss";




function IlanBilgileri(props) {
const ilce=props.ilanDetay.konum_ilce.charAt(0).toUpperCase()+ props.ilanDetay.konum_ilce.slice(1).toLowerCase()



  
  return (
    <Container>
      <div className="main-div">
        <h3 className="fiyat">{props.ilanDetay.ucret} TL</h3>
        <h4 className="konum">
          <span className="il">{props.ilanDetay.konum_il} &nbsp;&nbsp;/</span>
          <span className="ilce">{ilce}</span>
        </h4>
        <ul className="bilgiler">
          <li>
            <strong className="kriterler">İlan No</strong>
            <span className="cevaplar ilan dengele">{props.ilanDetay.ilan_no}</span>
          </li>
          <li>
            <strong className="kriterler">İlan Tarihi</strong>
            <span className="cevaplar dengele">{props.ilanDetay.ilan_tarihi}</span>
          </li>
          <li>
            <strong className="kriterler">Taksit İmkanı?</strong>
            <span className="cevaplar dengele ">{props.ilanDetay.taksit_imkani}</span>
          </li>
          <li>
            <strong className="kriterler">Eğitmen Sayısı</strong>
            <span className="cevaplar dengele">{props.ilanDetay.egitmen_sayisi}</span>
          </li>
         
          <li>
            <strong className="kriterler">Sertifika Veriliyor Mu?</strong>
            <span className="cevaplar dengele">{props.ilanDetay.sertifika}</span>
          </li>
          <li>
            <strong className="kriterler">Başlangıç Tarihi</strong>
            <span className="cevaplar dengele">{props.ilanDetay.kurs_baslama_tarihi}</span>
          </li>
          <li>
            <strong className="kriterler">Bitiş Tarihi</strong>
            <span className="cevaplar dengele">{props.ilanDetay.kurs_bitirme_tarihi}</span>
          </li>
          <li>
            <strong className="kriterler">Deneme</strong>
            <span className="cevaplar dengele">12381238</span>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default IlanBilgileri;
