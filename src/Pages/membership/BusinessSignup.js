import { Helmet } from "react-helmet";
import InputValidation from "../../Components/InputValidation";
import SelectValidation from "../../Components/SelectValidation";
import { useEffect, useState } from "react";
import logosrc from "../../images/revize3.png";
import { BusinessSignupDiv } from "./BusinessSignupcss";
import { Button, Form, Checkbox, Radio } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import IlcelerVd from "../../Components/IlcelerVd";

function BusinessSignup() {
  const [form] = Form.useForm();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [il, setIl] = useState("");
  const [ilce, setIlce] = useState("");
  const [hesapTuru, setHesapTuru] = useState("Şahıs Şirketi");
  const [vdil, setVdIl] = useState("");
  const [vdad, setVdAd] = useState("");
  const [tcno, setTcno] = useState("");
  const [vkNo, setVkNo] = useState("");
  const [checked, setChecked] = useState(false);
  const [tcnochecked, setTcnoChecked] = useState(false);

  const handleRadioChange = (e) => {
    setHesapTuru(e.target.value);
    if (hesapTuru === "Şahıs Şirketi") {
      setTcno("");
    }
  };
  const isRequired = hesapTuru === "Şahıs Şirketi";
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3001/auth/signup", {
        email,
        password,
        name: name.charAt(0).toUpperCase() + name.slice(1),
        surname: surname.charAt(0).toUpperCase() + surname.slice(1),
        phone,
        business,
        il,
        ilce,
        hesapTuru,
        vdil,
        vdad,
        tcno,
        vkNo,
      })
      .then((res) => {
        toast.success(`${email} adresine kayıt linki gönderilmiştir.`);
      })
      .catch((err) => {
        toast.error("email adresi kayıtlıdır.");
      });
  };
  useEffect(() => {
    if (tcno.length === 11) {
      setTcnoChecked(false);
    } else {
      setTcnoChecked(true);
    }
  }, [tcno]);
  const toggleDisable = () => {
    setChecked(false);
  };
  const onClick = () => {
    setChecked(!checked);
  };
  const { Item } = Form;
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
              <Form form={form} name="dynamic_rule">
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
                        onChange={(e) => setPhone(e.target.value)}
                        label="Sabit Telefon"
                      />
                    </Form.Item>

                    <Form.Item
                      name="Kurum"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <SelectValidation
                        value={business}
                        getir="Kurum"
                        label="Kurum Alanınız"
                        onChange={(o) => setBusiness(o)}
                      />
                    </Form.Item>
                  </div>
                  <div className="right-section section-border">
                    <div className="split-form ">
                      <Form.Item
                        name="Il"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <SelectValidation
                          value={il}
                          label="İller"
                          getir="Iller"
                          onChange={(o) => setIl(o)}
                        />
                      </Form.Item>
                      <Form.Item
                        name="Ilce"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <IlcelerVd
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
                      <Item name="radio">
                        <Radio.Group
                          className="form-radio"
                          onChange={handleRadioChange}
                          value={hesapTuru}
                        >
                          <Radio
                            onClick={toggleDisable}
                            value={"Şahıs Şirketi"}
                          >
                            Şahıs Şirketi
                          </Radio>
                          <Radio
                            onClick={toggleDisable}
                            value={"Limited veya Anonim Şirketi"}
                          >
                            Limited veya Anonim Şirketi
                          </Radio>
                        </Radio.Group>
                      </Item>
                    </div>
                    <div className="split-form ">
                      <Form.Item
                        name="VdIl"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <SelectValidation
                          value={vdil}
                          label="Vergi Dairesi İli"
                          getir="Iller"
                          onChange={(e) => setVdIl(e)}
                        />
                      </Form.Item>
                      <Form.Item
                        name="vdAd"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <IlcelerVd
                          value={vdad}
                          il={vdil}
                          label="Vergi Dairesi Adı"
                          getir="vdAd"
                          onChange={(e) => setVdAd(e)}
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
                          value={vkNo}
                          label="Vergi Kimlik No"
                          onChange={(e) => setVkNo(e.target.value)}
                        />
                      </Form.Item>
                      <Form.Item>
                        <InputValidation
                          max={11}
                          value={tcno}
                          disabled={hesapTuru === "Limited veya Anonim Şirketi"}
                          className="form-input"
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
                        <Checkbox checked={checked} onChange={onClick}>
                          <Link className="eula-area">
                            Kurumsal Hesap Sözleşmesi ve Ekleri'ni
                          </Link>
                          &nbsp;kabul ediyorum.
                        </Checkbox>
                      </div>
                      <div className="sign-up-container ">
                        {isRequired ? (
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
                                  !checked ||
                                  tcnochecked
                                }
                              >
                                <Link>Hesap Aç</Link>
                              </Button>
                            )}
                          </Form.Item>
                        ) : (
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
                                  !!!checked
                                }
                              >
                                <Link>Hesap Aç</Link>
                              </Button>
                            )}
                          </Form.Item>
                        )}

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
