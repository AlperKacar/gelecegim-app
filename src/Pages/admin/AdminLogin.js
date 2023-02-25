import { Helmet} from "react-helmet"
import { Formik, Form} from 'formik';
import InputValidation from "../../Components/InputValidation";
import { useState } from "react";
import { LoginDiv } from "../membership/Logincss";


function AdminLogin() {

  
  const[email,setEmail] =useState ("")
  const[password,setPassword] =useState ("")
  const enable = email && password
 
 
 



  return (
    <LoginDiv>
      <Helmet>
        <title>AdminLogin</title>
      </Helmet>
      <Formik
      initialValues={{
        email:'', 
        password:''
      }}

      >
       {({}) => (
         <Form>
          <div className="Login" >
            <div className="Login-boyut">
              <a href="login" className="img-logo"/>
              <div className="Input-div">
                <InputValidation value={email} label="E-posta" onChange={e => setEmail(e.target.value)}/>
                <InputValidation type="password" value={password} label="Şifre" onChange={e => setPassword(e.target.value)}/>
                <button type="submit" disabled={!enable} className="Button">Login</button>
              </div>
              <a href="forgotPassword" className="Forgot-password">
                Forgot password?
              </a>
            </div>
          </div>
         </Form>
       )}
      </Formik>
    </LoginDiv>
  )
}

export default AdminLogin