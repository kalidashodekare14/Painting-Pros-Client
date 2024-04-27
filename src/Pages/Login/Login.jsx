import React, { useContext } from 'react';
import google from '../../assets/google.png'
import github from '../../assets/github.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContect } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const { loginUser, googleSignIn, githubSignIn } = useContext(AuthContect)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const from = e.target
        const email = from.email.value
        const password = from.password.value
        console.log(email, password)
        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
                toast.success("Your Login Succeessfuly")
            })
            .catch(error => {
                console.log(error.message)
                toast.error("Your Email And Password Something Rong")
            })
    }


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleGitHubSignIn = () => {
        githubSignIn()
            .then(result => {
                console.log(result)
            })
            .then(error => {
                console.log(error.message)

            })
    }

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='lg:w-1/2 border p-10'>
                <h1 className='text-4xl text-center space-y-10 font-work'>Log In</h1>
                <form onSubmit={handleLogin} className='space-y-3'>
                    <div className='flex flex-col space-y-2'>
                        <label className='text-[17px]' htmlFor="">Email</label>
                        <input className='input input-bordered' type="email" name="email" placeholder='Enter Your Email' />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label className='text-[17px]' htmlFor="">Password</label>
                        <input className='input input-bordered' type="password" placeholder='Password' name="password" />
                    </div>
                    <div className='text-center'>
                        <input className='input input-bordered lg:w-52 w-full' type="submit" value="Login" />
                    </div>
                </form>
                <div className='space-y-5 mt-5'>
                    <div className='flex items-center space-x-3'>
                        <div className='w-[50%] border'>
                        </div>
                        <span className='text-[17px]'>Or</span>
                        <div className='w-[50%] border'></div>
                    </div>
                    <div className='flex justify-center items-center space-x-5'>
                        <div onClick={handleGoogleSignIn} className='btn flex items-center'>
                            <img className='w-5' src={google} alt="" />
                            <span>Log in with Google</span>
                        </div>
                        <div onClick={handleGitHubSignIn} className='btn flex items-center'>
                            <img className='w-5' src={github} alt="" />
                            <span>Log in with Google</span>
                        </div>
                    </div>

                </div>
                <div className='my-10'>
                    <Link to="/register">
                        <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                            Don’t have an account yet?
                            <a href="#!" className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700
                        text-red-500
                        "

                            >
                                Sign up here{" "}
                            </a>
                        </p>
                    </Link>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;