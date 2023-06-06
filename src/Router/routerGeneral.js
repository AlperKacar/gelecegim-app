import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import {
  PageNotFound,
  OzelDers,
  IsIlani,
  Kurum,
  Home,
  Ilan,
} from "./routerComponents";
import LoadingTruck from "../Shared/commonComponents/loading/LoadingTruck";
//import GeneralAuth from "../Shared/auth/GeneralAuth";
import LayoutGeneral from "../Shared/layout/LayoutGeneral";
import KategoriHome from "../Pages/Kategori/KategoriHome";

const RouterGeneral = () => {
  return (
    <Suspense fallback={<LoadingTruck />}>
      <Routes>
        <Route path="/" element={<LayoutGeneral />}>
          <Route index element={<Home />} />
          <Route path="kurum" element={<Kurum />} />
          <Route path="isilani" element={<IsIlani />} />
          <Route path="ozelders" element={<OzelDers />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="ilan/:ilan_baslik=:ilan_no/detay" element={<Ilan />} />
        <Route path="kategori/:kategori" element={<KategoriHome/>}/>
        <Route path="kategori/:kategori/alt_kategori/:alt_kategori" element={<KategoriHome/>}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default RouterGeneral;
