import React, { useContext, useEffect, useState } from 'react';
import { AuthContect } from '../../Provider/AuthProvider';
import { FaRegStar } from "react-icons/fa6";
import { MdDateRange, MdDeleteForever } from "react-icons/md";
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const MyArtCraftList = () => {

    const { user } = useContext(AuthContect)
    console.log(user.email)
    const [myPaint, setMyPaint] = useState([])


    const handleSorts = sortArt => {
        if (sortArt === 'cusYes') {
            const yesSort = myPaint.filter(sorts => sorts.customization === 'Yes')
            setMyPaint(yesSort)
            console.log(yesSort)
        }
        else if (sortArt === 'cusNo') {
            const noSort = myPaint.filter(sorts => sorts.customization === 'No')
            setMyPaint(noSort)
        }
    }

    useEffect(() => {
        fetch(`https://painting-pros-server.vercel.app/my_art/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyPaint(data)
            })
    }, [user])


    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://painting-pros-server.vercel.app/my_art/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const reaming = myPaint.filter(paint => paint._id !== _id)
                            setMyPaint(reaming)
                        }

                    })


            }
        });
    }





    return (
        <div >
            <Helmet>
                <title>My Art | Painting Pros</title>
            </Helmet>
            <div className='flex justify-center items-center my-5'>
                <details className="dropdown">
                    <summary className="m-1 btn">Sort By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleSorts('cusYes')}>
                            <span>Yes</span>
                        </li>
                        <li onClick={() => handleSorts('cusNo')}>
                            <span>No</span>
                        </li>
                    </ul>
                </details>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:mx-20 my-10'>
                {
                    myPaint.map(paint => <div key={paint._id}>
                        <div className="hero shadow">
                            <div className="hero-content flex-col lg:flex-row">
                                <div className='relative border-8 border-black p-3 lg:w-[50%] '>
                                    <div className='flex items-center space-x-1 absolute right-3 top-3 bg-[#4b8106] px-2 text-white'>
                                        <FaRegStar />
                                        <span >{paint.rating}</span>
                                    </div>

                                    <img className='w-full h-[55vh]' src={paint.image} />
                                </div>
                                <div className='space-y-3 flex-1'>

                                    <h1 className="text-2xl font-bold">{paint.item_name}</h1>
                                    <h3 className='text-xl'>{paint.subcategory_Name}</h3>
                                    <div className='flex justify-between items-center text-[16px] font-[600] font-work'>
                                        <span>${paint.price}</span>
                                        <div className='flex items-center space-x-1'>
                                            <MdDateRange />
                                            <span>{paint.processing_time
                                            }</span>
                                        </div>
                                    </div>

                                    <h1 className='text-[16px] font-[500]'>Customization: {paint.customization}</h1>
                                    <h2 className='text-[16px] font-[500]'>Stock Status: {paint.stockStatus}</h2>

                                    <p className="text-[15px] font-[500]  tracking-[0.6px] ">{paint.short_description.slice(0, 100)
                                    }</p>
                                    {/* <button className="btn btn-primary">Get Started</button> */}
                                    <div className='flex justify-end items-center space-x-3'>
                                        <Link to={`/update_craft/${paint._id}`}>
                                            <FaEdit className='text-[25px] hover:text-blue-700' />
                                        </Link>
                                        <div onClick={() => handleDelete(paint._id)}>
                                            <MdDeleteForever className='text-[30px] hover:text-red-600' />
                                        </div>
                                    </div>
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