import { Helmet } from "react-helmet";
import InputValidation from "../../Components/InputValidation";
import SelectValidation from "../../Components/SelectValidation";
import { useState } from "react";
import logosrc from "../../images/revize3.png";
import { BusinessSignupDiv } from "./BusinessSignupcss";
import { Button, Form, Checkbox, Radio, message } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import IlcelerVd from "../../Components/IlcelerVd";

function BusinessSignup() {
  const [form] = Form.useForm();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  // const [businessname, setBusinessname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [select, setSelect] = useState("");
  const [password, setPassword] = useState("");
  const [il, setIl] = useState("");
  const [ilce, setIlce] = useState("");
  const [value, setValue] = useState(1);
  const [tcno, setTcno] = useState("");
  const [show, hide] = useState(true);
  const [vdil, setVdIl] = useState("");
  const [vdilce, setVdIlce] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
    hide(!show);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:3001/auth/signup", {
        email,
        password,
        name: name.charAt(0).toUpperCase() + name.slice(1),
        surname: surname.charAt(0).toUpperCase() + surname.slice(1),
      })
      .then((res) => {
        toast.success("Kayıt Başarılı!");
      })
      .catch((err) => {
        toast.error("email adresi kayıtlıdır.");
        console.log(err.response);
      });
  };
  const enable = il;
  const vgd = vdil;
  const [disabled, setDisabled] = useState(false);
  const onFinish = () => {
    setTimeout(() => {
      message.success("Login success");
    }, 1000);
  };
  const toggleDisable = () => {
    setDisabled(!disabled);
  };
  return (
    <>
      <Helmet>
        <title>BusinessSignup</title>
      </Helmet>
      <BusinessSignupDiv>
        <div className="business-center-colum">
          <div className="header-container-without-background">
            <Link to="/">
              <img src={logosrc} alt="icon" className="img-logo" />
            </Link>
            <div className="corporate-info">
              <span>Kurumsal Çağrı Merkezi</span>
              <strong className="phone">0850 *** ** **</strong>
            </div>
          </div>
          <div className="form-corporate">
            <div className="registration-corporate">
              <h3>Kurumsal Hesap Aç</h3>
              <Form
                // autoComplete="off"
                onFinish={onFinish}
                form={form}
                name="dynamic_rule"
              >
                <div className="form-container">
                  <div className="left-section section-border">
                    <div className="split-form ">
                      <Form.Item
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        rules={[
                          {
                            required: true,
                            message: "Lütfen adınızı giriniz!",
                            whitespace: true,
                          },
                          {
                            whitespace: true,
                            message: "Boşluk içeremez!",
                          },
                        ]}
                      >
                        <InputValidation
                          type="text"
                          className="form-input"
                          value={name}
                          label="İsim"
                        />
                      </Form.Item>
                      <Form.Item
                        name="surname"
                        rules={[
                          {
                            required: true,
                            message: "Lütfen soyisim giriniz!",
                            whitespace: true,
                          },
                          {
                            whitespace: true,
                            message: "Boşluk içeremez!",
                          },
                        ]}
                      >
                        <InputValidation
                          type="text"
                          className="form-input"
                          value={surname}
                          label="Soyisim"
                          onChange={(e) => setSurname(e.target.value)}
                        />
                      </Form.Item>
                    </div>
                    <Form.Item
                      name="email"
                      addonAfter="0("
                      rules={[
                        {
                          type: "email",
                          message: "Geçerli E-posta giriniz!",
                        },
                        {
                          required: true,
                          message: "Lütfen E-postanızı giriniz!",
                        },
                      ]}
                    >
                      <InputValidation
                        value={email}
                        className="form-input"
                        label="E-posta"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Lütfen şifrenizi girin!",
                        },
                        {
                          whitespace: true,
                          message: "Boşluk içeremez!",
                        },
                      ]}
                    >
                      <InputValidation
                        className="form-input"
                        type="password"
                        value={password}
                        label="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Item>
                    <Form.Item
                      name="phone"
                      rules={[
                        {
                          required: true,
                          message: "Lütfen telefon numaranızı girin!",
                        },
                        {
                          whitespace: true,
                          message: "Boşluk içeremez!",
                        },
                      ]}
                    >
                      <InputValidation
                        className="form-input phone"
                        value={phone}
                        label="Sabit Telefon"
                      />
                    </Form.Item>

                    <Form.Item
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <SelectValidation
                        value={select}
                        getir="Kurum"
                        label="Kurum Alanınız"
                        onChange={(e) => setSelect(e.target.value)}
                      />
                    </Form.Item>
                  </div>
                  <div className="right-section section-border">
                    <div className="split-form ">
                      <Form.Item>
                        <SelectValidation
                          value={il}
                          label="İller"
                          getir="Iller"
                          onChange={(o) => setIl(o)}
                        />
                      </Form.Item>
                      <Form.Item>
                        <IlcelerVd
                          disabled={!enable}
                          value={ilce}
                          il={il}
                          getir="Ilceler"
                          label="İlçeler"
                          onChange={(o) => setIlce(o)}
                        />
                      </Form.Item>
                    </div>
                    <label>İşletme Türü</label>
                    <div className="split-form ">
                      <Radio.Group
                        className="form-radio"
                        onChange={onChange}
                        value={value}
                      >
                        <Radio value={1}>Şahıs Şirketi</Radio>
                        <Radio value={2}>Limited veya Anonim Şirketi</Radio>
                      </Radio.Group>
                    </div>
                    <div className="split-form ">
                      <Form.Item>
                        <SelectValidation
                          value={vdil}
                          label="Vergi Dairesi İli"
                          getir="vdIl"
                          onChange={(e) => setVdIl(e)}
                        />
                      </Form.Item>
                      <Form.Item>
                        <IlcelerVd
                          value={vdilce}
                          il={vdil}
                          disabled={!vgd}
                          label="Vergi Dairesi Adı"
                          getir="vdAd"
                          onChange={(e) => setVdIlce(e)}
                        />
                      </Form.Item>
                    </div>
                    <div className="split-form ">
                      <Form.Item
                        name="vergi no"
                        rules={[
                          {
                            required: true,
                            message: "Lütfen adınızı giriniz!",
                            whitespace: true,
                          },
                          {
                            whitespace: true,
                            message: "Boşluk içeremez!",
                          },
                        ]}
                      >
                        <InputValidation
                          type="text"
                          className="form-input"
                          value={name}
                          label="Vergi Kimlik No"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </Form.Item>
                      <Form.Item
                        name="tcno"
                        rules={[
                          {
                            required: true,
                            message: "Lütfen soyisim giriniz!",
                            whitespace: true,
                          },
                          {
                            whitespace: true,
                            message: "Boşluk içeremez!",
                          },
                        ]}
                      >
                        <InputValidation
                          type="text"
                          disabled={!show}
                          className="form-input"
                          value={tcno}
                          label="TC Kimlik No"
                          onChange={(e) => setTcno(e.target.value)}
                        />
                      </Form.Item>
                    </div>
                  </div>
                </div>
                <div className="form-extra-container">
                  <div className="extra-text-wrapper">
                    <div className="kvkk">
                      <p>
                        Bu sayfadaki bilgiler geleceğim.com hesabı ve fatura
                        gönderimi dahil olmak üzere tüm bilgilendirmelerimiz
                        için alınmaktadır. Kişisel verilerin korunması hakkında
                        detaylı bilgiye buradan ulaşabilirsiniz.
                      </p>
                    </div>
                    <div className="eula-and-button">
                      <div>
                        <Checkbox onClick={toggleDisable}>
                          <Link to="/" className="eula-area">
                            Kurumsal Hesap Sözleşmesi ve Ekleri'ni
                          </Link>
                          &nbsp;kabul ediyorum.
                        </Checkbox>
                      </div>
                      <div className="sign-up-container ">
                        <Form.Item className="Form-button" shouldUpdate>
                          {() => (
                            <Button
                              onClick={handleSubmit}
                              className="Button"
                              type="primary"
                              disabled={
                                !form.isFieldsTouched(true) ||
                                !!form
                                  .getFieldsError()
                                  .filter(({ errors }) => errors.length)
                                  .length ||
                                !!!disabled
                              }
                            >
                              <Link>Hesap Aç</Link>
                            </Button>
                          )}
                        </Form.Item>
                        <p className="redirect-to-login-register ">
                          Hesabın var mı?&nbsp;
                          <Link to="/auth/login">Giriş Yap</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="captcha-disclaimer ">
                    Bu site reCAPTCHA ile korunmaktadır. Google{" "}
                    <Link to="https://policies.google.com/privacy">
                      Gizlilik Politikası
                    </Link>{" "}
                    ve{" "}
                    <Link to="https://policies.google.com/terms">
                      Kullanım Koşulları
                    </Link>{" "}
                    geçerlidir.
                  </p>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </BusinessSignupDiv>
    </>
  );
}

export default BusinessSignup;
