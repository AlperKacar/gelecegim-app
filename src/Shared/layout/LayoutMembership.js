import { Helmet} from "react-helmet"
import { Outlet } from 'react-router-dom'

function LayoutMembership() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Outlet/>
    </div>
  )
}

export default LayoutMembership