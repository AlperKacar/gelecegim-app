import { memo } from "react";
import {Navigate, useLocation} from"react-router-dom"
import {useSelector} from "react-redux"

const MembershipAuth = memo(({children}) => {

    const user = useSelector(state => state.auth.user)
    let location = useLocation()

    if (user) {
        return <Navigate to="/" replace={true} state={{
            return_url: location.pathname
        }}
        
        />
    }




return children
})

export default MembershipAuth