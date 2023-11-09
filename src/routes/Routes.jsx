import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Shared/Login/Login";
import Register from "../pages/Shared/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DisplayAllCountry from "../pages/Home/DisplayAllCountry/DisplayAllCountry";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
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
                path: '/country',
                element: <DisplayAllCountry></DisplayAllCountry>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    },
]);