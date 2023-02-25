import React from "react";
import {Foot} from "./ComponentCss/FooterCss"
export default function Footer() {
  return (
    
      <Foot>
       
        <div className="container">
          <div className="row">
        <ul className="footer-ul">
          <h5 className="footer-kategori">Kurumsal</h5>
          <li><a className="footer-links">Hakkımızda</a></li>
          <li><a className="footer-links">Sürdürülebilirlik</a></li>
          <li><a className="footer-links">İnsan Kaynakları</a></li>
          <li><a className="footer-links">Haberler</a></li>
          <li><a className="footer-links">İletişim</a></li>
        </ul>
        <ul className="footer-ul">
          <h5 className="footer-kategori">Hizmetlerimiz</h5>
          <li><a className="footer-links">Doping</a></li>
          <li><a className="footer-links">S-param güvende</a></li>
          <li><a className="footer-links">Güvenli e-Ticaret(Get)</a></li>
          <li><a className="footer-links">Toplu Ürün Girişi</a></li>
          <li><a className="footer-links">Reklam</a></li>
          <li><a className="footer-links">Geleceğim Doğal Reklam</a></li>
          <li><a className="footer-links">Mobil</a></li>
        </ul>
        <ul className="footer-ul">
          <h5 className="footer-kategori">Kurumlar</h5>
          <li><a className="footer-links" href="">Neden Kurumlar?</a></li>
          <li><a className="footer-links" href="/auth/kayit/kurumsal">Kurum Hesabı Açmak İstiyorum</a></li>
        </ul>
        <ul className="footer-ul">
          <h5 className="footer-kategori">Gizlilik Ve Kullanım</h5>
          <li><a className="footer-links">Güvenli Alışverişin İpuçları</a></li>
          <li><a className="footer-links">Sözleşmeler ve Kurallar</a></li>
          <li><a className="footer-links">Hesap Sözleşmesi</a></li>
          <li><a className="footer-links">Kullanım Koşulları</a></li>
          <li><a className="footer-links">Site Haritası</a></li>
          <li><a className="footer-links">Kişisel Verilerin Korunması</a></li>
          <li><a className="footer-links">Yardım ve İşlem Rehberi</a></li>
        </ul>
        <ul className="footer-ul">
          <h5 className="footer-kategori">Bizi Takip Edin</h5>
          <li><a className="footer-links">Facebook</a></li>
          <li><a className="footer-links">Twitter</a></li>
          <li><a className="footer-links">Linkedin</a></li>
          <li><a className="footer-links">İnstagram</a></li>
          <li><a className="footer-links">Youtube</a></li>
        </ul>
        </div>
       </div>
      </Foot>
    
  );
}
