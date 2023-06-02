import axios from "axios";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useLocation } from "react-router-dom";
import { Form, Button } from "antd";
import InputValidation from "../Components/InputValidation";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../store/userInformation";
import { toast } from "react-toastify";
import { Profile } from "./ComponentCss/Profilecss";

function DeleteProfile() {
  const [form] = Form.useForm();
  const { token } = useSelector((state) => state.userInformation);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");

  const sendpassword = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `http://localhost:3001/profile/userDelete`,
        {
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(setLogout());
      toast.success("Hesap silme Başarılı");
      navigate(location.state?.return_url || "/auth/signup", {
        replace: true,
      });
    } catch (err) {
      toast.error("Hata oluştu");
    }
  };
  return (
    <div>
      <Helmet>
        <title>Hesap Silme</title>
      </Helmet>
      <Profile>
        <h2 className="profile-h2">Hesap Silme</h2>

        <Form className="profile-form" form={form}>
          <div className="margin-20px">
            <p className="text">
              Hesabınızı silmek istediğinize eminmisiniz. altta bulan yere
              şifrenizi girerek hesabızı sile bilirsiniz. Unutmayın ki biz bir
              Aileyiz sizi tekrar bekliyor olacağız.
            </p>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Şifrenizi girin!",
                },
                {
                  whitespace: true,
                  message: "Şifre Boşluk içeremez!",
                },
              ]}
            >
              <InputValidation
                className="form-edit-input"
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
                className="form-edit-input"
                type="password"
                placeholder="Şifrenizi onaylamak için tekrar girin"
              />
            </Form.Item>
            <div className="form-button  flex-jc-center">
              <Form.Item shouldUpdate>
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
                    <p>Hesabı Sil</p>
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
export default DeleteProfile;
