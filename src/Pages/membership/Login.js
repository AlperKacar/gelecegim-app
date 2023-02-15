import { Helmet} from "react-helmet"
import { Formik, Form, Field, ErrorMessage } from 'formik';

function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Formik
      initialValues={{
        email:'', 
        password:''
      }}
      
      >
       {({ isSubmitting }) => (
         <Form>
           <input/>
           <input/>
           <button></button>
           <div>
            <div>
              <span>

              </span>
            </div>
           </div>
           <a>

           </a>
           <a>

           </a>
         </Form>
       )}
      </Formik>
    </div>
  )
}

export default Login