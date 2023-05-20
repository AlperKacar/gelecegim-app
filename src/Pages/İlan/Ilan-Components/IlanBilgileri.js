import React from "react";
import { Container } from "../Ilan-ComponentCss/IlanBilgileriCss";
function IlanBilgileri() {
  return (
    <Container>
      <div className="main-div">
        <h3 className="fiyat">500 TL Aylık</h3>
        <h4 className="konum">
          <span className="il">Istanbul &nbsp;&nbsp;/</span>
          <span className="ilce"> Beylikdüzü </span>
        </h4>
        <ul className="bilgiler">
          <li>
            <strong className="kriterler">İlan No</strong>
            <span className="cevaplar ilan dengele">12381238</span>
          </li>
          <li>
            <strong className="kriterler">İlan Tarihi</strong>
            <span className="cevaplar dengele">15/10/2023</span>
          </li>
          <li>
            <strong className="kriterler">Taksit İmkanı?</strong>
            <span className="cevaplar dengele ">Evet</span>
          </li>
          <li>
            <strong className="kriterler">Eğitmen Sayısı</strong>
            <span className="cevaplar dengele">30</span>
          </li>
          <li>
            <strong className="kriterler">Ekipmanlar Kimden?</strong>
            <span className="cevaplar dengele">Kurs</span>
          </li>
          <li>
            <strong className="kriterler">Sertifika Veriliyor Mu?</strong>
            <span className="cevaplar dengele">Hayır</span>
          </li>
          <li>
            <strong className="kriterler">Başlangıç Tarihi</strong>
            <span className="cevaplar dengele">15/06/2023</span>
          </li>
          <li>
            <strong className="kriterler">Bitiş Tarihi</strong>
            <span className="cevaplar dengele">22/02/2024</span>
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
