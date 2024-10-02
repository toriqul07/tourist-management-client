import { Link } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [sucess, setSucess] = useState('');
    const handleRegister = e => {
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);
        setRegisterError("");
        setSucess("");
        if (password.length < 6) {
            setRegisterError("Password must be six character");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your Password should have at least one uppercase characters.');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError('Your Password should have at least one uppercase characters.');
            return;
        }

        //create user
        createUser(email, password).then(result => {
            console.log(result.user);
            setSucess('User Created Sucessfully');
        })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Register</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input class type="text" name="name" required placeholder="Enter Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URl</span>
                                </label>
                                <input class type="text" name="photo" required placeholder="Enter Your Photo" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input class type="email" name="email" required placeholder="Enter Your Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative border">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Enter Your password"
                                        className="input input-bordered w-full"
                                        required />
                                    <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        {
                            registerError && <small className="text-red-800 text-center">{registerError}</small>
                        }
                        {
                            sucess &&
                            alert("user Create Sucessfully")
                        }
                        <p className="text-center mb-4">Already have an account? <Link className="text-blue-700 font-bold" to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;