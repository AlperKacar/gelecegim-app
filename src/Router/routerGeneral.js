import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import {
  PageNotFound,
  OzelDers,
  IsIlani,
  Kurum,
  Home
} from "./routerComponents";
import LoadingTruck from "../Shared/commonComponents/loading/LoadingTruck";
import GeneralAuth from "../Shared/auth/GeneralAuth";
import LayoutGeneral from "../Shared/layout/LayoutGeneral";

const RouterGeneral = () => {
  return (
    <Suspense fallback={<LoadingTruck />}>
      <Routes>
        <Route
          element={
            <GeneralAuth>
              <LayoutGeneral />
            </GeneralAuth>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="kurum" element={<Kurum />} />
          <Route path="isilani" element={<IsIlani />} />
          <Route path="ozelders" element={<OzelDers />} />

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default RouterGeneral;