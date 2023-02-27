import { Helmet} from "react-helmet"
import InputValidation from "../../Components/InputValidation";
import SelectValidation from "../../Components/SelectValidation";
import { useState } from "react";
import logosrc from "../../images/revize3.png";
import { BusinessSignupDiv } from "./BusinessSignupcss";
import {
  Button,
  Form,
  Checkbox,
  Radio
} from 'antd';
import { Link } from "react-router-dom";


function BusinessSignup() {



  const [form] = Form.useForm();
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [businessname, setBusinessname] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const[select,setSelect] = useState([
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
    }
  ])
  const [password, setPassword] = useState('')
  const [il, setİl] = useState([{"userId": 1,"id":1, "title": "Adana"}])
  const[ilce,setIlçe] =useState([{"userId": 1,"id":1,"title": "Aladağ"},{"userId": 1,"id":2,"title": "Alaadağ"}])
  const [value, setValue] = useState(1);
  const [tcno, setTcno] = useState('');
  const onChange = (e) => {
    setValue(e.target.value);
    setTcno(!tcno)
  };
  const [disabled, setDisabled] = useState(false);
  
  const toggleDisable = () => {
    setDisabled(!disabled);
  };
  return (<>
    <Helmet>
      <title>BusinessSignup</title>
    </Helmet>
    <BusinessSignupDiv>
    <div className="business-center-colum">
      <div className="header-container-without-background">
        <Link  to="/">
          <img src={logosrc} alt="icon" className="img-logo"/>
        </Link>
        <div className="corporate-info">
        <span >Kurumsal Çağrı Merkezi
        </span>
        <strong>0850 222 44 45</strong>

        </div>  
      </div>
      <div className="form-corporate">
        <div className="registration-corporate">
          <h3>Kurumsal Hesap Aç</h3>
          <Form
            // autoComplete="off"
            form={form}
            name="dynamic_rule"
            >
              <div className="form-container">
                <div className="left-section section-border">
                  <div className="split-form ">
                  <Form.Item
                        name="name"
                        rules={[
                            { 
                              required: true, 
                              message: 'Lütfen adınızı giriniz!', whitespace: true 
                            },
                            {
                              whitespace:true
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
                          },
                          {
                            whitespace:true
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
                            {
                              whitespace:true
                            }
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
                          {
                            whitespace:true
                          }
                        ]}
                        >
                        <InputValidation className="form-input" type="password" value={password} label="Password" onChange={e => setPassword(e.target.value)}/>
                      </Form.Item>
                      <Form.Item
                        name="phone"
                        rules={[
                          {
                            required: true,
                            message: 'Lütfen telefon numaranızı girin!',
                          },
                          {
                            whitespace:true
                          }
                        ]}
                        >
                        <InputValidation className="form-input" value={phone} label="Sabit Telefon" />
                      </Form.Item>

                      <Form.Item>
                    
                        <SelectValidation value={select}   label="Kurum Alanınız" onChange={e => setSelect(e.target.value)} />

                      </Form.Item>
                      </div>
                      <div className="right-section section-border">
                      <Form.Item >
                        <SelectValidation  value={il}   label="il" onChange={e => setİl(e.target.value)}/>
                      </Form.Item>
                      <div className="split-form ">
                      <Form.Item >
                        <SelectValidation  value={ilce}   label="İlçe"  onChange={e => setIlçe(e.target.value)}/>
                      </Form.Item>
                      <Form.Item >
                        <SelectValidation  value={select}   label="Mahalle" />
                      </Form.Item>
                      </div>
                      <label >İşletme Türü</label>
                      <div className="split-form ">
                      <Radio.Group
                      className="form-radio"
                      onChange={onChange} value={value}>
                        <Radio value={1}>Şahıs Şirketi</Radio>
                        <Radio value={2}>Limited veya Anonim Şirketi</Radio>
                      </Radio.Group>
                      </div>
                      <div className="split-form ">
                      <Form.Item >
                        <SelectValidation  value={select}   label="Vergi dairesi İli" onChange={e => setSelect(e.target.value)}/>
                      </Form.Item>
                      <Form.Item >
                        <SelectValidation  value={select}   label="Vergi dairesi" onChange={e => setSelect(e.target.value)}/>
                      </Form.Item>
                      </div>
                      <div className="split-form ">
                  <Form.Item
                        name="vergi no"
                        rules={[
                            { 
                              required: true, 
                              message: 'Lütfen adınızı giriniz!', whitespace: true 
                            },
                            {
                              whitespace:true
                            }
                          ]}
                        >
                        <InputValidation type="text" className="form-input"  value={name} label="Vergi Kimlik No" onChange={e => setName(e.target.value)}/>
                      </Form.Item>
                      <Form.Item
                        name="tcno"
                        rules={[
                          { 
                            required: true, 
                            message: 'Lütfen soyisim giriniz!', whitespace: true 
                          },
                          {
                            whitespace:true
                          }
                        ]}
                        >
                        <InputValidation type="text" className="form-input"  value={tcno} label="TC Kimlik No" onChange={e => setTcno(e.target.value)}/>
                      </Form.Item>
                  </div>
                </div>
              </div>
              <div className="form-extra-container">
                <div className="extra-text-wrapper">
                  <div className="kvkk">
                    <p>Bu sayfadaki bilgiler geleceğim.com hesabı ve fatura gönderimi dahil olmak üzere tüm bilgilendirmelerimiz için alınmaktadır.
                      Kişisel verilerin korunması hakkında detaylı bilgiye buradan ulaşabilirsiniz.</p>
                  </div>
                  <div className="eula-and-button">
                    <div >
                      <Checkbox onClick={toggleDisable}>
                        <Link to="/" className="eula-area">Kurumsal Hesap Sözleşmesi ve Ekleri'ni</Link>&nbsp;kabul ediyorum.
                      </Checkbox> 
                    </div>
                    <div className="sign-up-container ">
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
                                  <Link>Hesap Aç</Link>
                                </Button>
                              )}
                          </Form.Item>
                          <p className="redirect-to-login-register ">
                            Hesabın var mı?&nbsp;
                          <Link to="/auth/login" >Giriş Yap</Link>
                          </p>
                      </div>
                  </div>
                  
                
                </div>
                <p className="captcha-disclaimer ">
                  Bu site reCAPTCHA ile korunmaktadır. Google <Link to="https://policies.google.com/privacy">
                  Gizlilik Politikası</Link> ve <Link to="https://policies.google.com/terms">
                  Kullanım Koşulları</Link> geçerlidir.
                </p>
              </div>
          </Form>
        </div>
      </div>
      </div>
    </BusinessSignupDiv>
    </>
  )
}

export default BusinessSignup