import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { AuthContect } from '../../Provider/AuthProvider';


const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContect)

    const handleSingOut = () =>{
        signOutUser()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error.message)
        })
    }


    const links = <>
        <li className='font-work font-[500] text-[14px]'>
            <NavLink to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500" : ""
                }
            >Home</NavLink>
        </li>
        <li>
            <NavLink className="font-work font-[500] text-[14px]" to="/all_art">All Art</NavLink>
        </li>
        <li>
            <NavLink className="font-work font-[500] text-[14px]" to="/add_craft">Add Craft</NavLink>
        </li>
        <li>
            <NavLink className="font-work font-[500] text-[14px]" to="/my_art">My Art</NavLink>
        </li>
    </>


    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-work font-[500] text-[14px]">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-3">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-20 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li>
                                    <span onClick={handleSingOut}>Logout</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                        : <Link to="/login">
                            <div className='flex items-center text-[16px] space-x-2'>
                                <FaRegUser className='text-2xl' />
                                <h1>Login</h1>
                            </div>

                        </Link>
                }



            </div>
        </div>
    );
};

export default Navbar;