import { createBrowserRouter  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Content from "../pages/Content";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter ([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/content',
                element: <PrivateRoutes><Content></Content></PrivateRoutes>
            }
        ]
    }
])

export default router;