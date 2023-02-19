import React from "react";
import { Link} from "react-router-dom";
import logosrc from "../images/revize3.png";
import HeaderCss from "./ComponentCss/HeaderCss"
import Search from "./Search"
import { setUser } from "../store/auth";
import { useDispatch } from "react-redux";
import {useNavigate, useLocation} from "react-router-dom"




function Header() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()


  const logoutHandel = () => {
  dispatch(setUser(false))
  navigate(location.state?.return_url || '/', {
    replace: true
  })
} 


  return (
    <HeaderCss.Head>
      <HeaderCss.Navbar>
        
        <HeaderCss.Logom src={logosrc} alt="selam" />
        
        <Search/>
        <ul>
        <Link className="navLink" to="auth/login">Giriş Yap</Link>

        <Link className="navLink"to="auth/signup">Hesap Aç</Link>
        </ul>
        <button onClick={logoutHandel}>çıkış yap</button>
      </HeaderCss.Navbar>
    </HeaderCss.Head>
    
    
  );
}
export default Header;
