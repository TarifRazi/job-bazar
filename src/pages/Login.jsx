import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../assets/authentication.png';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';

const Login = () => {
  const { login } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    login(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const user = { email }


        axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
          .then(res => {
            console.log(res.data);
            if (res.data.success) {
              navigate(location?.state ? location.state : '/')

            }
          })
          .catch(function (error) {
            console.log(error);
          });


      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col gap-10 justify-between lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src={loginImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-error text-white"
                  type="submit"
                  value="Login with Google"
                />
              </div>

              <p>
                Do not have any account?
                <Link className="text-emerald-400" to="/registration">
                  Registration
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
