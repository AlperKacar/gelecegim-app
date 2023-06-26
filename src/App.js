import Router from "./Router/index";
import { useSelector } from "react-redux";
import LoadingTruck from "./Shared/commonComponents/loading/LoadingTruck";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const isLoggedIn = useSelector((state) => state.userInformation.isLogged);
  const [isOnline, setIsOnline] = useState(true);

  // useEffect(() => {
  //   if (isOnline) {
  //     const socket = new WebSocket(
  //       "ws://https://gelecegimserver.netlify.app/error"
  //     );

  //     socket.onopen = () => {
  //       setIsOnline(true);
  //     };

  //     socket.onclose = () => {
  //       setIsOnline(false);
  //     };

  //     return () => {
  //       socket.close();
  //     };
  //   }
  // }, [isOnline]);

  if (isLoggedIn) {
    return <LoadingTruck />;
  }

  return (
    <>
      {!isOnline && (
        <div>
          <h1>İnternet bağlantısı yok!</h1>
          <p>Lütfen internet bağlantınızı kontrol edin ve tekrar deneyin.</p>
        </div>
      )}
      <ToastContainer />
      <Router />
    </>
  );
}

export default App;
