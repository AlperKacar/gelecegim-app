import { Helmet} from "react-helmet"
import InputValidation from "../../Components/InputValidation";
import { useState } from "react";
import { LoginDiv } from "./Logincss";
import {AiFillFacebook} from "react-icons/ai"
import logosrc from "../../images/revize3.png";
import {
  Button,
  Form,
  Checkbox
} from 'antd';


function Signup() {

  const [form] = Form.useForm();
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [passwordone, setPasswordone] = useState('')
  const [passwordtwo, setPasswordtwo] = useState('')
  const [disabled, setDisabled] = useState(false);
  
  const toggleDisable = () => {
    setDisabled(!disabled);
  };
  
  return (
    <LoginDiv>
      <Helmet>
        <title>Signup</title>
      </Helmet>
      <Form
        form={form}
        name="dynamic_rule"
        >
        <div className="Login" >
          <div className="Login-boyut">
            <div className="Singup-boyut">
              <img src={logosrc} href="/" className="img-logo"/>
                <div className="Input-div">
                  <div className="Input-div-row">
                    <Form.Item
                      name="name"
                      rules={[
                          { 
                            required: true, 
                            message: 'Lütfen adınızı giriniz!', whitespace: true 
                          }
                        ]}
                      >
                      <InputValidation type="text" className="form-input"  value={name} label="İsim" onChange={e => setName(e.target.value)}/>
                    </Form.Item>
                    <Form.Item
                      name="surname"
                      rules={[
                        { 
                          required: true, 
                          message: 'Lütfen soyisim giriniz!', whitespace: true 
                        }
                      ]}
                      >
                      <InputValidation type="text" className="form-input"  value={surname} label="Soyisim" onChange={e => setSurname(e.target.value)}/>
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
                        <InputValidation value={email} className="form-input"  label="E-posta" onChange={e => setEmail(e.target.value)}/>
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
                      <InputValidation className="form-input" type="password" value={passwordone} label="Password" onChange={e => setPasswordone(e.target.value)}/>
                    </Form.Item>
                    <Form.Item
                      name="confirm"
                      dependencies={['password']}
                      rules=  {[
                        {
                          required: true,
                          message: 'Lütfen şifrenizi doğrulayınız!',
                        },
                          ({ getFieldValue }) =>
                          ({
                            validator(_, value)
                              {
                                if (!value || getFieldValue('password') === value)
                                  {
                                    return Promise.resolve();
                                  }
                                return Promise.reject(new Error('Girdiğiniz iki şifre uyuşmuyor!'));
                              },
                          }),
                      ]}
                      >
                      <InputValidation type="password" className="form-input"  value={passwordtwo} label="Şifreyi Onayla" onChange={e => setPasswordtwo(e.target.value)}/>
                    </Form.Item>       
                    <Checkbox  className="form-input" onClick={toggleDisable}>
                      Kuralları okudum kabul ediyorum.
                    </Checkbox>
                    <Form.Item 
                      className="Form-button"
                      shouldUpdate>
                        {() => (
                          <Button
                            className="Button"
                            type="primary"
                            disabled=
                              {
                                !form.isFieldsTouched(true) ||
                                !!form.getFieldsError().filter(({ errors }) => errors.length).length ||
                                !!!disabled
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