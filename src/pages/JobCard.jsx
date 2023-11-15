
import { Link } from "react-router-dom";


const JobCard = ({ job }) => {

    const { jobTitle, category, applicationDeadline, image, _id } = job



    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl w-full hover:shadow-xl hover:shadow-blue-600">
                <figure className="w-full lg:w-1/2"><img src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{jobTitle}</h2>
                    <h2 className="card-title">{category}</h2>
                    <p>{applicationDeadline}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/jobDetails/${_id}`}>
                            <button className="btn btn-primary">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;