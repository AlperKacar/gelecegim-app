import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { Form, Button } from "antd";
import InputValidation from "../../Components/InputValidation";
import { useDispatch, useSelector } from "react-redux";
import { setActivation } from "../../store/userInformation";
import { Body } from "./resetpasswordcss";
function ResetPassword() {
  const { id, token } = useParams();
  const [form] = Form.useForm();
  const control = useSelector((state) => state.userInformation.control);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  useEffect(() => {
    userValid();
  }, []);
  const userValid = async () => {
    await axios
      .get(`http://localhost:3001/auth/forgotPassword/${id}/${token}`)
      .then((res) => {})
      .catch((err) => {});
  };
  const sendpassword = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:3001/auth/${id}/${token}`, {
        password,
      })
      .then((res) => {
        dispatch(setActivation());
        navigate(location.state?.return_url || "/auth/login", {
          replace: true,
        });
      })
      .catch((err) => {});
  };
  return (
    <div>
      <Helmet>
        <title>Şifre Sıfırlama</title>
      </Helmet>

      {control ? (
        <Body>
          <div className="main-div">
            <div className="info">
              <h1 className="Baslik">Güçlü Bir Şifre Oluştur</h1>
              <p className="text">
                Şifren en az 6 karakterden oluşmalı. Tavsiyemiz içinde en az
                birer tane rakam,küçük harf,büyük harf ve özel karakter
                kullanmandır.
              </p>
            </div>

            <Form className="form-div" form={form}>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Lütfen şifrenizi girin!",
                  },
                  {
                    whitespace: true,
                    message: "Şifre Boşluk içeremez!",
                  },
                ]}
              >
                <InputValidation
                  className="form-input"
                  type="password"
                  name="passwordone"
                  placeholder="Şifrenizi girin"
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
                  placeholder="Şifrenizi onaylamak için tekrar girin"
                />
              </Form.Item>
              <Form.Item className="Form-button" shouldUpdate>
                {() => (
                  <Button
                    className="reset-button"
                    onClick={sendpassword}
                    type="primary"
                    htmlType="submit"
                    disabled={
                      !form.isFieldsTouched(true) ||
                      !!form
                        .getFieldsError()
                        .filter(({ errors }) => errors.length).length
                    }
                  >
                    <p>Onayla</p>
                  </Button>
                )}
              </Form.Item>
            </Form>
          </div>
        </Body>
      ) : (
        <div>zaman aşımına uğradı</div>
      )}
      <Link to="/">
        {/* <img src={logosrc} className="img-logo" alt="logo" /> */}
      </Link>
    </div>
  );
}
export default ResetPassword;
