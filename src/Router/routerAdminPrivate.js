import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PageNotFound, AdminLogin } from "./routerComponents";
import LoadingTruck from "../Shared/commonComponents/loading/LoadingTruck";
import AdminRequireAuth from "../Shared/auth/AdminRequireAuth";
import LayoutAdminPrivate from "../Shared/layout/LayoutAdminPrivate";

const RouterAdminPrivate = () => {
  return (
    <Suspense fallback={<LoadingTruck />}>
      <Routes>
        <Route
          element={
            <AdminRequireAuth>
              <LayoutAdminPrivate />
            </AdminRequireAuth>
          }
        >
          <Route path="login" element={<AdminLogin />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default RouterAdminPrivate;
