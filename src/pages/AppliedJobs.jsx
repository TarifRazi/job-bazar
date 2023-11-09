import { useLoaderData } from "react-router-dom";
import AppliedJobsCard from "./AppliedJobsCard";


const AppliedJobs = () => {

    const jobsApplied = useLoaderData()

    return (
        <div className="max-w-7xl mx-auto">
            {
                        jobsApplied.map(jobsApplied => <AppliedJobsCard
                            key={jobsApplied._id}
                            jobsApplied={jobsApplied}
                        ></AppliedJobsCard>)
                    }
        </div>
    );
};

export default AppliedJobs;