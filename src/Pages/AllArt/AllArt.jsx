import React from 'react';
import { Helmet } from 'react-helmet';
import { FaRegStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const AllArt = () => {

    const allArt = useLoaderData()
    console.log(allArt)
    

    return (
        <div>
            <Helmet>
                <title>AllArt | Painting Pros</title>
            </Helmet>
            <h1 className='text-4xl text-center my-10'>All Painting</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:mx-32 gap-10 '>
                {
                    allArt.map(art => <div className='shadow-lg p-5 space-y-4'>
                        <div className='border-[12px] border-black p-5'>
                            <div className='relative '>
                                <div className='absolute right-0 flex justify-center items-center space-x-1 bg-[#4b8106] w-11 text-white opacity-100 '>
                                    <span>{art.rating}</span>
                                    <FaRegStar />
                                </div>
                                <img className='w-full h-[50vh] hover:opacity-75' src={art.image} alt="" />
                            </div>
                        </div>

                        <div className='flex items-center justify-between'>
                            <h1 className='text-[22px] font-work'>{art.item_name}</h1>
                            <p className='text-[18px]'>${art.price}</p>
                        </div>
                        <div className='mt-5'>
                            <Link to={`/all_craft_details/${art._id}`}>
                                <button className='btn'>View Details </button>
                            </Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllArt;