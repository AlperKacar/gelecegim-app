import React from "react";
import logosrc from "../images/Gelecegim_Logo.png";
import Ara from "./Search";
import headerCss from "./ComponentCss/HeaderCss";

function Header() {
  return (
    <headerCss.Head>
      <headerCss.Navbar>
        <headerCss.Logom src={logosrc} alt="selam" />

        <Ara />

        <ul>
          <headerCss.Li>Giriş Yap</headerCss.Li>

          <headerCss.Li>Hesap Aç</headerCss.Li>
        </ul>
      </headerCss.Navbar>
    </headerCss.Head>
  );
}
export default Header;
