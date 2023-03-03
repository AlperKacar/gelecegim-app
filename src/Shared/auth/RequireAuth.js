import { memo } from "react";
import {Navigate, useLocation} from"react-router-dom"
import {useSelector} from "react-redux"
import { userInformationData } from "../../store/private/userInformationSlice";

const RequireAuth = memo (({children}) => {

    const  {isLoggedIn}  = useSelector( userInformationData);
    const location = useLocation()

    if (!isLoggedIn) {
        return <Navigate to="/auth/login" replace={true} state={{
            return_url: location.pathname
        }}
        
         />
}


return children
})
export default  RequireAuth