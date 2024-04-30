import React from 'react';
import { CgShutterstock } from 'react-icons/cg';
import { FaRegStar } from 'react-icons/fa';
import { IoMdPricetags } from 'react-icons/io';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const AllCraftDetails = () => {

    const allArts = useLoaderData()
    const { id } = useParams()
    const check = allArts.find(art => art._id === id)
    console.log(check)

    return (
        <div>
            <div className='flex flex-col lg:flex-row justify-center lg:items-center min-h-screen space-x-10'>
                <div>
                    <img className='lg:w-96' src={check.image} alt="" />
                </div>
                <div className='space-y-5 lg:w-[40%]'>
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
                    <Link to='/all_art'>
                        <button className='btn mt-8'>Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllCraftDetails;