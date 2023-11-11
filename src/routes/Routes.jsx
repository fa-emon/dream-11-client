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
import DisplaySinglePlayerDetails from "../pages/Home/DisplayAllCountry/DisplaySinglePlayerDetails/DisplaySinglePlayerDetails";
import MyDream11 from "../pages/MyDream11/MyDream11/MyDream11";

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
                path: '/player-details/:id',
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5001/player-details/${params.id}`);
                },
                element:<PrivateRoute><DisplaySinglePlayerDetails></DisplaySinglePlayerDetails></PrivateRoute>
            },
            {
                path: '/myDream11',
                loader: async () => {
                    return fetch("http://localhost:5001/mySquad");
                  },
                element: <PrivateRoute><MyDream11></MyDream11></PrivateRoute>
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