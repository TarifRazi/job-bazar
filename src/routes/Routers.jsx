import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../component/Root";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Details from "../pages/Details";
import AppliedJobs from "../pages/AppliedJobs";
import Blogs from "../pages/Blogs";
import AddJob from "../pages/AddJob";
import MyJobs from './../pages/MyJobs';

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
            {
                path: '/jobDetails/:id',
                element: <Details></Details>,
                loader: ({params}) => fetch(`http://localhost:5000/allJobs/${params.id}`)
            },
            {
                path: '/appliedJobs',
                element: <AppliedJobs></AppliedJobs>,
                loader: () => fetch(`http://localhost:5000/appliedJobs`)
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/addJob',
                element:<AddJob></AddJob>
            },
            {
                path:'/myJobs',
                element:<MyJobs></MyJobs>
            }
        ]
    }
]);

export default routes