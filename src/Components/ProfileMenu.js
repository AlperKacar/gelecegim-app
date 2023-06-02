import { Layout, Menu } from "antd";
import {
  UserOutlined,
  LockOutlined,
  DeleteOutlined,
  PushpinOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const { Sider } = Layout;

const MainMenu = () => {
  const location = useLocation();
  const { pathname } = location;
  const selectedKey = pathname.split("/")[2];
  const hesapTuru = useSelector((state) => state.userInformation.user);

  const menuItems = [
    {
      key: "profile",
      label: "Profile",
      location: "/user/profile",
      icon: <UserOutlined />,
    },
    {
      key: "change-password",
      label: "Change Password",
      location: "/user/change-password",
      icon: <LockOutlined />,
    },
    {
      key: "delete-account",
      label: "Delete Account",
      location: "/user/delete-account",
      icon: <DeleteOutlined />,
    },
  ];

  if (hesapTuru !== "Bireysel") {
    menuItems.push({
      key: "ilan-controller",
      label: "İlan Bilgileri",
      location: "/user/ilan-controller",
      icon: <PushpinOutlined />,
    });
  }

  return (
    <Sider width={200}>
      <Menu mode="inline" selectedKeys={[selectedKey]}>
        {menuItems.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.location}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default MainMenu;
