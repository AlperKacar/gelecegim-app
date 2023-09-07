import { Helmet } from "react-helmet";
import InputValidation from "../../Components/InputValidation";
import { useState } from "react";
import { LoginDiv } from "./Logincss";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Form, Button } from "antd";
import logosrc from "../../images/revize3.png";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setLogin, setUser, setTime } from "../../store/userInformation";

function Login() {
  const [form] = Form.useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        email,
        password,
      });
      const { token, user } = response.data;
      toast.success("Giriş Başarılı!");
      setTimeout(() => {
        dispatch(setLogin(token));
        dispatch(setTime());
        dispatch(setUser(user)); // Dispatch your login action with the token
        navigate(location.state?.return_url || "/", {
          replace: true,
        });
      }, 1000);
    } catch (err) {
      toast.error("Kullanıcı adı veya şifre hatalıdır.");
    }
  };
  const handleGoogleLogin = async (response) => {
    try {
      if (response.error) {
        // Giriş işlemi başarısız oldu, hata işlemlerini burada gerçekleştirin
        console.error(response.error);
        toast.error("Google ile giriş yapma işlemi başarısız oldu.");
        return;
      }

      const { credential } = response;

      // API rotasına isteği gönderin
      const res = await axios.post("http://localhost:3001/google/login", {
        idToken: credential,
      });

      const { token, user } = res.data;
      toast.success("Giriş Başarılı!");
      setTimeout(() => {
        dispatch(setLogin(token));
        dispatch(setTime());
        dispatch(setUser(user));
        navigate(location.state?.return_url || "/", {
          replace: true,
        });
      }, 1000);
    } catch (error) {
      console.error(error);
      // Hata durumunda kullanıcıya bilgi verin
      toast.error("Giriş sırasında bir hata oluştu.");
    }
  };

  const responseError = (error) => {
    // Giriş sırasında hata olduğunda burası çalışacak
    console.error(error);
  };
  return (
    <LoginDiv>
      <Helmet>
        <title>Giriş Yap</title>
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
                    <Link>Giriş Yap</Link>
                  </Button>
                )}
              </Form.Item>
            </div>
            <div className="Or-div">
              <div className="Or-div-div" />
              <span className="Or-span">OR</span>
              <div className="Or-div-div" />
            </div>
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onFailure={responseError}
              cookiePolicy={"single_host_origin"}
            />
            <Link to="/auth/forgotPassword" className="Forgot-password">
              Şifremi Unuttum
            </Link>
          </div>
        </div>
        <div className="Sign-up-boyut">
          <div>
            <p>
              Henüz hesabın yok mu?
              <Link to="/auth/signup" className="signup-login">
                Üye Ol
              </Link>
            </p>
          </div>
        </div>
      </Form>
    </LoginDiv>
  );
}

export default Login;
