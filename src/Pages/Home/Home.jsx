import React from 'react';
import Slider from '../Slider/Slider';
import { Link, useLoaderData } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa6";

const Home = () => {

    const paintingData = useLoaderData()

    

    return (
        <div>
            <div>
                <Slider></Slider>
            </div>
            <div>
                <h1 className='text-4xl text-center my-10'>Top Product</h1>
                <div className='lg:mx-32 mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                    {
                        paintingData.map(painting => <div key={painting._id}>
                            <div className='border-[12px] border-black p-5 '>
                                <div className='relative '>
                                    <div className='absolute right-0 flex justify-center items-center space-x-1 bg-[#4b8106] w-11 text-white opacity-100 '>
                                        <span>{painting.rating}</span>
                                        <FaRegStar />
                                    </div>
                                    <img className='w-full h-[60vh] hover:opacity-75' src={painting.image} alt="" />
                                </div>
                            </div>
                            <div className='space-y-7 mt-4'>
                                <h1 className='text-[22px] font-work'>{painting.item_name}</h1>
                                <div className='flex items-center justify-between'>
                                    <p className='text-[18px]'>${painting.price}</p>
                                    <Link to={`/craft_details/${painting._id}`}>
                                        <span className='border border-spacing-6 border-[#0077b6] hover:bg-gradient-to-r from-[#0fca66] to-[#09823b] px-5 py-4 bg-opacity-0'>View Details </span>
                                    </Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div>
                    
                </div>
            </div>

        </div>
    );
};

export default Home;