import React, { useEffect, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadingTruck from "../Shared/commonComponents/loading/LoadingTruck";
import LayoutMembership from "../Shared/layout/LayoutMembership";
import {
  RouterMembership,
  RouterAdminPrivate,
  RouterGeneral,
  RouterPrivate,
  RouterIlan,
  PageNotFound,
} from "./routerComponents";
import RouterAdminship from "./routerAdminship";

const Router = () => {
  const { pathname } = useLocation();

  useEffect(() => {}, []);

  useEffect(() => {}, [pathname]);

  return (
    <Suspense fallback={<LoadingTruck />}>
      <Routes>
        <Route
          path="/500"
          element={
            <LayoutMembership childrenActive>
              <PageNotFound
                title="Beklenmeyen hata"
                desc={<>500 Internal server error</>}
              />
            </LayoutMembership>
          }
        />

        {/* user login... */}
        <Route path="/auth/*" element={<RouterMembership />} />
        {/* login sonrası private */}
        <Route path="/*" element={<RouterGeneral />} />
        <Route path="/ilanver/*" element={<RouterIlan />} />
        {/* auth/admin sonrası private */}
        <Route path="/auth/admin/*" element={<RouterAdminPrivate />} />
        {/* admin giriş sonrası */}
        <Route path="/admin/*" element={<RouterAdminship />} />
        {/* profile/ sonrası private */}
        <Route path="/user/*" authre={true} element={<RouterPrivate />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
