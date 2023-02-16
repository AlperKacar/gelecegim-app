import React from "react";
import styled from "styled-components";
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
          <Li>Giriş Yap</Li>

          <Li>Hesap Aç</Li>
        </ul>
      </headerCss.Navbar>
    </headerCss.Head>
  );
}
export default Header;
