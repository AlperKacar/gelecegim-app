import { Helmet} from "react-helmet"
import { Formik, Form} from 'formik';
import Input from "../../Components/Input";
import { useState } from "react";
import { LoginDiv } from "./Logincss";
import {AiFillFacebook} from "react-icons/ai"


function Login() {
  const[email,setEmail] =useState ("")
  const[password,setPassword] =useState ("")
  return (
    <LoginDiv>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Formik
      initialValues={{
        email:'', 
        password:''
      }}

      >
       {({}) => (
         <Form>
          <div className="Login">
            <div className="Login-boyut">
              <img className="img-logo"/>
              <div className="Input-div">
                <Input value={email} label="E-posta" onChange={e => setEmail(e.target.value)}/>
                <Input value={password} label="Şifre" onChange={e => setPassword(e.target.value)}/>
              <button className="Button">Login</button>
              </div>
              <div className="Or-div">
                <div className="Or-div-div"/>
                  <span className="Or-span">OR</span>
                <div className="Or-div-div"/>
              </div>
              <a href="" className="Facebook-login">
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
         </Form>
       )}
      </Formik>
    </LoginDiv>
  )
}

export default Login