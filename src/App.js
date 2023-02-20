import Router from "./Router/index"
import { useSelector } from "react-redux";
import LoadingTruck from "./Shared/commonComponents/loading/LoadingTruck";
import { useEffect,useState } from "react";


function App() {

  const user = useSelector(state => state.auth.user)
  const [redirect, setRedirect] = useState(false)

  useEffect(() =>{
    let timeout = setTimeout(() => {
      setRedirect(true)
    },1000)
    return() => {
      clearTimeout(timeout)
    }
  },[])

  if(!user && !redirect){
    return<LoadingTruck/>
  }

  return (
    <Router/>
  )
}

export default App;