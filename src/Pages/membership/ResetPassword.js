import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { Form, Button } from "antd";
import InputValidation from "../../Components/InputValidation";
import { useDispatch, useSelector } from "react-redux";
import { setActivation } from "../../store/userInformation";
function ResetPassword() {
  const { id, token } = useParams();
  const [form] = Form.useForm();
  const cotrol = useSelector((state) => state.cotrol);
  console.log(cotrol);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [data, setData] = useState(cotrol);

  useEffect(() => {
    userValid();
  }, []);
  const userValid = async () => {
    await axios
      .get(`http://localhost:3001/auth/forgotPassword/${id}/${token}`)
      .then((res) => {})
      .catch((err) => {
        setData(true);
      });
  };
  const sendpassword = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:3001/auth/${id}/${token}`, {
        password,
      })
      .then((res) => {
        dispatch(setActivation(true));
        navigate(location.state?.return_url || "/auth/login", {
          replace: true,
        });
      })
      .catch((err) => {});
  };
  return (
    <div>
      <Helmet>
        <title>ResetPassword</title>
      </Helmet>

      {data ? (
        <Form className="Form-boyut" form={form}>
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
          <Form.Item className="Form-button" shouldUpdate>
            {() => (
              <Button
                className="Button"
                onClick={sendpassword}
                type="primary"
                htmlType="submit"
                disabled={
                  !form.isFieldsTouched(true) ||
                  !!form.getFieldsError().filter(({ errors }) => errors.length)
                    .length
                }
              >
                <Link>Giriş Yap</Link>
              </Button>
            )}
          </Form.Item>
        </Form>
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
