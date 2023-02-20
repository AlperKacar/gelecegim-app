import { Link, useNavigate, useLocation} from "react-router-dom";
import logosrc from "../images/revize3.png";
import {Head} from "./ComponentCss/HeaderCss"
import Search from "./Search"
import { useDispatch,useSelector } from "react-redux";
import { setUser } from "../store/auth";



function Header() {
  
  
  const user = useSelector(state => state.auth.user)
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
    <Head>
      <div className="Navbar">
      <img className="Logom" src={logosrc} alt="selam" />
      <Search/>
      {
      user 
      ? 
        <button onClick={logoutHandel} className="kurum-kayit" name="Kurum Kaydı" href="/">Çıkış</button>
      :
      <div > 
        <ul>
          <Link className="navLink pr-2" to="auth/login">Giriş Yap</Link>
          <Link className="navLink border"to="auth/signup">Hesap Aç</Link>
        </ul> 
        <button className="kurum-kayit" name="Kurum Kaydı"href="/">Kurum Kaydı</button>
      </div>
      }
      </div>
    </Head>
    
    
  );
}

export default Header;