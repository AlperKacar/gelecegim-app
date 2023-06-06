import { lazy } from "react";

//private
const RouterPrivate = lazy(() => import("./routerPrivate"));
const Profile = lazy(() => import("../Pages/memberprofile/Profile"));
const IlanController = lazy(() =>
  import("../Pages/memberprofile/IlanController")
);
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
const Ilan = lazy(() => import("../Pages/İlan/Ilan"));
const KategoriHome=lazy(()=>import("../Pages/Kategori/KategoriHome"))
//ilan
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
  Home,
  Ilan,
  IlanVer,
  KategoriHome,
  //private
  RouterPrivate,
  Profile,
  ChangePassword,
  IlanController,
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
