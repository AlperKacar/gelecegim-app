import Home from "../Pages/Home"
import KategoriLayout from "../Pages/Kategori/KategoriLayout"
import Kurum from "../Pages/Kategori/Kurum"
import IsIlani from "../Pages/Kategori/IsIlani"
import OzelDers from "../Pages/Kategori/OzelDers"
import AuthLayout from "../Admin/AuthLayout"
import AdminLogin from "../Admin/AdminLogin"
import KurumKayit from "../Pages/KurumKayit"
import Kayit from "../Pages/Kayit"
import Pages404 from "../Pages/Pages404"


const Routes = [
    {
        path:'/',
        element:<Home/>,
    },
    {
        path:'/kategori',
        element:<KategoriLayout/>,
        children: [
            {
                index: true,
                element:<Pages404/>
            },
            {
                path:'kurum',
                element:<Kurum/>
            },
            {
                path:'is-ilani',
                element:<IsIlani/>
            },
            {
                path:'ozel-ders',
                element:<OzelDers/>
            },
            {
                path: '*',
                element: <Pages404/>
            }
        ] 
    },
    {
        path:'/auth',
        element:<AuthLayout/>,
        children: [
            {
                index: true,
                element:<Pages404/>
            },
            {
                path:'admin-login',
                element:<AdminLogin/>
            },
            {
                path: '*',
                element: <Pages404/>
            }
        ]
    },
    {
        path: '/kurum-kayit',
        element: <KurumKayit/>
    },
    {
        path: '/kayit',
        element: <Kayit/>
    }, 
    {
        path: '*',
        element: <Pages404/>
    }

]

export default Routes