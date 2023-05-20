import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { Icon } from "../../Shared/commonComponents/loading/Loadingcss";
function SignUpControl() {
  const { id, token } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    userValid();
  });
  const userValid = async () => {
    if (id && token) {
      await axios
        .get(`http://localhost:3001/auth/signup/${id}/${token}`)
        .then((res) => {
          navigate(location.state?.return_url || "/auth/login", {
            replace: true,
          });
        })
        .catch((err) => {});
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
export default SignUpControl;
