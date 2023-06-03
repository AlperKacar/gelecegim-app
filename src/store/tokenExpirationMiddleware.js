import { toast } from "react-toastify";
import { setLogout } from "./userInformation";
import { createBrowserHistory } from "history";

let timeoutVar;
const history = createBrowserHistory();

const tokenExpirationMiddleware = (store) => (next) => (action) => {
  if (action.type === "userInformation/setTime") {
    clearTimeout(timeoutVar);
    const expirationTime = 3600; // 1 saatlik oturum süresi
    timeoutVar = setTimeout(() => {
      store.dispatch(setLogout());
      toast.dark("Kullanım Süreniz Dolmuştur Tekrar Giriş yapın.");
      history.push("/auth/login"); // auth/login sayfasına yönlendir
    }, expirationTime * 1000);
  }
  return next(action);
};

export default tokenExpirationMiddleware;
