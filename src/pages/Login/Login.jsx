
import { Link, useLocation, useNavigate } from "react-router-dom";

import {  useContext, useState } from "react";

import { FaGoogle,FaGithub } from "react-icons/fa";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const { signIn, googleLogin,githubLogin,user } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState("");
    const [sucess, setSucess] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        setRegisterError("");
        setSucess("");
        signIn(email, password).then(result => {
            //navigate after login
            navigate(location?.state ? location.state : '/');
            console.log(result.user);
            setSucess('User Logged Sucessfully');
        }).catch(error => {
            console.error(error);
            setRegisterError(error.message);
        })
    }
    const handleGoogleLogin = () => {
        googleLogin().then(result => {
            console.log(result.user);
            setUser(result.user);
        }).catch(error => {
            console.error(error);
        })
    }
    const handleGithubLogin=()=>{
        githubLogin().then(result => {
            console.log(result.user);
              setUser(result.user);
        }).catch(error => {
            console.error(error);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Login</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input class type="email" name="email" placeholder="Enter Your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter Your password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        {
                            registerError && <small className="text-red-800 text-center">{registerError}</small>
                        }
                        {
                            sucess &&
                            alert("user Logged in Sucessfully")
                        }
                        <p className="text-center mb-4">Do not have an account? <Link className="text-blue-700 font-bold" to="/register">Register</Link></p>
                        <p className="text-center font-poppins mb-3">Or Sign Up With</p>

                        <div className="flex items-center justify-center gap-3 mb-3">
                            {/* <button onClick={handleGoogleLogin}>Google</button> */}
                            <FaGoogle onClick={handleGoogleLogin}></FaGoogle>
                            <FaGithub onClick={handleGithubLogin}></FaGithub>
                        </div>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;
