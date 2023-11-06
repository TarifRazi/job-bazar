import { Link } from 'react-router-dom';
import registrationImg from '../assets/sign-up-form.png'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Registration = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegistration = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name,photo,email,password);

        createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log(error))

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col gap-10 justify-between lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={registrationImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegistration}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Registration" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-error text-white" type="submit" value="Registration with Google" />
                            </div>

                            <p>Already have account? <Link className='text-emerald-400' to={'/login'}>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;