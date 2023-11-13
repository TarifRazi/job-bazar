import { useState } from "react";
import Swal from "sweetalert2";

const AppliedJobsCard = ({jobsApplied}) => {

    const [appliedJobs, setAppliedJobs] =useState([])

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/appliedJobs/${_id}`,{
                    method:'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your job has been deleted.",
                                icon: "success"
                            });
                        }

                        const remaining = appliedJobs.filter(job=>job._id !== _id)
                        setAppliedJobs(remaining)
                    })

            }
        });
    }

    const {_id, image, details,category,jobTitle,applicationDeadline,salaryRange} = jobsApplied

    

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
                        <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobsCard;