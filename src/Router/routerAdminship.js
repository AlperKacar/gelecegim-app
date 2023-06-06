import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AdminProfile, PageNotFound } from "./routerComponents";
import LayoutAdminship from "../Shared/layout/LayoutAdminship";
import AdminshipAuth from "../Shared/auth/AdminshipAuth";
import LoadingTruck from "../Shared/commonComponents/loading/LoadingTruck";
import { memo } from "react";

const RouterMembership = () => {
  return (
    <Suspense fallback={<LoadingTruck />}>
      <Routes>
        <Route
          element={
            <AdminshipAuth>
              <LayoutAdminship />
            </AdminshipAuth>
          }
        >
          <Route path="controller" element={<AdminProfile />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default memo(RouterMembership);
