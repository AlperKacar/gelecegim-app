import React from 'react'
import {ResSub} from "./ComponentCss/ResSubBarCss"
import { IoSearchSharp } from "react-icons/io5";
import {RiMessage2Line} from "react-icons/ri";
import {CgProfile} from "react-icons/cg";
import { GrAchievement } from "react-icons/gr";
import { useDispatch,useSelector} from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { userInformationData } from "../store/private/userInformationSlice";
function ResSubBar() {
  const {isLoggedIn} = useSelector(userInformationData)
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
      <ul className='sub-ul'>
        <li className='sub-li'><IoSearchSharp className='icon'/> Arama </li>
        <li className='sub-li'><CgProfile className='icon'/> Profilim </li>
        <li className='sub-li'><Link className="link" onClick={logoutHandle}><RiMessage2Line className='icon'/> Mesajlar</Link></li>
        <li className='sub-li'><Link className="link" to="/auth/signup"><GrAchievement className='icon'/> Kayıt</Link></li>
     
     
      </ul>

      </div>


    </ResSub>
  )
}

export default ResSubBar;