
const AddJob = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <div>
                <div className="flex justify-center">
                    <img className="text-center" src={`https://i.ibb.co/L58Z7Fk/content-moderation.gif`} alt="" />

                </div>
                <div>
                    <form className="card-body">
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
                            <select className="select select-bordered w-full max-w-xs">
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
                            <input name=" salaryRange" type="text" placeholder="Salary range" className="input input-bordered" required />
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
                            <input type="password" placeholder="Job Applicants Number" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddJob;