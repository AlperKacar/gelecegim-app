import React from "react";
import { Link} from "react-router-dom";
import logosrc from "../images/revize3.png";
import {Head} from "./ComponentCss/HeaderCss"
import Search from "./Search"

function Header() {
  return (
    <Head>
      <div className="Navbar">
        
        <img className="Logom" src={logosrc} alt="selam" />
        
        <Search/>
        <ul>
        <Link className="navLink pr-2" to="auth/login">Giriş Yap</Link>
        
        <Link className="navLink border"to="auth/signup">Hesap Aç</Link>
        </ul>
        <button className="kurum-kayit" name="Kurum Kaydı" href="/">Kurum Kaydı</button>
        
      </div>
    </Head>
    
    
  );
} 
export default Header;
