import React from "react";
import { ResSub } from "./ComponentCss/ResSubBarCss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
  HomeOutlined,
  SearchOutlined,
  PlusCircleOutlined,
  MessageOutlined,
  UserOutlined,
} from "@ant-design/icons";
function ResSubBar() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logoutHandle = () => {
    dispatch(isLoggedIn());
    navigate(location.state?.return_url || "/", {
      replace: true,
    });
  };
  return (
    <ResSub>
      <div className="sub-bar">
        <ul className="sub-ul">
          <li className="sub-li">
            <Link className="link" to="/">
              <HomeOutlined className="icon" />
            </Link>{" "}
          </li>
          <li className="sub-li">
            <Link className="link" to="">
              <SearchOutlined className="icon" />{" "}
            </Link>{" "}
          </li>
          <li className="sub-li">
            <Link className="link" to="/auth/signup">
              <PlusCircleOutlined className="icon" />
            </Link>{" "}
          </li>
          <li className="sub-li">
            <Link className="link" to="">
              <MessageOutlined className="icon" />
            </Link>
          </li>
          <li className="sub-li" onClick={logoutHandle}>
            <UserOutlined className="icon" />
          </li>
        </ul>
      </div>
    </ResSub>
  );
}

export default ResSubBar;
