import { useLoaderData } from 'react-router-dom';
import employ from '../assets/man-at-the-office.png'
import JobCard from './JobCard';


const Home = () => {

    const jobs = useLoaderData();

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='flex justify-between text-center '>
                <div className='flex flex-col gap-5 items-center justify-center w-1/2'>
                    <h1 className='text-4xl'>Welcome to
                        <br />
                        <span className='text-6xl font-extrabold text-red-600 font-playfair'>Job Bazar</span>
                    </h1>
                    <p className='text-2xl'>All jobs solution is here</p>
                </div>
                <img src={employ} />
            </div>

            <h1 className='text-2xl font-playfair font-bold py-5'>Find your job here</h1>

            <div className='flex justify-center'>
                <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5 items-center align-middle w-full'>

                    {
                        jobs.map(job => <JobCard
                            key={job._id}
                            job={job}
                        ></JobCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;