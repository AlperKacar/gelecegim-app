import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import {
  PageNotFound,
  BusinessLogin,
  BusinessSignup
} from "./routerComponents";
import LayoutBusinessShip from "../Shared/layout/LayoutMembership";
import BusinessShipAuth from "../Shared/auth/MembershipAuth";
import LoadingTruck from "../Shared/commonComponents/loading/LoadingTruck";


const RouterMembership = () => {
 
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

export default RouterMembership;
