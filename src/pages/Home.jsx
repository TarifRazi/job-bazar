import { useLoaderData } from 'react-router-dom';
import employ from '../assets/man-at-the-office.png'
import JobCard from './JobCard';
import { useState } from 'react';


const Home = () => {

    const jobs = useLoaderData();

    const [selectedCategory, setSelectedCategory] = useState('All category'); // Step 1: Add state

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value); // Step 2: Update selected category
    };

    const filteredJob = selectedCategory === 'All category' ? jobs : jobs.filter(job => job.category === selectedCategory);


    return (
        <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col md:flex-row lg:justify-between text-center'>
                <div className='flex flex-col gap-5 items-center justify-center w-full lg:w-1/2'>
                    <h1 className='text-4xl'>Welcome to
                        <br />
                        <span className='text-6xl font-extrabold text-red-600 font-playfair'>Job Bazar</span>
                    </h1>
                    <p className='text-2xl'>All jobs solution is here</p>
                </div>
                <div>
                    <img src={employ} />
                </div>
            </div>

            <h1 className='text-2xl font-playfair font-bold py-5'>Find your job here</h1>


            <select
                name='category'
                className="select select-accent w-full max-w-xs"
                value={selectedCategory} // Step 4: Set the selected value
                onChange={handleCategoryChange} // Step 2: Add event handler
            >
                <option value='All category'>All category</option>
                <option value='On Site Job'>On Site Job</option>
                <option value='Remote Job'>Remote Job</option>
                <option value='Part Time'>Part Time</option>
                <option value='Hybrid'>Hybrid</option>
            </select>

            <div className='flex justify-center my-8'>
                <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5 items-center align-middle w-full'>


                    {
                        filteredJob.map(job => <JobCard
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