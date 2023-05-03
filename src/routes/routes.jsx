import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
// import NewDetailsPage from "../pages/NewDetailsPage";
import SignleChef from "../pages/SignleChef";
import RecipesLayout from "../layout/RecipesLayout";
import Details from "../pages/Details";
import NewDetailsPage from "../pages/NewDetailsPage";
// import NewDetailsPage from "../pages/NewDetailsPage";
// import Details from "../pages/Details";
// import RecipesLayout from "../layout/RecipesLayout";
// import Card from '../pages/Card';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
    // {
    //     path:'/',
    //     element:<RecipesLayout></RecipesLayout>,
    //     children:[
    //         {
    //             path:'/blog',
    //             element:<blog></blog>
    //         }
    //     ]
    // }

   


    
])

export default router;