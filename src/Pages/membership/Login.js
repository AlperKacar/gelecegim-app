import { Helmet} from "react-helmet"
import Input from "../../Components/Input";
import { useState } from "react";
import { LoginDiv } from "./Logincss";
import {AiFillFacebook} from "react-icons/ai"
import { useDispatch } from "react-redux";
import { setUser } from "../../store/auth";
import {useNavigate, useLocation} from "react-router-dom"
import { Form,Button} from 'antd';

function Login() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const [form] = Form.useForm();
  
  const[email,setEmail] =useState ("")
  const[password,setPassword] =useState ("")

  

 const handleSubmit = e => 
 {e.preventDefault()
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
              <a href="/" className="img-logo"/>
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
                    <Input value={email} label="E-posta" onChange={e => setEmail(e.target.value)}/>
                  </Form.Item>
                  <Form.Item
                  name="password"
                   rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input className="form-input" type="password" value={password} label="Password" onChange={e => setPassword(e.target.value)}/>
        
                </Form.Item>
                <Form.Item 
                className="Form-button"
                shouldUpdate>
                  {() => (
                    <Button
                    className="Button"
                    onClick={handleSubmit}
                      type="primary"
                      disabled={
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
              <a href="#" className="Facebook-login">
                <AiFillFacebook size={20}/>
                Login with Facebook
              </a>
              <a href="forgotPassword" className="Forgot-password">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="Sign-up-boyut">
            <div >
              <p>Don't have an account?
                <a href="signup" className="signup-login">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
          </Form>    
    </LoginDiv>
  )
}

export default Login