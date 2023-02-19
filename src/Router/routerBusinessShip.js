import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import {
  PageNotFound,
  BusinessLogin,
  BusinessSignup
} from "./routerComponents";
import LayoutMembership from "../Shared/layout/LayoutMembership";
import MembershipAuth from "../Shared/auth/MembershipAuth";
import LoadingTruck from "../Shared/commonComponents/loading/LoadingTruck";


const RouterMembership = () => {
 
  return (
    <Suspense fallback={<LoadingTruck />}>
      <Routes>
        <Route
          element={
            <MembershipAuth>
              <LayoutMembership />
            </MembershipAuth>
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
