import React from "react";
import { Link} from "react-router-dom";
import logosrc from "../images/revize3.png";
import HeaderCss from "./ComponentCss/HeaderCss"
import Search from "./Search"

function Header() {
  return (
    <HeaderCss.Head>
      <HeaderCss.Navbar>
        
        <HeaderCss.Logom src={logosrc} alt="selam" />
        
        <Search/>
        <ul>
        <Link className="navLink" to="auth/login">Giriş Yap</Link>

        <Link className="navLink"to="auth/signup">Hesap Aç</Link>
        </ul>
      </HeaderCss.Navbar>
    </HeaderCss.Head>
    
    
  );
}
export default Header;
