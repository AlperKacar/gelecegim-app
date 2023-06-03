import Router from "./Router/index";
import { useSelector } from "react-redux";
import LoadingTruck from "./Shared/commonComponents/loading/LoadingTruck";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const isLoggedIn = useSelector((state) => state.userInformation.isLoggedIn);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setRedirect(true);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (isLoggedIn && !redirect) {
    return <LoadingTruck />;
  }

  return (
    <>
      <ToastContainer />
      <Router />
    </>
  );
}

export default App;
