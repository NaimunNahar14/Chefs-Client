import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import RecipesLayout from "../layout/RecipesLayout";
import Recipes from "../pages/Recipes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
            
        ]
    },
    {
        path:'recipes',
        element:<RecipesLayout></RecipesLayout>,
        children: [
            {
                path:'/:id',
                element: <Recipes></Recipes>
            }
        ]
    }
])

export default router;