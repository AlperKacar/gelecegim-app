import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Login,
  PageNotFound,
  ForgotPassword,
  ResetPassword,
  SignUp,
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
          <Route path="login" element={<Login />} />
          <Route path="forgotPassword" element={<ForgotPassword />} />
          <Route path="resetPassword" element={<ResetPassword />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="businessLogin" element={<BusinessLogin />} />
          <Route path="businessSignup" element={<BusinessSignup />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default RouterMembership;
