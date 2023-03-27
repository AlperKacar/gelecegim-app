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

function Login() {
  const [form] = Form.useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    await axios
      .post("http://localhost:3001/auth/login", {
        email,
        password,
      })
      .then((res) => {
        toast.success("Giriş Başarılı!");
        dispatch(setLogin(email, password));
        navigate(location.state?.return_url || "/", {
          replace: true,
        });
      })
      .catch((err) => {
        toast.error("Kullanıcı adı veya şifre hatalıdır.");
      });
  };
  return (
    <LoginDiv>
      <Helmet>
        <title>Login</title>
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
                    <Link>Log in</Link>
                  </Button>
                )}
              </Form.Item>
            </div>
            <div className="Or-div">
              <div className="Or-div-div" />
              <span className="Or-span">OR</span>
              <div className="Or-div-div" />
            </div>
            <GoogleLogin />
            <Link to="/auth/forgotPassword" className="Forgot-password">
              Forgot password?
            </Link>
          </div>
        </div>
        <div className="Sign-up-boyut">
          <div>
            <p>
              Don't have an account?
              <Link to="/auth/signup" className="signup-login">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </Form>
    </LoginDiv>
  );
}

export default Login;
