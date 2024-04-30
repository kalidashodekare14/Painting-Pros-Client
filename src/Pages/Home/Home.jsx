import React, { useEffect, useState } from 'react';
import Slider from '../Slider/Slider';
import { Link, useLoaderData } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import developer from '../../assets/developer.webp'
import designer1 from '../../assets/designer.jpg'
import designer2 from '../../assets/designer1.jpg'
import images from '../../assets/pSlider.webp'
import {Helmet} from "react-helmet";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './News.css'

import { FreeMode, Pagination } from 'swiper/modules';
import Categories from '../Categories/Categories';

const Home = () => {

    const paintingData = useLoaderData()




    return (
        <div>
            <Helmet>
                <title>Home | Painting Pros</title>
            </Helmet>
            <div>
                <Slider></Slider>
            </div>
            <div className='my-20'>
                <h2 className='text-center text-4xl'>Our Painting Pro History</h2>
                <div className='flex flex-col lg:flex-row items-center lg:mx-32 mx-5 my-20 space-x-7'>
                    <div className=''>
                        <img src={images} alt="" />
                    </div>
                    <div className='flex-1 space-y-3'>
                        <h1 className='text-3xl font-bold tracking-[1px]'>Crafted in a unique manner</h1>
                        <p className='text-[15px] leading-[1.5em] font-[400] text-[#130404c5]'>Embarking on a new journey, we leave behind the familiar shore. With eyes filled with wonder and hearts open wide, we greet the horizon's call. In each sunrise, we find a promise, in each sunset, a reflection. This voyage, our story, unfolds with every step we take.</p>
                        <div>
                            <a href="#">
                                <button className='hover:text-white border border-spacing-6 border-[#0077b6] hover:bg-gradient-to-r from-[#0fca66] to-[#09823b] px-5 py-4 bg-opacity-0'>View Details </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-4xl text-center my-10'>Top Product</h1>
                <div className='lg:mx-32 mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                    {
                        paintingData.slice(0, 6).map(painting => <div key={painting._id}>
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
                {/* category */}
                <div>
                    <Categories></Categories>
                </div>
                <div className='relative my-20 lg:mx-20 border p-5'>
                    <div className='flex justify-center items-center space-x-3'>
                        <img className='w-20 h-[12vh] rounded-full ' src={developer} alt="" />
                        <img className='w-20 h-[12vh] rounded-full ' src={designer1} alt="" />
                        <img className='w-20 h-[12vh] rounded-full ' src={designer2} alt="" />
                    </div>
                    <div>
                        <Swiper
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className=''>
                                    <h1 className='tracking-[2px] text-[#000000a2] leading-6'>A designer is a creative professional who specializes in conceptualizing, visualizing, and crafting aesthetically pleasing and functional designs for various mediums, including digital interfaces, print materials, products, and more. Designers use their artistic skills, knowledge of design principles, and understanding of user experience to create engaging and effective visual solutions.</h1>
                                    <div className='mt-10'>
                                        <h3 className='font-mono'><span className='text-[#b8cb2d] text-2xl'>Mr. John Due</span> /   Deginer</h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <h1 className='tracking-[2px] text-[#000000a2] leading-6'>A developer is a professional who specializes in creating, designing, and maintaining software applications, websites, or other digital solutions. Developers are skilled in various programming languages, frameworks, and tools necessary to build and deploy software products. They typically work closely with designers, project managers, and other stakeholders to understand requirements and translate them into functional code.</h1>
                                    <div className='mt-10'>
                                        <h3 className='font-mono'><span className='text-[#b8cb2d] text-2xl'>David S. Brown</span> /   Developer</h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <h1 className='tracking-[2px] text-[#000000a2] leading-6'>A designer is a professional who specializes in creating visual concepts and solutions to communicate ideas that inspire, inform, and captivate consumers. They combine artistic talent with technical skills to develop designs for a variety of mediums, including print, digital, web, and multimedia platforms</h1>
                                    <div className='mt-10'>
                                        <h3 className='font-mono'><span className='text-[#b8cb2d] text-2xl'>John S. Gray</span> /   Designer</h3>
                                    </div>
                                </div>
                            </SwiperSlide>


                        </Swiper>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Home;