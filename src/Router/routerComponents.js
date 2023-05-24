import { lazy } from "react";

//private
const RouterPrivate = lazy(() => import("./routerPrivate"));
const Profile = lazy(() => import("../Pages/memberprofile/Profile"));
const ChangePassword = lazy(() =>
  import("../Pages/memberprofile/ChangePassword")
);
const DeleteAccount = lazy(() =>
  import("../Pages/memberprofile/DeleteAccount")
);

//adminprivate
const RouterAdminPrivate = lazy(() => import("./routerAdminPrivate"));
const AdminLogin = lazy(() => import("../Pages/adminAuth/AdminLogin"));
//adminship
const RouterAdminshipe = lazy(() => import("./routerAdminship"));
const AdminProfile = lazy(() => import("../Pages/adminProfile/AdminProfile"));

//membership
const RouterMembership = lazy(() => import("./routerMembership"));
const Login = lazy(() => import("../Pages/membership/Login"));
const ForgotPassword = lazy(() => import("../Pages/membership/ForgotPassword"));
const ResetPassword = lazy(() => import("../Pages/membership/ResetPassword"));
const SignUp = lazy(() => import("../Pages/membership/Signup"));
const BusinessSignup = lazy(() => import("../Pages/membership/BusinessSignup"));
const SignUpControl = lazy(() => import("../Pages/membership/SignUpControl"));
const SignUpDeleteControl = lazy(() =>
  import("../Pages/membership/SignUpDeleteControl")
);

//general
const RouterGeneral = lazy(() => import("./routerGeneral"));
const Home = lazy(() => import("../Pages/Home"));
const Kurum = lazy(() => import("../Pages/Kategori/Kurum"));
const IsIlani = lazy(() => import("../Pages/Kategori/IsIlani"));
const OzelDers = lazy(() => import("../Pages/Kategori/OzelDers"));
const Ilan = lazy(() => import("../Pages/İlan/Ilan"));
//
const RouterIlan = lazy(() => import("./routerIlan"));
const IlanVer = lazy(() => import("../Pages/IlanVer/IlanVer"));

//notFound
const PageNotFound = lazy(() => import("../Pages/PageNotFound"));

export {
  //membership
  Login,
  RouterMembership,
  ForgotPassword,
  ResetPassword,
  SignUp,
  SignUpControl,
  BusinessSignup,
  SignUpDeleteControl,
  //general
  RouterGeneral,
  OzelDers,
  IsIlani,
  Kurum,
  Home,
  Ilan,
  IlanVer,

  //private
  RouterPrivate,
  Profile,
  ChangePassword,
  DeleteAccount,
  //Ilan
  RouterIlan,
  //adminprivate
  RouterAdminPrivate,
  AdminLogin,
  //adminship
  RouterAdminshipe,
  AdminProfile,
  //notFound
  PageNotFound,
};
