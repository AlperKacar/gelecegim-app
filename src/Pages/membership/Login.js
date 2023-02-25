import { Helmet} from "react-helmet"
import InputValidation from "../../Components/InputValidation";
import { useState } from "react";
import { LoginDiv } from "./Logincss";
import {AiFillFacebook} from "react-icons/ai"
import { useDispatch } from "react-redux";
import { setUser } from "../../store/auth";
import {useNavigate, useLocation, Link} from "react-router-dom"
import { Form,Button} from 'antd';
import logosrc from "../../images/revize3.png";

function Login() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const [form] = Form.useForm();
  
  const[email,setEmail] =useState ("")
  const[password,setPassword] =useState ("")

  

 const handleSubmit = e => 
    {
      e.preventDefault()
      dispatch(setUser({
      email,password
      }))
      navigate(location.state?.return_url || '/', {
      replace: true
    })}


  return (
    <LoginDiv>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Form 
        form={form}
        name="normal_login"
        initialValues={{ remember: true }} 
        >
        <div className="Login">
          <div className="Login-boyut"> 
            <Link  to="/">
              <img src={logosrc} className="img-logo" alt="logo"/>
            </Link>
            <div className="Input-div">
              <Form.Item
                name="email"
                rules={[
                {
                  type: 'email',
                  message: 'Geçerli E-posta giriniz!',
                },
                {
                  required: true,
                  message: 'Lütfen E-postanızı giriniz!',
                },
                ]}
                >
                <InputValidation value={email} label="E-posta" onChange={e => setEmail(e.target.value)}/>
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                {
                  required: true,
                  message: 'Lütfen şifrenizi girin!',
                },
                ]}
                >
                  <InputValidation className="form-input" type="password" value={password} label="Şifre" onChange={e => setPassword(e.target.value)}/>
        
              </Form.Item>
                <Form.Item 
                  className="Form-button"
                  shouldUpdate
                  >
                    {() => (
                      <Button
                        className="Button"
                        onClick={handleSubmit}
                        type="primary"
                        disabled=
                          {
                            !form.isFieldsTouched(true) ||
                            !!form.getFieldsError().filter(({ errors }) => errors.length).length
                          }
                        >
                          <a>Log in</a>
                      </Button>
                    )}
                </Form.Item>
            </div>
                  <div className="Or-div">
                    <div className="Or-div-div"/>
                      <span className="Or-span">OR</span>
                    <div className="Or-div-div"/>
                  </div>
                  <Link to="/" className="Facebook-login">
                    <AiFillFacebook size={20}/>
                    Login with Facebook
                  </Link>
                  <Link to="/auth/forgotPassword" className="Forgot-password">
                    Forgot password?
                  </Link>
          </div>
        </div>
            <div className="Sign-up-boyut">
              <div >
                <p>Don't have an account?
                  <Link to="/auth/signup" className="signup-login">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
      </Form>
    </LoginDiv>
  )
}

export default Login