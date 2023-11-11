import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const AddJob = () => {

    const {user} = useContext(AuthContext)

    console.log(user)

    const handleAddJob = event => {
        event.preventDefault();

        const form=event.target

        const photoURL = form.photoURL.value;
        const jobTitle = form.jobTitle.value;
        const userName = form.userName.value;
        const category = form.category.value;
        const salaryRange = form.salaryRange.value;
        const jobDetails = form.jobDetails.value;
        const postingDate = form.postingDate.value;
        const applicationDeadline = form.applicationDeadline.value;
        const applicantNumber = form.applicantNumber.value;

        const newJob = {photoURL, jobDetails, jobTitle, userName, userEmail:user?.email, category, salaryRange, postingDate, applicantNumber, applicationDeadline}

        console.log(newJob)

        fetch('http://localhost:5000/allJobs', {
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newJob)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                  });
            }
        })
    }

    return (
        <div className="max-w-5xl mx-auto">
            <div>
                <div className="flex justify-center">
                    <img className="text-center" src={`https://i.ibb.co/L58Z7Fk/content-moderation.gif`} alt="" />

                </div>
                <div>
                    <form onSubmit={handleAddJob} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Picture URL of the Job Banner</span>
                            </label>
                            <input name="photoURL" type="text" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Title</span>
                            </label>
                            <input name="jobTitle" type="text" placeholder="Job Title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Logged In User Name</span>
                            </label>
                            <input name="userName" type="text" placeholder="Logged In User Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Category</span>
                            </label>
                            <select name="category" className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Job Category</option>
                                <option>On Site</option>
                                <option>Remote</option>
                                <option>Part-Time</option>
                                <option>Hybrid</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Salary range</span>
                            </label>
                            <input name="salaryRange" type="text" placeholder="Salary range" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Description</span>
                            </label>
                            <textarea name="jobDetails" placeholder="Job Description" id="" cols="30" rows="5" className="p-4 rounded-md bg-base-300"></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Posting Date</span>
                            </label>
                            <input name="postingDate" type="date" placeholder="Job Posting Date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Application Deadline</span>
                            </label>
                            <input name="applicationDeadline" type="date" placeholder="Application Deadline" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Applicants Number</span>
                            </label>
                            <input name="applicantNumber" type="text" placeholder="Job Applicants Number" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-error text-white" type="submit" value="Add JOb" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddJob;