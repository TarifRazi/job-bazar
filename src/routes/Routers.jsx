import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../component/Root";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/allJobs')
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
        ]
    }
]);

export default routes