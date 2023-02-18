import React, { useEffect, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadingTruck from "../Shared/commonComponents/loading/LoadingTruck";
import LayoutMembership from "../Shared/layout/LayoutMembership";
import {
  RouterMembership,
  RouterAdminPrivate,
  RouterGeneral,
  RouterPrivate,
  PageNotFound,
} from "./routerComponents";
import PrivateRoute from "../Components/PrivateRoute"

const Router = () => {


  

  const { pathname } = useLocation();

  useEffect(() => {

  }, []);


  useEffect(() => {

  }, [pathname]);

 

  return (
    <Suspense fallback={<LoadingTruck />}>
      <Routes>
        <Route
          path="/500"
          element={
            
            <LayoutMembership childrenActive>
              <PageNotFound
                title="Beklenmeyen hata"
                desc={
                  <>
                    500 Internal server error
                  </>
                }
              />
            </LayoutMembership>
            
          }
        />

        {/* user login... */}
        <Route  path="/auth/*"  element={<RouterMembership />} />
        {/* login sonrası private */}
        <Route path="/*"  element={<RouterGeneral />} />
        {/* auth/admin sonrası private */}
        <Route path="/auth/admin/*" element={<RouterAdminPrivate />} />
        {/* profile/ sonrası private */}
        <Route path="/profile/*" authre={true} element={<PrivateRoute><RouterPrivate /></PrivateRoute>} />
      </Routes> 
    </Suspense>
  )
  
}


export default Router;
