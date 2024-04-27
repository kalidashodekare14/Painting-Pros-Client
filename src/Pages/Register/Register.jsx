import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContect } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const { registerUser, updateProfileSystem } = useContext(AuthContect)


    const handleRegister = e => {
        e.preventDefault()
        const from = e.target
        const name = from.name.value
        const email = from.email.value
        const photoUrl = from.photo.value
        const password = from.password.value
        console.log(name, email, photoUrl, password)


        if (password.length < 6) {
           return toast.warning("Must be 6 Character Password");
        }
        else if (!/[A-Z]/.test(password)) {
          return  toast.warning("Any character must be uppercase.");
        }
        else if(!/[a-z]/.test(password)){
          return  toast.warning("Must Be Lowercase Character");
        }


        registerUser(email, password)
            .then(result => {
                console.log(result.user)
                updateProfileSystem(name, photoUrl)
                console.log(name, photoUrl)
                toast.success("Your Register Successfully");
            })
            .catch(error => {
                console.log(error.message)

            })
    }

    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='w-2/3 border p-5'>
                <h1 className='text-4xl text-center my-5'>Create An Account</h1>
                <form onSubmit={handleRegister} className='space-y-3 mx-20'>
                    <div className='flex flex-col'>
                        <label className='text-[17px] font-work font-[500]' htmlFor="">Name</label>
                        <input type="text" name="name" className="input input-bordered" />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-[17px] font-work font-[500]' htmlFor="">Email</label>
                        <input type="email" name="email" className="input input-bordered" />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-[17px] font-work font-[500]' htmlFor="">Photo Url</label>
                        <input type="photo" name="photo" className="input input-bordered" />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-[17px] font-work font-[500]' htmlFor="">Password</label>
                        <input type="password" name="password" className="input input-bordered" />
                    </div>
                    <input className='btn w-40 bg-[#3b71ca] text-white uppercase' type="submit" value="Sign Up" />
                </form>
                <div className='mx-20'>
                    <Link to="/login">
                        <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                            Don't have an account?{" "}
                            <a href="#!" className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700
                        text-red-500
                        "

                            >
                                Login
                            </a>
                        </p>
                    </Link>

                </div>
            </div>
            <ToastContainer />
        </div >
    );
};

export default Register;