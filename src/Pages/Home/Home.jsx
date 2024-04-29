import React from 'react';
import Slider from '../Slider/Slider';
import { Link, useLoaderData } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import newSlider from '../../assets/pSlider.webp'
import newSlider1 from '../../assets/pSlier1.jpg'
import newSlider2 from '../../assets/pSlider2.webp'
import newSlider3 from '../../assets/pSlider3.webp'
import developer from '../../assets/developer.webp'
import designer1 from '../../assets/designer.jpg'
import designer2 from '../../assets/designer1.jpg'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './News.css'

import { FreeMode, Pagination } from 'swiper/modules';

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
                                        <h3 className='font-mono'><span className='text-[#b8cb2d] text-2xl'>Mr. John Due</span> /   Developer</h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <h1 className='tracking-[2px] text-[#000000a2] leading-6'>A designer is a professional who specializes in creating visual concepts and solutions to communicate ideas that inspire, inform, and captivate consumers. They combine artistic talent with technical skills to develop designs for a variety of mediums, including print, digital, web, and multimedia platforms</h1>
                                    <div className='mt-10'>
                                        <h3 className='font-mono'><span className='text-[#b8cb2d] text-2xl'>Mr. John Due</span> /   Developer</h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                           

                        </Swiper>
                    </div>
                </div>
                <div>
                    <h1 className='text-center text-3xl my-20'>News</h1>
                    <div>
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            <div className="w-full">
                                <SwiperSlide className='relative'>
                                    <div>
                                        <h1 className='absolute  text-3xl bg-[#cfae7a] p-3'>08 oct</h1>
                                        <img className='h-[60vh] w-full' src={newSlider} alt="" />
                                    </div>
                                    <div className='text-left space-y-3 p-5 absolute bottom-0 bg-white mx-20'>
                                        <span className='text-[15px] font-work text-[#000000bc]'>Edgar E. Lake</span>
                                        <h1 className='text-2xl'>Unveiling the Ever-Evolving World of Painting</h1>
                                        <p className='text-[16px] font-work text-[#000000b9]'>immerses you in the dynamic evolution of the painting world, unveiling its vibrant tapestry of creativity and innovation. Journey through the corridors of artistic exploration as traditional</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='relative'>
                                    <div>
                                        <h1 className='absolute text-3xl bg-[#cfae7a] p-3'>04 dec</h1>
                                        <img className='h-[60vh] w-full' src={newSlider1} alt="" />
                                    </div>
                                    <div className='text-left space-y-3 p-5 absolute bottom-0 bg-white mx-20'>
                                        <span className='text-[15px] font-work text-[#000000bc]'>Calvin M. Ray</span>
                                        <h1 className='text-2xl'>Latest Developments in the World of Painting</h1>
                                        <p className='text-[16px] font-work text-[#000000b9]'>Delve into the vibrant palette of the art world's latest transformations with "Brushstrokes of Change." From groundbreaking exhibitions to innovative techniques</p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div>
                                        <h1 className='absolute text-3xl bg-[#cfae7a] p-3'>10 sec</h1>
                                        <img className='h-[60vh] w-full' src={newSlider2} alt="" />
                                    </div>
                                    <div className='text-left space-y-3 p-5 absolute bottom-0 bg-white mx-20'>
                                        <span className='text-[15px] font-work text-[#000000bc]'>Jerry E. Morales</span>
                                        <h1 className='text-2xl'>A Glimpse into the World of Modern Painting</h1>
                                        <p className='text-[16px] font-work text-[#000000b9]'>"Palette Perspectives" invites you into the kaleidoscopic realm of modern painting, where creativity knows no bounds and innovation reigns supreme.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div>
                                        <h1 className='absolute text-3xl bg-[#cfae7a] p-3'>05 Feb</h1>
                                        <img className='h-[60vh] w-full' src={newSlider3} alt="" />
                                    </div>
                                    <div className='text-left space-y-3 p-5 absolute bottom-0 bg-white mx-20'>
                                        <span className='text-[15px] font-work text-[#000000bc]'>Calvin M. Ray</span>
                                        <h1 className='text-2xl'> Exploring the Boundless World of Contemporary Painting</h1>
                                        <p className='text-[16px] font-work text-[#000000b9]'>"Chromatic Horizons" offers a mesmerizing exploration into the expansive and boundless world of contemporary painting. Step into a realm where colors dance, shapes morph, and imagination knows no limits.</p>
                                    </div>
                                </SwiperSlide>
                            </div>

                        </Swiper>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;