import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Login,
  PageNotFound,
  ForgotPassword,
  ResetPassword,
  BusinessSignup,
  SignUp,
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
          <Route path="login" element={<Login />} />
          <Route path="forgotPassword" element={<ForgotPassword />} />
          <Route path="resetPassword" element={<ResetPassword />} />
          <Route path="kayit/kurumsal" element={<BusinessSignup />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default RouterMembership;
