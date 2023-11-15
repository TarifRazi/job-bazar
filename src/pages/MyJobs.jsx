import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyJobs = () => {

    const { user } = useContext(AuthContext)

    const [myJobs, setMyJobs] = useState([])


    useEffect(() => {
        fetch(`https://job-bazar-server.vercel.app/myJobs/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setMyJobs(data))

        
    }, [user])



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

                fetch(`http://localhost:5000/myJobs/${_id}`, {
                    method: 'DELETE'
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

                        const remaining = myJobs.filter(job => job._id !== _id)
                        setMyJobs(remaining)
                    })

            }
        });
    }

    return (
        <div>
            {
                myJobs.map((_job) => (
                    <div key={_job._id} className="card card-side bg-base-100 shadow-xl">

                        <figure><img src={_job.image} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{_job.jobTitle}</h2>
                            <h2 className="card-title">{_job.category}</h2>
                            <p>{_job.details}</p>
                            <h3>{_job.salaryRange}</h3>
                            <h3>{_job.applicationDeadline}</h3>
                            <div className="card-actions justify-end">
                                <Link to={`/updateAJob/${(_job._id)}`}>
                                    <button className="btn btn-primary">Update</button>

                                </Link>
                                <button onClick={() => handleDelete(_job._id)} className="btn btn-error">Delete</button>
                            </div>
                        </div>

                    </div>
                ))
            }
        </div>
    );
};

export default MyJobs;