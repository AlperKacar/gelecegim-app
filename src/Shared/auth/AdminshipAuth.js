import { memo } from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

const AdminshipAuth = memo(({ children }) => {
  const isLoggedInAdmin = useSelector(
    (state) => state.adminInformation.isLoggedInAdmin
  );
  let location = useLocation();

  if (!isLoggedInAdmin) {
    return (
      <Navigate
        to="/auth/admin/login"
        replace={true}
        state={{
          return_url: location.pathname,
        }}
      />
    );
  }

  return children;
});

export default AdminshipAuth;
