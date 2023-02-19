import React from "react";
import { Link} from "react-router-dom";
import logosrc from "../images/revize3.png";
import {Head} from "./ComponentCss/HeaderCss"
import Search from "./Search"
import { useDispatch } from "react-redux";
import { setUser } from "../store/auth";
import {useNavigate, useLocation} from "react-router-dom"
import { useState } from "react";

function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const [state,setState] = useState(false)

  const logoutHandel = () => {
  dispatch(setUser(false))
  navigate(location.state?.return_url || '/', {
    replace: true
  })
} 

  return (
    <Head>
    <div className="Navbar">
    <img className="Logom" src={logosrc} alt="selam" />
        <Search/>
        {
          //giriş çıkış görseli 
        state 
        ? 
        //dive display flex   aline item center 
        //çıkış butonu iconlu menü profile git profili düzenle çıkış yap
        <div >
          
          <ul>
            <Link className="navLink pr-2" to="auth/login">Giriş Yap</Link>
            <Link className="navLink border"to="auth/signup">Hesap Aç</Link>
          </ul> 
          <button className="kurum-kayit" name="Kurum Kaydı" href="/">Kurum Kaydı</button>
        </div>
        : 
        <div onClick={() => setState(state =>!state)}>
        <button onClick={logoutHandel} className="kurum-kayit" name="Kurum Kaydı" href="/">Çıkış</button>

        </div>
      }
       
      </div>
    </Head>
    
    
  );
}

export default Header;