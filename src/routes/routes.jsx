import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
// import NewDetailsPage from "../pages/NewDetailsPage";
import RecipesLayout from "../layout/RecipesLayout";
import NewDetailsPage from "../pages/NewDetailsPage";
import BlogsPage from "../pages/BlogsPage";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Shared/Login";
import Register from "./Register";
// import NewDetailsPage from "../pages/NewDetailsPage";
// import Details from "../pages/Details";
// import RecipesLayout from "../layout/RecipesLayout";
// import Card from '../pages/Card';



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
                element:<NewDetailsPage></NewDetailsPage>,
                loader:({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
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
            }
         ]
    }

   


    
])

export default router;