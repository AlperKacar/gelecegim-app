import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { Icon } from "../../Shared/commonComponents/loading/Loadingcss";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setLogout } from "../../store/userInformation";
function SignUpDeleteControl() {
  const { id, token } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    userValid();
  });
  const userValid = async () => {
    if (id && token) {
      await axios
        .delete(`http://localhost:3001/auth/signup/delete/${id}/${token}`)
        .then((res) => {
          toast.success("hesap başarıyla silindi.");
          dispatch(setLogout());
          navigate(location.state?.return_url || "/auth/signup", {
            replace: true,
          });
        })
        .catch((err) => {
          toast.error("hesap burdan silinemez.");
          dispatch(setLogout());
          navigate(location.state?.return_url || "/auth/login", {
            replace: true,
          });
        });
    }
  };
  return (
    <div>
      <Icon>
        <Link className="img" alt="icon" />
      </Icon>
    </div>
  );
}
export default SignUpDeleteControl;
