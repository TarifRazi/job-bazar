
const AppliedJobsCard = ({jobsApplied}) => {

    const {image, details,category,jobTitle,applicationDeadline,salaryRange} = jobsApplied

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-lg my-8 shadow-blue-500">
                <figure><img src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{jobTitle}</h2>
                    <h2 className="card-title">{category}</h2>
                    <p>{details}</p>
                    <p>{applicationDeadline}</p>
                    <p>{salaryRange}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobsCard;