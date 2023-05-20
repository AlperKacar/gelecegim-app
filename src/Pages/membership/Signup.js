import { Helmet } from "react-helmet"; //Componentlerin meta etiketleri için gerekli kütüphane
import InputValidation from "../../Components/InputValidation"; //Formlardaki validasyon işlemleri için oluşturduğumuz fonksiyonun çağrılması
import { useState, memo } from "react"; //reactın kendi içinde bulunan fonksiyonlar
import { LoginDiv } from "./Logincss"; //stillendirme kısmında kullandığımız styled-components ile oluşturulmuş css kodunun çağırılması
import logosrc from "../../images/revize3.png";
import { Button, Form, Checkbox } from "antd"; //ant design materyalleri
import { Link } from "react-router-dom";
import { toast } from "react-toastify"; // nodejsin içinde bulunan ekrana bildirim çıkartmayı sağlayan bir eklenti
import axios from "axios"; //http istek ve cevaplarını yönlendirmemizi sağlayan js kütüphanesi
import { GoogleLogin } from "@react-oauth/google"; //google ile giriş yapmak için gerekli kütüphane

const Signup = memo(() => {
  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const toggleDisable = () => {
    setDisabled(!disabled);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3001/auth/signup", {
        email,
        password,
        name: name.charAt(0).toUpperCase() + name.slice(1),
        surname: surname.charAt(0).toUpperCase() + surname.slice(1),
        hesapTuru: "Bireysel",
      })
      .then((res) => {
        toast.success(`${email} adresinize kayıt linki gönderilmiştir`);
      })
      .catch((err) => {
        toast.error("email adresi kayıtlıdır.");
      });
  };

  return (
    <LoginDiv>
      <Helmet>
        <title>Signup</title>
      </Helmet>
      <Form className="Form-boyut" form={form} name="dynamic_rule">
        <div className="Login">
          <div className="Login-boyut">
            <div className="Singup-boyut">
              <Link to="/">
                <img src={logosrc} className="img-logo" alt="logo" />
              </Link>
              <div className="Input-div">
                <div className="Input-div-row">
                  <Form.Item
                    name="name"
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
                      onChange={(e) => setName(e.target.value)}
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
                      name="surname"
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
                    name="email"
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
                    name="passwordone"
                    label="Şifre"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  name="confirm"
                  dependencies={["password"]}
                  rules={[
                    {
                      required: true,
                      message: "Lütfen şifrenizi doğrulayınız!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error("Girdiğiniz iki şifre uyuşmuyor!")
                        );
                      },
                    }),
                  ]}
                >
                  <InputValidation
                    type="password"
                    className="form-input"
                    label="Şifreyi Onayla"
                  />
                </Form.Item>
                <Checkbox className="form-input" onClick={toggleDisable}>
                  Kuralları okudum kabul ediyorum.
                </Checkbox>
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
                          .filter(({ errors }) => errors.length).length ||
                        !!!disabled
                      }
                    >
                      <Link>Kayıt Ol</Link>
                    </Button>
                  )}
                </Form.Item>
              </div>
              <GoogleLogin />
            </div>
          </div>
          <div className="Sign-up-boyut">
            <div className="displaycentercenter">
              <p>
                Hesabın var mı?
                <Link to="/auth/login" className="signup-login">
                  Giriş Yap
                </Link>
              </p>
            </div>
            <div className="displaycentercenter">
              <p>
                İşletme sahibi misin?
                <Link to="/auth/kayit/kurumsal" className="signup-login">
                  Kurumsal Hesap Aç
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Form>
    </LoginDiv>
  );
});
export default Signup;
