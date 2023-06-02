import axios from "axios";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Button } from "antd";
import InputValidation from "../Components/InputValidation";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../store/userInformation";
import { toast } from "react-toastify";
import { Profile } from "./ComponentCss/Profilecss";

function ResetPassword() {
  const [form] = Form.useForm();
  const { token } = useSelector((state) => state.userInformation);
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const sendPassword = async (e) => {
    e.preventDefault();

    if (password === newPassword) {
      toast.error("Eski şifrenizle yeni şifreniz aynı olamaz");
    } else {
      try {
        const response = await axios.post(
          `http://localhost:3001/profile/changePassword`,
          {
            password,
            newPassword,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          dispatch(setLogout(response));
          navigate(location.state?.return_url || "/auth/login", {
            replace: true,
          });
          toast.success("şifre güncellendi");
        } else {
          toast.error("Hata oluştu");
        }
      } catch (error) {
        toast.error("Hata oluştu");
      }
    }
  };
  return (
    <div>
      <Helmet>
        <title>Şifre Güncelleme</title>
      </Helmet>
      <Profile>
        <h2 className="profile-h2">Şifre Güncelleme</h2>

        <Form className="profile-form" form={form}>
          <div className="margin-20px">
            <p className="text">
              Birisi erişim sağlamaya çalışırsa, hesabınızı korumak için bu
              oturum dışındaki tüm oturumlardan çıkış yapacaksınız.
            </p>
            <br />
            <p className="text">
              Şifren en az 6 karakterden oluşmalı. Tavsiyemiz içinde en az birer
              tane rakam,küçük harf,büyük harf ve özel karakter kullanmandır.
            </p>

            <Form.Item
              name="old-password"
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
                min={6}
                className="form-edit-input"
                type="password"
                name="password"
                placeholder="Eski şifrenizi girin"
                onChange={(e) => setPassword(e.target.value)}
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
                className="form-edit-input"
                type="password"
                name="passwordone"
                placeholder="Yeni Şifrenizi girin"
                onChange={(e) => setNewPassword(e.target.value)}
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
                className="form-edit-input"
                placeholder="Şifrenizi onaylamak için tekrar girin"
              />
            </Form.Item>
            <div className="form-button  flex-jc-center">
              <Form.Item shouldUpdate>
                {() => (
                  <Button
                    onClick={sendPassword}
                    type="primary"
                    htmlType="submit"
                    disabled={
                      !form.isFieldsTouched(true) ||
                      !!form
                        .getFieldsError()
                        .filter(({ errors }) => errors.length).length
                    }
                  >
                    <p>Şifre Değiştir</p>
                  </Button>
                )}
              </Form.Item>
            </div>
          </div>
        </Form>
      </Profile>
    </div>
  );
}
export default ResetPassword;
