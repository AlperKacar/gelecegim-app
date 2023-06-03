import { Dropdown, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { KullaniciMenu } from "./ComponentCss/MenuCss";
import { setLogout } from "../store/userInformation";
import { BiChevronDown } from "react-icons/bi";
import axios from "axios";
import { useEffect, useState } from "react";

export function Menu() {
  const isLoggedIn = useSelector((state) => state.userInformation.isLoggedIn);
  const { token } = useSelector((state) => state.userInformation);
  const yetki=useSelector((state)=>state.userInformation.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [fullName, setFullName] = useState("");

  const logoutHandle = () => {
    dispatch(setLogout());
    navigate(location.state?.return_url || "/", {
      replace: true,
    });
  };
  useEffect(() => {
    if (token) {
      const fetchUserProfile = async () => {
        try {
          const response = await axios.get(
            "http://localhost:3001/profile/menu",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const user = response.data;
          setFullName(`${user.name} ${user.surname}`);
        } catch (error) {}
      };

      fetchUserProfile();
    }
  }, [token]);

  const items = [
    {
      label: <Link to="/user/profile">Profili Görüntüle </Link>,
      key: "0",
    },
    /* {
      label: <Link to="/">Profili Düzenle</Link>,
      key: "1",
    }, */
    {
      type: "divider",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Link className="alt-li" onClick={logoutHandle}>
          Çıkış Yap
        </Link>
      ),
      key: "3",
    },
  ];

  return (
    <KullaniciMenu>
      {isLoggedIn ? (<>
        <Dropdown className="alt-li" menu={{ items }} trigger={["click"]}>
          <Link onClick={(e) => e.preventDefault()}>
            <Space className="namesurname">
              {fullName} 
              <BiChevronDown className="down-arrow" />
            </Space>
          </Link>
        </Dropdown>
        {yetki!=="Bireysel"&& ( <Link to="/ilanver">
            <button className="kurum-kayit" name="Kurum Kaydı">
              Ücretsiz İlan Ver  
            </button>
          </Link>
          )}
        </>
      ) : (
        <div className="ul-div">
          <ul>
            <Link className="navLink pr-10" to="/auth/login">
              Giriş Yap
            </Link>
            <Link className="navLink border pl-10" to="/auth/signup">
              Hesap Aç
            </Link>
          </ul>
          <Link to="/auth/kayit/kurumsal">
            <button className="kurum-kayit" name="Kurum Kaydı">
              Kurum Kaydı
            </button>
          </Link>
        </div>
      )}
    </KullaniciMenu>
  );
}
