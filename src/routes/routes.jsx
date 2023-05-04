import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import RecipesLayout from "../layout/RecipesLayout";
import NewDetailsPage from "../pages/NewDetailsPage";
import BlogsPage from "../pages/BlogsPage";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Shared/Login";
import Register from "./Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Shared/Terms";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:
        [
            {
                path:'/',
                element: <Home></Home>
            }
           
        ]

    },
    {
        path:'/chefs',
        element:<RecipesLayout></RecipesLayout>,
        children:[
            {
                path:':id',
                element:<PrivateRoute><NewDetailsPage></NewDetailsPage></PrivateRoute>,
                loader:({params}) => fetch(`https://the-recipe-server-naimunnahar14.vercel.app/chefs/${params.id}`)
            }
            
        ]
    },
    {
        path:'/',
        element:<RecipesLayout></RecipesLayout>,
        children:[
            {
                path:'/blog',
                element:<BlogsPage></BlogsPage>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            }
         ]
    }

   


    
])

export default router;