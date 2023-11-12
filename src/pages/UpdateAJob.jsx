import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateAJob = () => {

    const job = useLoaderData()
    const { _id, image, jobDetails, jobTitle, userName, category, salaryRange, postingDate, applicantNumber, applicationDeadline } = job


    console.log(job)

    const handleUpdateJob = event => {
        event.preventDefault();

        const form = event.target

        const image = form.image.value;
        const jobTitle = form.jobTitle.value;
        const userName = form.userName.value;
        const category = form.category.value;
        const salaryRange = form.salaryRange.value;
        const jobDetails = form.jobDetails.value;
        const postingDate = form.postingDate.value;
        const applicationDeadline = form.applicationDeadline.value;
        const applicantNumber = form.applicantNumber.value;

        const updateJob = { image, jobDetails, jobTitle, userName, category, salaryRange, postingDate, applicantNumber, applicationDeadline }

        console.log(updateJob)

        fetch(`http://localhost:5000/myJobs/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated job!",
                        text: "You updated yor job",
                        icon: "success"
                    });
                }
            })
    }

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-playfair font-bold pl-7">Update your Job: {jobTitle}</h1>
            <form onSubmit={handleUpdateJob} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Picture URL of the Job Banner</span>
                    </label>
                    <input name="image" defaultValue={image} type="text" placeholder="Photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input name="jobTitle" defaultValue={jobTitle} type="text" placeholder="Job Title" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Logged In User Name</span>
                    </label>
                    <input name="userName" defaultValue={userName} type="text" placeholder="Logged In User Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Category</span>
                    </label>
                    <select name="category" defaultValue={category} className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Job Category</option>
                        <option>{category}</option>
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
                    <input name="salaryRange" defaultValue={salaryRange} type="text" placeholder="Salary range" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>
                    <textarea name="jobDetails" defaultValue={jobDetails} placeholder="Job Description" id="" cols="30" rows="5" className="p-4 rounded-md bg-base-300"></textarea>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Posting Date</span>
                    </label>
                    <input name="postingDate" defaultValue={postingDate} type="date" placeholder="Job Posting Date" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Application Deadline</span>
                    </label>
                    <input name="applicationDeadline" defaultValue={applicationDeadline} type="date" placeholder="Application Deadline" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Applicants Number</span>
                    </label>
                    <input name="applicantNumber" defaultValue={applicantNumber} type="text" placeholder="Job Applicants Number" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-error text-white" type="submit" value="Update JOb" />
                </div>
            </form>
        </div>
    );
};

export default UpdateAJob;