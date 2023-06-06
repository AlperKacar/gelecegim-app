import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Login,
  PageNotFound,
  ForgotPassword,
  ResetPassword,
  BusinessSignup,
  SignUpControl,
  SignUp,
  SignUpDeleteControl,
} from "./routerComponents";
import LayoutMembership from "../Shared/layout/LayoutMembership";
import MembershipAuth from "../Shared/auth/MembershipAuth";
import LoadingTruck from "../Shared/commonComponents/loading/LoadingTruck";
import { memo } from "react";

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
          <Route path="forgotPassword/:id/:token" element={<ResetPassword />} />
          <Route path="kayit/kurumsal" element={<BusinessSignup />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="signUp/:id/:token" element={<SignUpControl />} />
          <Route
            path="signUp/delete/:id/:token"
            element={<SignUpDeleteControl />}
          />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default memo(RouterMembership);
