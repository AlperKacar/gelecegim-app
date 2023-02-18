import { Helmet} from "react-helmet"
import Input from "../../Components/Input";
import { useState } from "react";
import { LoginDiv } from "./Logincss";
import Cheackbox from "../../Components/Checkbox";
import {AiFillFacebook} from "react-icons/ai"
import { useEffect } from "react";

function Signup() {


  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [passwordone, setPasswordone] = useState('')
  const [passwordtwo, setPasswordtwo] = useState('')
  const [checkbox, setCheackbox] = useState(true)
  const [equal,setEqual] = useState(false)
  const Enable = equal && email && checkbox && name && surname

  useEffect (()=> {
    if (passwordone==passwordtwo ){
      if(passwordone == '' && passwordtwo == ''){
        setEqual(false)
      }
      else{
        setEqual(true)
      }
    }
    else{
      setEqual(false)
    }
  },[passwordone,passwordtwo])

  return (
    <LoginDiv>
      <Helmet>
        <title>Signup</title>
      </Helmet>
          <div className="Login" >
            <div className="Login-boyut">
              <div className="Singup-boyut">
              <a href="login" className="img-logo"/>
              <div className="Input-div">
                <div className="Input-div-row">
                  <Input value={name} label="İsim" onChange={e => setName(e.target.value)}/>
                  <Input value={surname} label="Soyisim" onChange={e => setSurname(e.target.value)}/>
                </div>
                <Input value={email} label="E-posta" onChange={e => setEmail(e.target.value)}/>
                <Input type="password" value={passwordone} label="Şifre" onChange={e => setPasswordone(e.target.value)}/>
                <Input type="password" value={passwordtwo} label="Şifre(Tekrar)" onChange={e => setPasswordtwo(e.target.value)}/>
                <Cheackbox type="cheackbox" Cheackbox={setCheackbox} value={checkbox} onChange={e => setCheackbox(e.target.value)}  label="Kuralları kabul ediyorum"/>
                <button type="submit" disabled={!Enable} className="Button">Login</button>
              </div>
              <a href="#" className="Facebook-login">
                <AiFillFacebook size={20}/>
                Log in with Facebook
              </a>
              </div>
            </div>
              <div className="Sign-up-boyut">
              <div >
                <p>Do you have an account? 
                  <a href="login" className="signup-login">
                    Login
                  </a>
                </p>
            </div>
          </div>
          </div>
    </LoginDiv>
  )
}

export default Signup