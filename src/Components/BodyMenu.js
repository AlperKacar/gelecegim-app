import React from "react";
import { Container } from "./ComponentCss/BodyMenuCss";
import { Link } from "react-router-dom";
import { IoBasketballSharp } from "react-icons/io5";
import { BsPaletteFill } from "react-icons/bs";
import { IoBookSharp } from "react-icons/io5";
function BodyMenu() {
  return (
    <Container>
      <div className="uiBox">
        <ul className="egitim-ul">
          <Link to={`/kategori/egitim`} className="ana-kategori">
            <strong>Eğitim</strong>
          </Link>
          <div className="egitim-icon-div">
            <IoBookSharp className="egitim-icon" />
          </div>
          <li className="egitim-li">
            <Link to={`/kategori/egitim/alt_kategori/kreş`} className="li-link">Kreş</Link>
          </li>
          <li className="egitim-li">
            <Link to={`/kategori/egitim/alt_kategori/İlkokul-Ortaokul`} className="li-link">İlkokul-Ortaokul</Link>
          </li>
          <li className="egitim-li">
            <Link to={`/kategori/egitim/alt_kategori/lise`} className="li-link">Lise</Link>
          </li>
          <li className="egitim-li">
            <Link to={`/kategori/egitim/alt_kategori/Üniversite`} className="li-link">Üniversite</Link>
          </li>
          <li className="egitim-li">
            <Link to={`/kategori/egitim/alt_kategori/Yabancı-Dil`} className="li-link">Yabancı Dil</Link>
          </li>
          <li className="egitim-li">
            <Link to={`/kategori/egitim/alt_kategori/Bilgisayar`} className="li-link">Bilgisayar</Link>
          </li>
          <li className="egitim-li">
            <Link to={`/kategori/egitim/alt_kategori/Direksiyon`} className="li-link">Direksiyon</Link>
          </li>
          <li className="egitim-li">
            <Link to={`/kategori/egitim/alt_kategori/Mesleki Dersler`} className="li-link">Mesleki Dersler</Link>
          </li>
          <li className="egitim-li">
            <Link to={`/kategori/egitim/alt_kategori/Özel-Eğitim`} className="li-link">Özel Eğitim</Link>
          </li>
        </ul>
        <ul className="spor-ul">
          <Link to={`/kategori/spor`} className="ana-kategori">
            <strong>Spor</strong>
          </Link>
          <div className="spor-icon-div">
            <IoBasketballSharp className="spor-icon" />
          </div>
          <li className="spor-li">
            <Link to={`/kategori/spor/alt_kategori/Futbol`} className="li-link">Futbol</Link>
          </li>
          <li className="spor-li">
            <Link to={`/kategori/spor/alt_kategori/Basketbol`} className="li-link">Basketbol</Link>
          </li>
          <li className="spor-li">
            <Link to={`/kategori/spor/alt_kategori/Voleybol`} className="li-link">Voleybol</Link>
          </li>
          <li className="spor-li">
            <Link to={`/kategori/spor/alt_kategori/Hentbol`} className="li-link">Hentbol</Link>
          </li>
          <li className="spor-li">
            <Link to={`/kategori/spor/alt_kategori/Fitness`} className="li-link">Fitness</Link>
          </li>
          <li className="spor-li">
            <Link to={`/kategori/spor/alt_kategori/Pilates`} className="li-link">Pilates</Link>
          </li>
          <li className="spor-li">
            <Link to={`/kategori/spor/alt_kategori/Dövüş-Kulübü`} className="li-link">Dövüş Kulübü</Link>
          </li>
          <li className="spor-li">
            <Link to={`/kategori/spor/alt_kategori/Atletizm`} className="li-link">Atletizm</Link>
          </li>
          <li className="spor-li">
            <Link to={`/kategori/spor/alt_kategori/Jimnastik`} className="li-link">Jimnastik</Link>
          </li>
          <li className="spor-li">
            <Link to={`/kategori/spor/alt_kategori/Yaz-Okulları`} className="li-link">Yaz Okulları</Link>
          </li>
        </ul>
        <ul className="sanat-ul">
          <Link to={`/kategori/sanat`} className="ana-kategori">
            <strong>Sanat</strong>
          </Link>
          <div className="sanat-icon-div">
            <BsPaletteFill className="sanat-icon" />
          </div>
          <li className="sanat-li">
            <Link to={`/kategori/sanat/alt_kategori/Müzik-Enstrüman`} className="li-link">Müzik&Enstrüman</Link>
          </li>
          <li className="sanat-li">
            <Link to={`/kategori/sanat/alt_kategori/Tiyatro-Oyunculuk`} className="li-link">Tiyatro&Oyunculuk</Link>
          </li>
          <li className="sanat-li">
            <Link to={`/kategori/sanat/alt_kategori/Fotoğrafçılık`} className="li-link">Fotoğrafçılık</Link>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default BodyMenu;
