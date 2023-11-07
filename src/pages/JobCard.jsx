
import { Link } from "react-router-dom";


const JobCard = ({ job }) => {

    const { jobTitle, category, applicationDeadline, image, _id } = job

    

    return (
        <div>
            <div className="card card-compact w-full lg:w-96 bg-base-100 shadow-xl hover:shadow-xl hover:shadow-blue-600">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-playfair font-bold">{jobTitle}</h2>
                    <p className="text-xl">{category}</p>
                    <p className="text-xl text-red-600 font-bold">{applicationDeadline}</p>
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