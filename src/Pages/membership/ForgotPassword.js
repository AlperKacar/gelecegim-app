import { Helmet } from "react-helmet";
import InputValidation from "../../Components/InputValidation";
import { useState } from "react";
import { LoginDiv } from "./Logincss";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Form, Button, message } from "antd";
import logosrc from "../../images/revize3.png";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { setLogin } from "../../store/userInformation";

function ForgotPassword() {
  const [form] = Form.useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswere] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:3001/auth/activation/forgotPassword", {
        email,
      })
      .then((res) => {
        toast.success(
          `${email} adresinize şifre yenileme adresi yollanmıştır.`
        );
      })
      .catch((err) => {
        toast.error(`Kullanıcı Bulunamadı.`);
      });
  };
  return (
    <LoginDiv>
      <Helmet>
        <title>ŞifreYenileme</title>
      </Helmet>
      <Form className="Form-boyut" form={form}>
        <div className="Login">
          <div className="Login-boyut">
            <Link to="/">
              <img src={logosrc} className="img-logo" alt="logo" />
            </Link>
            <div className="Input-div">
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
                  label="E-posta"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>
              <Form.Item className="Form-button" shouldUpdate>
                {() => (
                  <Button
                    className="Button"
                    onClick={handleSubmit}
                    type="primary"
                    htmlType="submit"
                    disabled={
                      !form.isFieldsTouched(true) ||
                      !!form
                        .getFieldsError()
                        .filter(({ errors }) => errors.length).length
                    }
                  >
                    <Link>Giriş linki Gönder</Link>
                  </Button>
                )}
              </Form.Item>
            </div>
          </div>
        </div>
      </Form>
    </LoginDiv>
  );
}

export default ForgotPassword;
