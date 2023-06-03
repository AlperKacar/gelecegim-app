import { Helmet } from "react-helmet";
import InputValidation from "../../Components/InputValidation";
import { useState } from "react";
import { LoginDiv } from "./Logincss";
import { Link } from "react-router-dom";
import { Button, Form } from "antd";

import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setActivaitiona } from "../../store/userInformation";
import { ForgotDiv } from "./forgotpasswordcss";
function ForgotPassword() {
  const [form] = Form.useForm();
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const activationSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3001/auth/activation/forgotPassword", {
        email,
      })
      .then((res) => {
        dispatch(setActivaitiona());
        toast.success(`Link  ${email} adresine gönderilmiştir.`);
      })
      .catch((err) => {
        setTimeout(() => {}, 1000);
        toast.error(`${email} Adresi  kayıtlı değildir.`);
      });
  };
  return (
    <LoginDiv>
      <Helmet>
        <title>Şifremi Unuttum</title>
      </Helmet>
      <Form className="Form-boyut" form={form}>
        <div className="Forgot">
          <div className="Login-boyut">
            <ForgotDiv>
              <span className="lock-img"></span>
            </ForgotDiv>
            <ForgotDiv>
              <span className="baslik">
                Giriş Yaparken Sorun mu Yaşıyorsun?
              </span>
            </ForgotDiv>
            <div className="text-div">
              <span className="text">
                Kayıt olurken kullandığın e-posta adresini gir ve hesabına
                yeniden ulaşabilmen için sana bir bağlantı gönderelim.
              </span>
            </div>
            <div className="Input-div">
              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "Geçerli bir e-posta giriniz!",
                  },
                  {
                    required: true,
                    message: "Lütfen E-postanızı giriniz!",
                  },
                ]}
              >
                <InputValidation
                  value={email}
                  label="E-posta"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>
              <Form.Item className="Form-button" shouldUpdate>
                {() => (
                  <Button
                    className="forgot-form-button"
                    onClick={activationSubmit}
                    type="primary"
                    htmlType="submit"
                    disabled={
                      !form.isFieldsTouched(true) ||
                      !!form
                        .getFieldsError()
                        .filter(({ errors }) => errors.length).length
                    }
                  >
                    <p>Giriş bağlantısı Gönder</p>
                  </Button>
                )}
              </Form.Item>
              <div>
                <p className="or-divider">&nbsp;&nbsp;YA DA&nbsp;&nbsp;</p>
                <Link className="forgot-link" to="/auth/signup">
                  Hesap Aç
                </Link>
              </div>
              <div className="forgot-giris-div">
                <Link className="forgot-giris-link" to="/auth/login">
                  Giriş Ekranına Dön
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </LoginDiv>
  );
}

export default ForgotPassword;
