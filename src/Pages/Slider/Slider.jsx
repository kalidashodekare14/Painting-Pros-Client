import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Slider.css';
import slider from '../../assets/banner1.png'
import slider1 from '../../assets/slider2.png'
import slider2 from '../../assets/slider3.png'


import AOS from 'aos';
import 'aos/dist/aos.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';


const Slider = () => {

  
    return (
        <div>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='flex flex-col-reverse lg:flex-row justify-between items-center lg:mx-32 lg:m-20 mx-5 '>
                        <div className='text-left space-y-3 md:space-y-5 mt-10'>
                            <h1 className=' lg:text-[20px] md:text-5xl font-work font-[500] text-[#777777] tracking-[0.6px]'>Best Artist Paintings</h1>
                            <h2 className='lg:text-5xl text-4xl md:text-6xl font-work font-[400] lg:tracking-[0.5px] md:tracking-[0.8px] lg:leading-[60px]'>Latest Paintings <br /> Collection</h2>
                            <p className='lg:text-xl md:text-4xl font-work text-xl text-[#7d7d7d]'>Discover the world through original paintings for sale</p>
                        </div>
                        <img className='lg:w-[50%]' src={slider} alt="" />
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                <div className='flex flex-col-reverse lg:flex-row justify-between items-center lg:mx-32 lg:m-20 mx-5 '>
                        <div className='text-left space-y-3 md:space-y-5 mt-10'>
                            <h1 className=' lg:text-[20px] md:text-5xl font-work font-[500] text-[#777777] tracking-[0.6px]'>Best Artist Paintings</h1>
                            <h2 className='lg:text-5xl text-4xl md:text-6xl font-work font-[400] lg:tracking-[0.5px] md:tracking-[0.8px] lg:leading-[60px]'>Latest Paintings <br /> Collection</h2>
                            <p className='lg:text-xl md:text-4xl font-work text-xl text-[#7d7d7d]'>Discover the world through original paintings for sale</p>
                        </div>
                        <img className='lg:w-[50%]' src={slider1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='flex flex-col-reverse lg:flex-row justify-between items-center lg:mx-32 lg:m-20 mx-5 '>
                        <div className='text-left space-y-3 md:space-y-5 mt-10'>
                            <h1 className=' lg:text-[20px] md:text-5xl font-work font-[500] text-[#777777] tracking-[0.6px]'>Best Artist Paintings</h1>
                            <h2 className='lg:text-5xl text-4xl md:text-6xl font-work font-[400] lg:tracking-[0.5px] md:tracking-[0.8px] lg:leading-[60px]'>Latest Paintings <br /> Collection</h2>
                            <p className='lg:text-xl md:text-4xl font-work text-xl text-[#7d7d7d]'>Discover the world through original paintings for sale</p>
                        </div>
                        <img className='lg:w-[50%]' src={slider2} alt="" />
                    </div>
                </SwiperSlide>
               
            </Swiper>
        </div>
    );
};

export default Slider;