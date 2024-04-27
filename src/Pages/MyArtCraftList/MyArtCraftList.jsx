import React, { useContext, useEffect, useState } from 'react';
import { AuthContect } from '../../Provider/AuthProvider';

const MyArtCraftList = () => {

    const { user } = useContext(AuthContect)
    console.log(user.email)
    const [myPaint, setMyPaint] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myArt/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyPaint(data)
            })
    }, [user])

    return (
        <div >
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mx-20 my-10'>
                {
                    myPaint.map(paint => <div>
                        <div className="hero shadow">
                            <div className="hero-content flex-col lg:flex-row">
                                <div className='relative w-[150%] border-8 border-black p-3'>
                                    <span className='absolute right-3 top-3 bg-[#4b8106] px-2 text-white'>{paint.rating}</span> 
                                    <img className='w-full h-[50vh]' src={paint.image} />
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold">{paint.item_name}</h1>
                                    <h3 className='text-xl'>{paint.subcategory_Name}</h3>
                                    <div className='flex justify-between items-center'>
                                        <span>${paint.price}</span>
                                        <h2>{paint.processing_time
                                        }</h2>
                                    </div>
                                    <div>
                                    </div>
                                    <p className="py-6">{paint.short_description
                                    }</p>
                                    <button className="btn btn-primary">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default MyArtCraftList;