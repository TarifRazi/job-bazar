import { Link } from "react-router-dom";
import { FaAlignJustify } from 'react-icons/fa';
import userImg from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    // console.log(user)

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div className="sticky z-[999]">
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl">Job Bazar</Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={userImg} />
                                
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            {user?.email?<li>{user.email}</li>: <li>no user is loged in</li>}
                            <li>

                                <Link to={'/profile'}>Profile</Link>
                            </li>
                            {user?.email ? <li><button onClick={handleLogout}>Logout</button></li>
                                : <li><Link to={'/login'}>Login</Link></li>}
                        </ul>
                    </div>

                    <div>
                        <div className="order-1  drawer-end z-50">
                            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost text-2xl"> <FaAlignJustify /></label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                                    {/* Sidebar content here */}
                                    <li><Link to={'/'}>Home</Link></li>
                                    <li><Link to={'/appliedJobs'}> Applied Jobs</Link></li>
                                    <li><Link to={'/addJob'}> Add A Job</Link></li>
                                    <li><Link to={'/myJobs'}>My Jobs</Link></li>
                                    <li><Link to={'/blogs'}>Blogs</Link></li>
                                    <li><Link to={'/login'}>Login</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;