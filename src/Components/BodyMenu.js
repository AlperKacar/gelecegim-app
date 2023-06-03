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
          <Link className="ana-kategori">
            <strong>Eğitim</strong>
          </Link>
          <div className="egitim-icon-div">
            <IoBookSharp className="egitim-icon" />
          </div>
          <li className="egitim-li">
            <Link className="li-link">Kreş</Link>
          </li>
          <li className="egitim-li">
            <Link className="li-link">İlkokul-Ortaokul</Link>
          </li>
          <li className="egitim-li">
            <Link className="li-link">Lise</Link>
          </li>
          <li className="egitim-li">
            <Link className="li-link">Üniversite</Link>
          </li>
          <li className="egitim-li">
            <Link className="li-link">Yabancı Dil</Link>
          </li>
          <li className="egitim-li">
            <Link className="li-link">Bilgisayar</Link>
          </li>
          <li className="egitim-li">
            <Link className="li-link">Direksiyon</Link>
          </li>
          <li className="egitim-li">
            <Link className="li-link">Mesleki Dersler</Link>
          </li>
          <li className="egitim-li">
            <Link className="li-link">Özel Eğitim</Link>
          </li>
        </ul>
        <ul className="spor-ul">
          <Link className="ana-kategori">
            <strong>Spor</strong>
          </Link>
          <div className="spor-icon-div">
            <IoBasketballSharp className="spor-icon" />
          </div>
          <li className="spor-li">
            <Link className="li-link">Futbol</Link>
          </li>
          <li className="spor-li">
            <Link className="li-link">Basketbol</Link>
          </li>
          <li className="spor-li">
            <Link className="li-link">Voleybol</Link>
          </li>
          <li className="spor-li">
            <Link className="li-link">Hentbol</Link>
          </li>
          <li className="spor-li">
            <Link className="li-link">Fitness</Link>
          </li>
          <li className="spor-li">
            <Link className="li-link">Pilates</Link>
          </li>
          <li className="spor-li">
            <Link className="li-link">Dövüş Kulübü</Link>
          </li>
          <li className="spor-li">
            <Link className="li-link">Atletizm</Link>
          </li>
          <li className="spor-li">
            <Link className="li-link">Jimnastik</Link>
          </li>
          <li className="spor-li">
            <Link className="li-link">Yaz Okulları</Link>
          </li>
        </ul>
        <ul className="sanat-ul">
          <Link className="ana-kategori">
            <strong>Sanat</strong>
          </Link>
          <div className="sanat-icon-div">
            <BsPaletteFill className="sanat-icon" />
          </div>
          <li className="sanat-li">
            <Link className="li-link">Müzik&Enstrüman</Link>
          </li>
          <li className="sanat-li">
            <Link className="li-link">Tiyatro&Oyunculuk</Link>
          </li>
          <li className="sanat-li">
            <Link className="li-link">Fotoğrafçılık</Link>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default BodyMenu;
