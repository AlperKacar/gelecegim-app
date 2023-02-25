import React from "react";
import { Link } from "react-router-dom";
import {Foot} from "./ComponentCss/FooterCss"
export default function Footer() {
  return (
    
      <Foot>
       
        <div className="container">
          <div className="row">
        <ul className="footer-ul">
          <h5 className="footer-kategori">Kurumsal</h5>
          <li><Link className="footer-links" to="">Hakkımızda</Link></li>
          <li><Link className="footer-links"to="">Sürdürülebilirlik</Link></li>
          <li><Link className="footer-links"to="">İnsan Kaynakları</Link></li>
          <li><Link className="footer-links"to="">Haberler</Link></li>
          <li><Link className="footer-links"to="">İletişim</Link></li>
        </ul>
        <ul className="footer-ul">
          <h5 className="footer-kategori">Hizmetlerimiz</h5>
          <li><Link className="footer-links"to="">Doping</Link></li>
          <li><Link className="footer-links"to="">S-param güvende</Link></li>
          <li><Link className="footer-links"to="">Güvenli e-Ticaret(Get)</Link></li>
          <li><Link className="footer-links"to="">Toplu Ürün Girişi</Link></li>
          <li><Link className="footer-links"to="">Reklam</Link></li>
          <li><Link className="footer-links"to="">Geleceğim Doğal Reklam</Link></li>
          <li><Link className="footer-links"to="">Mobil</Link></li>
        </ul>
        <ul className="footer-ul">
          <h5 className="footer-kategori">Kurumlar</h5>
          <li><Link className="footer-links" to="">Neden Kurumlar?</Link></li>
          <li><Link className="footer-links" to="/auth/kayit/kurumsal">Kurum Hesabı Açmak İstiyorum</Link></li>
        </ul>
        <ul className="footer-ul">
          <h5 className="footer-kategori">Gizlilik Ve Kullanım</h5>
          <li><Link className="footer-links"to="">Güvenli Alışverişin İpuçları</Link></li>
          <li><Link className="footer-links"to="">Sözleşmeler ve Kurallar</Link></li>
          <li><Link className="footer-links"to="">Hesap Sözleşmesi</Link></li>
          <li><Link className="footer-links"to="">Kullanım Koşulları</Link></li>
          <li><Link className="footer-links"to="">Site Haritası</Link></li>
          <li><Link className="footer-links"to="">Kişisel Verilerin Korunması</Link></li>
          <li><Link className="footer-links"to="">Yardım ve İşlem Rehberi</Link></li>
        </ul>
        <ul className="footer-ul">
          <h5 className="footer-kategori"to="">Bizi Takip Edin</h5>
          <li><Link className="footer-links"to="">Facebook</Link></li>
          <li><Link className="footer-links"to="">Twitter</Link></li>
          <li><Link className="footer-links"to="">Linkedin</Link></li>
          <li><Link className="footer-links"to="">İnstagram</Link></li>
          <li><Link className="footer-links"to="">Youtube</Link></li>
        </ul>
        </div>
       </div>
      </Foot>
    
  );
}
