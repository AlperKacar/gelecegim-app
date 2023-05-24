import Router from "./Router/index";
import { useSelector } from "react-redux";
import LoadingTruck from "./Shared/commonComponents/loading/LoadingTruck";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    // Belirli bir süre sonra işlevi çalıştırmak için setInterval kullanımı
    const interval = setInterval(() => {
      // Burada yapılması gereken işlemler
      // Örneğin, API'ye bir istek göndermek
      axios
        .get("http://localhost:3001/delete-unverified-users")
        .then((response) => {
          // İstek başarılıysa gerekli işlemleri yapabilirsiniz
        })
        .catch((error) => {
          // İstek sırasında hata oluşursa hata işleme
        });
    }, 48 * 60 * 60 * 1000); // 48 saat = 48 * 60 * 60 * 1000 milisaniye

    // Komponentin temizlenmesi durumunda setInterval'i durdurma
    return () => clearInterval(interval);
  }, []);
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
