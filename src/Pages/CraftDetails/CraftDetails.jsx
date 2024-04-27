import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { IoMdPricetags } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { BiCustomize } from "react-icons/bi";
import { CgShutterstock } from "react-icons/cg";
import { FaRegStar } from 'react-icons/fa';


const CraftDetails = () => {

    const paintingData = useLoaderData()
    const { id } = useParams()
    const check = paintingData.find(data => data._id === id)
    console.log(check)
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='flex justify-center space-x-10'>
                <div className='w-[30%] border-8 border-black p-3'>
                    <img className='w-full h-[80vh]' src={check.image} alt="" />
                </div>
                <div className='space-y-5 w-[40%]'>
                    <div className='border-b pb-3'>
                        <h2 className='text-[30px] font-work'>{check.item_name}</h2>
                    </div>
                    <div className='flex items-center space-x-20 text-[18px] border-b pb-3'>
                        <span className=''>{check.subcategory_Name}</span>
                        <span>{check.processing_time}</span>
                    </div>
                    <div className='flex items-center space-x-2 border-b pb-3'>
                        <IoMdPricetags className='text-2xl' />
                        <h1 className='text-2xl'>${check.price}</h1>
                    </div>

                    <div className='flex items-center space-x-2 border-b pb-3'>
                        <FaRegStar className='text-[19px] text-yellow-600' />
                        <h1 className='text-[19px]'>{check.rating}</h1>
                    </div>
                    <div className='flex items-center space-x-3 border-b pb-3'>
                        <CgShutterstock className='text-[19px] ' />
                        <h1 className='text-[18px]'>{check.stockStatus}</h1>
                    </div>
                    <div>
                        <p className='text-[16px] tracking-[0.5px]'>{check.short_description}</p>
                    </div>
                    <Link to='/'>
                        <button className='btn mt-8'>Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CraftDetails;