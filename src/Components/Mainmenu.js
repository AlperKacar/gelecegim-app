import { Layout, Menu } from "antd";
import { UserOutlined, LockOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const { Sider } = Layout;
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
const MainMenu = () => {
  const location = useLocation();
  const { pathname } = location;
  const selectedKey = pathname.split("/")[2];
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
