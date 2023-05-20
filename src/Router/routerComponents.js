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
const AdminLogin = lazy(() => import("../Pages/admin/AdminLogin"));
const AdminForgotPassword = lazy(() =>
  import("../Pages/admin/AdminForgotPassword")
);
const AdminResetPassword = lazy(() =>
  import("../Pages/admin/AdminResetPassword")
);
const AdminSignUp = lazy(() => import("../Pages/admin/AdminSignUp"));

//membership
const RouterMembership = lazy(() => import("./routerMembership"));
const Login = lazy(() => import("../Pages/membership/Login"));
const ForgotPassword = lazy(() => import("../Pages/membership/ForgotPassword"));
const ResetPassword = lazy(() => import("../Pages/membership/ResetPassword"));
const SignUp = lazy(() => import("../Pages/membership/Signup"));
const BusinessSignup = lazy(() => import("../Pages/membership/BusinessSignup"));
const SignUpControl = lazy(() => import("../Pages/membership/SignUpControl"));

//general
const RouterGeneral = lazy(() => import("./routerGeneral"));
const Home = lazy(() => import("../Pages/Home"));
const Kurum = lazy(() => import("../Pages/Kategori/Kurum"));
const IsIlani = lazy(() => import("../Pages/Kategori/IsIlani"));
const OzelDers = lazy(() => import("../Pages/Kategori/OzelDers"));
const Ilan = lazy(() => import("../Pages/İlan/Ilan"));

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

  //general
  RouterGeneral,
  OzelDers,
  IsIlani,
  Kurum,
  Home,
  Ilan,

  //private
  RouterPrivate,
  Profile,
  ChangePassword,
  DeleteAccount,

  //adminprivate
  RouterAdminPrivate,
  AdminLogin,
  AdminForgotPassword,
  AdminResetPassword,
  AdminSignUp,

  //notFound
  PageNotFound,
};
