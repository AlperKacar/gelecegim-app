import { memo } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRequireAuth = memo(({ children }) => {
  const isLoggedInAdmin = useSelector(
    (state) => state.adminInformation.isLoggedInAdmin
  );
  let location = useLocation();

  if (isLoggedInAdmin) {
    return (
      <Navigate
        to="/admin/controller"
        replace={true}
        state={{
          return_url: location.pathname,
        }}
      />
    );
  }

  return children;
});
export default AdminRequireAuth;
