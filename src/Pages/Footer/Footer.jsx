import React from 'react';
import { FaFacebook, FaHome, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa';
import { IoCallOutline } from 'react-icons/io5';
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className='bg-black'>
            <footer className="footer p-10  text-white font-work">
                <nav>
                    <h6 className="font-work font-bold text-[18px]">STORE INFORMATION</h6>
                    <a className="link link-hover flex items-center text-1xl text-work font-bold text-[#ffffffb5]">
                        <FaHome className='text-[25px] me-2' />
                        Painting Pros United States
                    </a>
                    <a className="link link-hover flex items-center text-1xl  text-work font-bold text-[#ffffffb5]">
                        <IoCallOutline className='text-[25px] me-2' />
                        +12145796
                    </a>
                    <a className="link link-hover flex items-center text-1xl text-work font-bold text-[#ffffffb5]">
                        <MdEmail className='text-[25px] me-2' />
                        paintingpros@gmail.com
                    </a>
                </nav>
                <nav>
                    <h6 className="font-work font-bold text-[18px]">Your Account</h6>
                    <a className="link link-hover font-work font-bold text-[#ffffffb5]">Personal info</a>
                    <a className="link link-hover font-work font-bold text-[#ffffffb5]">Orders</a>
                    <a className="link link-hover font-work font-bold text-[#ffffffb5]">Credit slips</a>
                    <a className="link link-hover font-work font-bold text-[#ffffffb5]">Address</a>
                </nav>
                <nav>
                    <h6 className="font-work font-bold text-[18px]">Products</h6>
                    <a className="link link-hover font-work font-bold text-[#ffffffb5]">Landscape Painting</a>
                    <a className="link link-hover font-work font-bold text-[#ffffffb5]">Portrait Drawing</a>
                    <a className="link link-hover font-work font-bold text-[#ffffffb5]">Watercolour Painting</a>
                    <a className="link link-hover font-work font-bold text-[#ffffffb5]">Oil Painting</a>
                </nav>
                <nav>
                    <h6 className="font-work font-bold text-[18px]">Our Company</h6>
                    <a className=" link-hover font-bold text-[#ffffffb5]">About us</a>
                    <a className="link link-hover font-bold text-[#ffffffb5]">Contact</a>
                    <a className="link link-hover font-bold text-[#ffffffb5]">Painting and drowing</a>
                    <a className="link link-hover font-bold text-[#ffffffb5]">Press kit</a>
                </nav>
            </footer>
            <div className='flex flex-col  justify-center items-center text-white space-y-3 px-5 py-5'>
                <h2 className='text-2xl '>SIGN UP TO NEWSLETTER</h2>
                <p className='font-[500] text-[15px] tracking-[1px] text-[#ffffffc4] text-center'>If you wish to unsubscribe at any time, please refer to our contact information in the legal notice.</p>
                <div className='flex items-center text-4xl space-x-3'>
                    <FaFacebook className='text-[#1877F2]' />
                    <FaTwitter className='text-[#1DA1F2]' />
                    <FaPinterest className='text-[#E60023]' />
                    <FaLinkedin className='text-[#0077b5 ]' />
                </div>
            </div>
        </div>
    );
};

export default Footer;