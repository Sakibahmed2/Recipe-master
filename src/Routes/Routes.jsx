import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import ChefDetails from "../component/ChefDetails/ChefDetails";
import ErrorPage from "../component/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/recipes/:id',
                element: <ChefDetails></ChefDetails>,
                loader: ({ params }) => fetch(`https://recipe-master-server-sakibahmed2.vercel.app/chef/${params.id}`)
            }
        ]
    }

])

export default router;