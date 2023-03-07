import { memo } from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import { userInformationData } from "../../store/private/userInformationSlice";

const MembershipAuth = memo(({ children }) => {
  const {isLoggedIn} = useSelector(userInformationData);
  let location = useLocation();
 
  if (isLoggedIn) {
    return <Navigate to="/" replace={true} state={{
        return_url: location.pathname
    }}
    
    />
}

  return children;
});

export default MembershipAuth;