import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import {
  PageNotFound,
  Profile,
  ChangePassword,
  DeleteAccount,
} from "./routerComponents";
import LoadingTruck from "../Shared/commonComponents/loading/LoadingTruck";
import RequireAuth from "../Shared/auth/RequireAuth";
import LayoutPrivate from "../Shared/layout/LayoutPrivate";

const RouterPrivate = () => {
  return (
    <Suspense fallback={<LoadingTruck />}>
      <Routes>
        <Route
          element={
            <RequireAuth>
              <LayoutPrivate />
            </RequireAuth>
          }
        >
          <Route path="profile" element={<Profile />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="delete-account" element={<DeleteAccount />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default RouterPrivate;
