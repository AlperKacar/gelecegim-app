import { Helmet} from "react-helmet"
import Input from "../../Components/Input";
import { useState } from "react";
import { LoginDiv } from "./Logincss";
import {AiFillFacebook} from "react-icons/ai"
import { useDispatch } from "react-redux";
import { setUser } from "../../store/auth";
import {useNavigate, useLocation} from "react-router-dom"

function Login() {


  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  
  
  const[email,setEmail] =useState ("")
  const[password,setPassword] =useState ("")
  const enable = email && password
 
 
 
  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setUser({
      email,
      password
    }))
    navigate(location.state?.return_url || '/', {
      replace: true
    })
  } 




  return (
    <LoginDiv>
      <Helmet>
        <title>Login</title>
      </Helmet>
         <form  onSubmit={handleSubmit}>
          <div className="Login" >
            <div className="Login-boyut">
              <a href="login" className="img-logo"/>
              <div className="Input-div">
                <Input value={email} label="Email" onChange={e => setEmail(e.target.value)}/>
                <Input type="password" value={password} label="Password" onChange={e => setPassword(e.target.value)}/>
                <button type="submit" disabled={!enable} className="Button">Login</button>

              </div>
              
              <div className="Or-div">
                <div className="Or-div-div"/>
                  <span className="Or-span">OR</span>
                <div className="Or-div-div"/>
              </div>
              <a href="#" className="Facebook-login">
                <AiFillFacebook size={20}/>
                Log in with Facebook
              </a>
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

export default Login