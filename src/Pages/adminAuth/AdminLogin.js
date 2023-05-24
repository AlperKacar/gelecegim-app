import { Helmet } from "react-helmet";
import InputValidation from "../../Components/InputValidation";
import { useState } from "react";
import { LoginDiv } from "../membership/Logincss";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Form, Button } from "antd";
import logosrc from "../../images/revize3.png";
import axios from "axios";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setAdminLogin } from "../../store/adminInformation";

function AdminLogin() {
  const [form] = Form.useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:3001/admin/auth/login", {
        email,
        password,
      })
      .then((res) => {
        toast.success("Giriş Başarılı!");
        setTimeout(() => {
          dispatch(setAdminLogin(res));
          navigate(location.state?.return_url || "/", {
            replace: true,
          });
        }, 1000);
      })
      .catch((err) => {
        toast.error("Kullanıcı adı veya şifre hatalıdır.");
      });
  };

  return (
    <LoginDiv>
      <Helmet>
        <title>AdminLogin</title>
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
                  {
                    pattern: /@gelecegim\.com$/,
                    message:
                      "E-posta adresi @gelecegim.com alanıyla eşleşmelidir!",
                  },
                ]}
              >
                <InputValidation
                  value={email}
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
                  {
                    min: 6,
                    max: 30,
                    message: "Şifre en az 6 en fazla 30 karakter olmalıdır.",
                  },
                ]}
              >
                <InputValidation
                  className="form-input"
                  type="password"
                  value={password}
                  label="Şifre"
                  onChange={(e) => setPassword(e.target.value)}
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
                    <Link>Giriş Yap</Link>
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

export default AdminLogin;
