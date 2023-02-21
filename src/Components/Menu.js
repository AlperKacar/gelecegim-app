import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/auth";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { KullaniciMenu } from "./ComponentCss/MenuCss";
import { BiChevronDown } from "react-icons/bi";
export function Menu() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logoutHandle = () => {
    dispatch(setUser(false));
    navigate(location.state?.return_url || "/", {
      replace: true,
    });
  };
  const items = [
    {
      label: <Link to="/profile">Profili Görüntüle</Link>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">Profili Düzenle</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      type: "divider",
    },
    {
      label: (
        <a className="alt-li" onClick={logoutHandle}>
          Çıkış Yap
        </a>
      ),
      key: "3",
    },
  ];
  return (
    <KullaniciMenu>
      {user ? (
        <Dropdown className="alt-li" menu={{ items }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space className="namesurname">
              Ad Soyad
              <BiChevronDown className="down-arrow" />
            </Space>
          </a>
        </Dropdown>
      ) : (
        <div className="ul-div">
          <ul>
            <Link className="navLink pr-10" to="auth/login">
              Giriş Yap
            </Link>
            <Link className="navLink border pl-10" to="auth/signup">
              Hesap Aç
            </Link>
          </ul>
          <button className="kurum-kayit" name="Kurum Kaydı" href="/">
            Kurum Kaydı
          </button>
        </div>
      )}
    </KullaniciMenu>
  );
}



