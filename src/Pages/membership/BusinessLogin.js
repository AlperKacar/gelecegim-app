import { Helmet} from "react-helmet"
import Input from "../../Components/Input";
import { useState } from "react";
import { LoginDiv } from "./Logincss";


function BusinessLogin() {

  
  
  const[email,setEmail] =useState ("")
  const[password,setPassword] =useState ("")
  const enable = email && password
 
 



  return (
    <LoginDiv>
      <Helmet>
        <title>KurumLogin</title>
      </Helmet>
      <form>
          <div className="Login" >
            <div className="Login-boyut">
              <a href="login" className="img-logo"/>
              <div className="Input-div">
                <Input value={email} label="E-posta" onChange={e => setEmail(e.target.value)}/>
                <Input type="password" value={password} label="Şifre" onChange={e => setPassword(e.target.value)}/>
                <button type="submit" disabled={!enable} className="Button">Login</button>
              </div>
              <a href="forgotPassword" className="Forgot-password">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="Sign-up-boyut">
            <div className="">
              <p>Don't have an account?
                <a href="signup" className="signup-login">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
          </form>
    </LoginDiv>
  )
}

export default BusinessLogin