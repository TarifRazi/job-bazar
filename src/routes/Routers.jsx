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
import UpdateAJob from "../pages/UpdateAJob";
import PrivateRoute from "./PrivateRoute";

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
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
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
                element: <PrivateRoute><Details></Details></PrivateRoute> ,
                loader: ({params}) => fetch(`http://localhost:5000/allJobs/${params.id}`)
            },
            {
                path: '/appliedJobs',
                element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>,
                loader: () => fetch(`http://localhost:5000/appliedJobs`)
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/addJob',
                element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
            },
            {
                path:'/myJobs',
                element:<PrivateRoute><MyJobs></MyJobs></PrivateRoute>
            },
            {
                path:'/updateAJob/:id',
                element:<PrivateRoute><UpdateAJob></UpdateAJob></PrivateRoute> ,
                loader:({params})=>fetch(`http://localhost:5000/allJobs/${params.id}`)
            }
        ]
    }
]);

export default routes