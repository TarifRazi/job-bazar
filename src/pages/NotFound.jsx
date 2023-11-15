import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div>
            <div className="text-center w-full">
            <img src={'https://i.ibb.co/jgDx1fh/page-not-found.png'} alt="" />

            </div>
            <Link to={'/'}>Home</Link>
        </div>
    );
};

export default NotFound;