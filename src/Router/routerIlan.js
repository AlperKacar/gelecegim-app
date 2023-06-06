import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PageNotFound, IlanVer } from "./routerComponents";
import LoadingTruck from "../Shared/commonComponents/loading/LoadingTruck";
import RequireAuthIlan from "../Shared/auth/RequireAuthIlan";
import LayoutPrivate from "../Shared/layout/LayoutPrivate";

const RouterPrivate = () => {
  return (
    <Suspense fallback={<LoadingTruck />}>
      <Routes>
        <Route
          element={
            <RequireAuthIlan>
              <LayoutPrivate />
            </RequireAuthIlan>
          }
        >
          <Route path="/" element={<IlanVer />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default RouterPrivate;
