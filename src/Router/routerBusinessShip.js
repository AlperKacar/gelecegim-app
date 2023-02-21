import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import {
  PageNotFound,
  BusinessLogin,
  BusinessSignup
} from "./routerComponents";
import LayoutBusinessShip from "../Shared/layout/LayoutBusinessShip";
import BusinessShipAuth from "../Shared/auth/BusinessShipAuth";
import LoadingTruck from "../Shared/commonComponents/loading/LoadingTruck";


const RouterBusinessShip = () => {
 
  return (
    <Suspense fallback={<LoadingTruck />}>
      <Routes>
        <Route
          element={
            <BusinessShipAuth>
              <LayoutBusinessShip />
            </BusinessShipAuth>
          }
        >
          <Route path="login" element={<BusinessLogin />} />
          <Route path="signup" element={<BusinessSignup />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default RouterBusinessShip;
