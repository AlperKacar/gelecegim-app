import { Helmet} from "react-helmet"
import Input from "../../Components/Input";
import { useState } from "react";
import { LoginDiv } from "./Logincss";
import Cheackbox from "../../Components/Checkbox";
import {AiFillFacebook} from "react-icons/ai"
import { useEffect } from "react";
import {
  Button,
  Form,
} from 'antd';

function Signup() {

  const [form] = Form.useForm();
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [passwordone, setPasswordone] = useState('')
  const [passwordtwo, setPasswordtwo] = useState('')
  const [checkbox, setCheackbox] = useState(true)


  return (
    <LoginDiv>
      <Helmet>
        <title>Signup</title>
      </Helmet>
      <Form
      form={form}>
          <div className="Login" >
            <div className="Login-boyut">
              <div className="Singup-boyut">
              <a href="login" className="img-logo"/>
              <div className="Input-div">
                <div className="Input-div-row">
                <Form.Item
                name="name"
                tooltip="What do you want others to call you?"
                rules={[{ required: true, message: 'Lütfen adınızı giriniz!', whitespace: true }]}
              >
                <Input type="text" className="form-input"  value={name} label="İsim" onChange={e => setName(e.target.value)}/>

              </Form.Item>
              <Form.Item
              name="surname"
              tooltip="What do you want others to call you?"
              rules={[{ required: true, message: 'Lütfen soyisim giriniz!', whitespace: true }]}
            >
              <Input type="text" className="form-input"  value={surname} label="Soyisim" onChange={e => setSurname(e.target.value)}/>
            </Form.Item>
                </div> 
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
                    <Input value={email} className="form-input"  label="E-posta" onChange={e => setEmail(e.target.value)}/>
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
                <Input className="form-input" type="password" value={passwordone} label="Password" onChange={e => setPasswordone(e.target.value)}/>
        
                </Form.Item>
                <Form.Item
                  name="confirm"
                  dependencies={['password']}
                  rules={[
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                      },
                    }),
                  ]}
                >
                  <Input type="password" className="form-input"  value={passwordtwo} label="Şifreyi Onayla" onChange={e => setPasswordtwo(e.target.value)}/>

                </Form.Item>
                <Cheackbox type="cheackbox"  Cheackbox={setCheackbox} value={checkbox} onChange={e => setCheackbox(e.target.value)}  label="Kuralları kabul ediyorum"/>
                <Form.Item 
                className="Form-button"
                shouldUpdate>
                  {() => (
                    <Button
                    className="Button"
                      type="primary"
                      disabled={
                        !form.isFieldsTouched(true) ||
                        !!form.getFieldsError().filter(({ errors }) => errors.length).length
                      }
                    >
                      <a>Kayıt Ol</a>
                    </Button>
                  )}
                </Form.Item>
              </div>
              <a href="#" className="Facebook-login">
                <AiFillFacebook size={20}/>
                Login with Facebook
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
          </Form>
    </LoginDiv>
  )
}

export default Signup