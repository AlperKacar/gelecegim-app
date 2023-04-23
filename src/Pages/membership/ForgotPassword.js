import { Helmet } from "react-helmet";
import InputValidation from "../../Components/InputValidation";
import { useState } from "react";
import { LoginDiv } from "./Logincss";
import { Link } from "react-router-dom";
import { Button, Form } from "antd";
import logosrc from "../../images/revize3.png";
import axios from "axios";
import { toast } from "react-toastify";

function ForgotPassword() {
  const [form] = Form.useForm();
  const [email, setEmail] = useState("");

  const activationSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3001/auth/activation/forgotPassword", {
        email,
      })
      .then((res) => {
        toast.success(`Aktivasyon kodu ${email} adresine gönderilmiştir.`);
      })
      .catch((err) => {
        setTimeout(() => {}, 1000);
        toast.error(`${email} Adresi zaten kayıtlı.`);
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
