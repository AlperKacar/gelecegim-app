import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "antd";
import InputValidation from "../../Components/InputValidation";

function ResetPassword() {
  const { id, token } = useParams();
  const [form] = Form.useForm();

  const history = useNavigate();

  const [data2, setData] = useState(false);

  const [password, setPassword] = useState("");

  useEffect(() => {
    userValid();
    setTimeout(() => {
      setData(true);
    }, 3000);
  }, []);
  const userValid = async (e) => {
    e.preventDefault();
    const res = await axios.get(
      `http://localhost:3001/auth/forgotPassword/${id}/${token}`
    );
    setData(res);
  };

  const sendpassword = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:3001/auth/${id}/${token}`, {
      password,
    });
  };
  return (
    <div>
      <Helmet>
        <title>ResetPassword</title>
      </Helmet>
      <Form className="Form-boyut" form={form}>
        <Link to="/">
          {/* <img src={logosrc} className="img-logo" alt="logo" /> */}
        </Link>
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
    </div>
  );
}
export default ResetPassword;
