import Router from "./Router/index"
import { useSelector } from "react-redux";
import LoadingTruck from "./Shared/commonComponents/loading/LoadingTruck";
import { useEffect,useState } from "react";
import { userInformationData } from "./store/private/userInformationSlice";


function App() {

  const isLoggedIn = useSelector(userInformationData)
  const [redirect, setRedirect] = useState(false)

  useEffect(() =>{
    let timeout = setTimeout(() => {
      setRedirect(true)
    },1000)
    return() => {
      clearTimeout(timeout)
    }
  },[])

  if(isLoggedIn && !redirect){
    return<LoadingTruck/>
  }

  return (
    <Router/>
  )
}

export default App;