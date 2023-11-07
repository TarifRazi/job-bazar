import { useLoaderData } from "react-router-dom";



const Details = () => {

    const data = useLoaderData()
    console.log(data)

    const handleAppliedJob = (event) => {
        event.preventDefault();

        fetch('http://localhost:5000/appliedJobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('ljgljf')
            }
        })
        .catch(error => console.error('Error:', error));
    }

    return (
        <div>
            <div className="my-8 card lg:card-side bg-base-100 shadow-xl">
                <figure className="w-2/3"><img src={data.image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data.jobTitle}</h2>
                    <h2 className="card-title">{data.category}</h2>
                    <p>{data.details}</p>
                    <p>Job posting date: {data.jobPostingDate}</p>
                    <p>Application deadline: {data.applicationDeadline}</p>
                    <p>Salary range{data.salaryRange}</p>
                    <p>Applicants: {data.jobApplicantsNumber}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={handleAppliedJob}>Apply</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;