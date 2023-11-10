import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Shared/Login/Login";
import Register from "../pages/Shared/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DisplayAllCountry from "../pages/Home/DisplayAllCountry/DisplayAllCountry";
import PrivateRoute from "./PrivateRoute";
import AddPlayer from "../pages/AddPlayer/AddPlayer";
import DisplaySpecificCountryAllPlayer from "../pages/Home/DisplayAllCountry/DisplaySpecificCountryAllPlayer/DisplaySpecificCountryAllPlayer";

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
                path: '/player/:country',
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5001/player/${params.country}`);
                },
                element: <DisplaySpecificCountryAllPlayer></DisplaySpecificCountryAllPlayer>
            },
            {
                path: '/addPlayer',
                element: <PrivateRoute><AddPlayer></AddPlayer></PrivateRoute>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    },
]);