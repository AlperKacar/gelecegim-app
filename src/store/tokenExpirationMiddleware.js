import { setLogout } from "./userInformation";

const tokenExpirationMiddleware = (store) => (next) => (action) => {
  if (action.type === "user/setToken") {
    setTimeout(() => {
      store.dispatch(setLogout());
    }, 3600000); // 1 saatlik zaman aşımı süresi
  }

  return next(action);
};

export default tokenExpirationMiddleware;